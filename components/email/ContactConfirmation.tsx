import { Section, Text, Button } from "@react-email/components";
import Layout from "./Layout";

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
      <Section>

        <Text
          style={{
            color: "#E5E7EB",
            fontSize: "16px",
            lineHeight: "30px",
            marginBottom: "28px",
          }}
        >
          Hola <strong>{name}</strong>,
        </Text>

        <Text
          style={{
            color: "#B8C0CC",
            fontSize: "16px",
            lineHeight: "30px",
            marginBottom: "24px",
          }}
        >
          Gracias por comunicarse con <strong>Services Procurement</strong>.
          Hemos recibido correctamente su solicitud y en breve revisaremos la
          información enviada para ponernos en contacto con usted.
        </Text>

        <Section
          style={{
            backgroundColor: "#121822",
            border: "1px solid #2A3442",
            borderRadius: "12px",
            padding: "24px",
            margin: "32px 0",
          }}
        >
          <Text
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              margin: "0 0 10px",
            }}
          >
            Empresa
          </Text>

          <Text
            style={{
              color: "#E5E7EB",
              margin: "0 0 22px",
            }}
          >
            {company}
          </Text>

          <Text
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              margin: "0 0 10px",
            }}
          >
            Área de interés
          </Text>

          <Text
            style={{
              color: "#E5E7EB",
              margin: 0,
            }}
          >
            {service || "-"}
          </Text>
        </Section>

        <Text
          style={{
            color: "#B8C0CC",
            fontSize: "16px",
            lineHeight: "30px",
            marginBottom: "36px",
          }}
        >
          Mientras tanto, lo invitamos a conocer nuestro enfoque sobre
          procurement, logística y cadena de suministro.
        </Text>

        <Section
          style={{
            textAlign: "center",
          }}
        >
          <Button
            href="https://servicesprocurementpe.com"
            style={{
              backgroundColor: "#D4AF37",
              color: "#111111",
              padding: "14px 30px",
              borderRadius: "999px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Visitar Services Procurement
          </Button>
        </Section>

      </Section>
    </Layout>
  );
}