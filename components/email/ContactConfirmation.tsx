import { Section, Text } from "@react-email/components";

import Layout from "./Layout";

import PrimaryButton from "./components/PrimaryButton";
import SectionTitle from "./components/SectionTitle";
import Divider from "./components/Divider";
import InfoCard from "./components/InfoCard";

interface ContactConfirmationProps {
  name: string;
  company: string;
  service?: string;
}

export default function ContactConfirmation({
  name,
  company,
  service,
}: ContactConfirmationProps) {
  return (
    <Layout
      preview="Hemos recibido su solicitud."
      title="Gracias por contactarnos"
      subtitle="Su mensaje ha sido recibido correctamente."
    >
      <SectionTitle>
        Hola {name},
      </SectionTitle>

      <Text
        style={{
          fontSize: "16px",
          lineHeight: "28px",
          color: "#334155",
          margin: 0,
        }}
      >
        Gracias por ponerse en contacto con <strong>Services Procurement</strong>.
        Hemos recibido correctamente su solicitud y agradecemos el interés en
        nuestros servicios.
      </Text>

      <Text
        style={{
          fontSize: "16px",
          lineHeight: "28px",
          color: "#334155",
          marginTop: "18px",
        }}
      >
        Nuestro equipo revisará la información enviada y se comunicará con usted
        a la brevedad para comprender mejor sus necesidades y coordinar los
        siguientes pasos.
      </Text>

      <Divider />

      <SectionTitle>
        Resumen de su solicitud
      </SectionTitle>

      <InfoCard
        label="Empresa"
        value={company}
      />

      <InfoCard
        label="Servicio de interés"
        value={service}
      />

      <Divider />

      <Section
        style={{
          textAlign: "center",
          marginTop: "36px",
          marginBottom: "36px",
        }}
      >
        <PrimaryButton href="https://servicesprocurementpe.com">
          Visitar Services Procurement
        </PrimaryButton>
      </Section>

      <Divider />

      <Text
        style={{
          fontSize: "14px",
          lineHeight: "24px",
          color: "#64748B",
          textAlign: "center",
          margin: 0,
        }}
      >
        Este es un mensaje automático de confirmación.
        <br />
        No es necesario responder a este correo.
      </Text>
    </Layout>
  );
}