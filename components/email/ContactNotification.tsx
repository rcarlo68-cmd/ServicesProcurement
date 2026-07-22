import { Section, Text } from "@react-email/components";

import Layout from "./Layout";

import InfoCard from "./components/InfoCard";
import PrimaryButton from "./components/PrimaryButton";
import SectionTitle from "./components/SectionTitle";
import Divider from "./components/Divider";

interface ContactNotificationProps {
  name: string;
  company: string;
  position?: string;
  email: string;
  phone?: string;
  country?: string;
  service?: string;
  message: string;
}

export default function ContactNotification({
  name,
  company,
  position,
  email,
  phone,
  country,
  service,
  message,
}: ContactNotificationProps) {
  return (
    <Layout
      preview={`Nuevo contacto recibido de ${company}`}
      title="Nuevo contacto"
      subtitle="Se recibió una nueva solicitud desde el sitio web de Services Procurement."
    >
      <SectionTitle>
        Información del contacto
      </SectionTitle>

      <InfoCard label="Nombre" value={name} />

      <InfoCard label="Empresa" value={company} />

      <InfoCard label="Cargo" value={position} />

      <InfoCard label="Correo electrónico" value={email} />

      <InfoCard label="Teléfono" value={phone} />

      <InfoCard label="País" value={country} />

      <InfoCard label="Servicio solicitado" value={service} />

      <Divider />

      <SectionTitle>
        Mensaje
      </SectionTitle>

      <Section
        style={{
          backgroundColor: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: "10px",
          padding: "24px",
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: "16px",
            lineHeight: "28px",
            color: "#334155",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </Text>
      </Section>

      <Section
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "32px",
        }}
      >
        <PrimaryButton href={`mailto:${email}`}>
          Responder al cliente
        </PrimaryButton>
      </Section>

      <Divider />

      <Text
        style={{
          margin: 0,
          fontSize: "13px",
          lineHeight: "22px",
          color: "#64748B",
          textAlign: "center",
        }}
      >
        Este mensaje fue generado automáticamente desde el formulario de
        contacto del sitio web de <strong>Services Procurement</strong>.
      </Text>
    </Layout>
  );
}