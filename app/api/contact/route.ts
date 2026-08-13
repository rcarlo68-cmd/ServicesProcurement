import { NextResponse } from "next/server";
import { createElement } from "react";
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
      email,
      phone,
      position,
      service,
      message,
    } = body;

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        {
          error: "Información incompleta.",
        },
        {
          status: 400,
        }
      );
    }

    const notificationHtml = await render(
      createElement(ContactNotification, {
        name,
        company,
        position,
        email,
        phone,
        service,
        message,
      })
    );

    const confirmationHtml = await render(
      createElement(ContactConfirmation, {
        name,
        company,
        service,
      })
    );

    const internalEmail = await resend.emails.send({
      from: "Services Procurement <rcabrera@servicesprocurementpe.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Nuevo contacto - ${company}`,
      html: notificationHtml,
    });

    if (internalEmail.error) {
      return NextResponse.json(
        {
          error: internalEmail.error.message,
        },
        {
          status: 500,
        }
      );
    }

    const confirmationEmail = await resend.emails.send({
      from: "Services Procurement <rcabrera@servicesprocurementpe.com>",
      to: email,
      subject: "Hemos recibido su solicitud",
      html: confirmationHtml,
    });

    if (confirmationEmail.error) {
      return NextResponse.json(
        {
          error: confirmationEmail.error.message,
        },
        {
          status: 500,
        }
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
        error: "Error enviando el formulario.",
      },
      {
        status: 500,
      }
    );
  }
}