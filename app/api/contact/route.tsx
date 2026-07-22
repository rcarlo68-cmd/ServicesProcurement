import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import { resend } from "@/lib/resend";

import ContactNotification from "@/components/email/ContactNotification";
import ContactConfirmation from "@/components/email/ContactConfirmation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      position,
      email,
      phone,
      country,
      service,
      message,
      privacy,
    } = body;

    if (
      !name ||
      !company ||
      !email ||
      !message ||
      !privacy
    ) {
      return NextResponse.json(
        { error: "Información incompleta." },
        { status: 400 }
      );
    }

    // Correo interno
    const notificationHtml = await render(
      <ContactNotification
        name={name}
        company={company}
        position={position}
        email={email}
        phone={phone}
        country={country}
        service={service}
        message={message}
      />
    );

    // Correo al visitante
    const confirmationHtml = await render(
      <ContactConfirmation
        name={name}
        company={company}
        service={service}
      />
    );

    // Envío interno
    const internalEmail = await resend.emails.send({
      from: "Services Procurement <rcabrera@servicesprocurementpe.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Nuevo contacto - ${company}`,
      html: notificationHtml,
    });

    if (internalEmail.error) {
      console.error(internalEmail.error);

      return NextResponse.json(
        { error: internalEmail.error.message },
        { status: 500 }
      );
    }

    // Confirmación al visitante
    const confirmationEmail = await resend.emails.send({
      from: "Services Procurement <rcabrera@servicesprocurementpe.com>",
      to: email,
      subject: "Hemos recibido su solicitud",
      html: confirmationHtml,
    });

    if (confirmationEmail.error) {
      console.error(confirmationEmail.error);

      return NextResponse.json(
        { error: confirmationEmail.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error enviando los correos.",
      },
      {
        status: 500,
      }
    );
  }
}