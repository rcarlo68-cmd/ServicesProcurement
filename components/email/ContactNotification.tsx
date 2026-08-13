import { Section, Text, Button } from "@react-email/components";
import Layout from "./Layout";

interface ContactNotificationProps {
  name: string;
  company: string;
  position?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const labelStyle = {
  color: "#D4AF37",
  fontSize: "13px",
  fontWeight: "bold" as const,
  margin: "0 0 6px",
};

const valueStyle = {
  color: "#E5E7EB",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 18px",
};

export default function ContactNotification({
  name,
  company,
  position,
  email,
  phone,
  service,
  message,
}: ContactNotificationProps) {
  return (
    <Layout
      preview={`Nuevo contacto recibido de ${company}`}
      title="Nuevo contacto"
      subtitle="Se recibió una nueva solicitud desde el sitio web."
    >
      <Section>

        <Text style={labelStyle}>EMPRESA</Text>
        <Text style={valueStyle}>{company}</Text>

        <Text style={labelStyle}>NOMBRE</Text>
        <Text style={valueStyle}>{name}</Text>

        <Text style={labelStyle}>CARGO</Text>
        <Text style={valueStyle}>
          {position || "-"}
        </Text>

        <Text style={labelStyle}>CORREO</Text>
        <Text style={valueStyle}>{email}</Text>

        <Text style={labelStyle}>TELÉFONO</Text>
        <Text style={valueStyle}>
          {phone || "-"}
        </Text>

        <Text style={labelStyle}>ÁREA DE INTERÉS</Text>
        <Text style={valueStyle}>
          {service || "-"}
        </Text>

        <Text style={labelStyle}>MENSAJE</Text>

        <Section
          style={{
            backgroundColor: "#121822",
            border: "1px solid #2A3442",
            borderRadius: "12px",
            padding: "22px",
            marginBottom: "30px",
          }}
        >
          <Text
            style={{
              color: "#E5E7EB",
              lineHeight: "28px",
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </Text>
        </Section>

        <Section
          style={{
            textAlign: "center",
          }}
        >
          <Button
            href={`mailto:${email}`}
            style={{
              backgroundColor: "#D4AF37",
              color: "#111111",
              padding: "14px 30px",
              borderRadius: "999px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Responder al cliente
          </Button>
        </Section>

      </Section>
    </Layout>
  );
}