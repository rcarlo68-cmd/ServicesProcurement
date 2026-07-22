import {
  Container,
  Hr,
  Link,
  Section,
  Text,
} from "@react-email/components";

export default function Footer() {
  return (
    <Section
      style={{
        backgroundColor: "#F8FAFC",
        padding: "32px 0",
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <Hr
          style={{
            borderColor: "#E2E8F0",
            marginBottom: "28px",
          }}
        />

        <Text
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0F172A",
            marginBottom: "10px",
          }}
        >
          Services Procurement
        </Text>

        <Text
          style={{
            color: "#475569",
            fontSize: "15px",
            lineHeight: "24px",
            marginBottom: "20px",
          }}
        >
          Transformamos la experiencia operativa en conocimiento
          aplicado para fortalecer Procurement, Supply Chain,
          Almacenes e Inventarios y el desarrollo del talento.
        </Text>

        <Text
          style={{
            marginBottom: "8px",
            fontSize: "14px",
          }}
        >
          📧{" "}
          <Link
            href="mailto:rcabrera@servicesprocurementpe.com"
            style={{
              color: "#0891B2",
              textDecoration: "none",
            }}
          >
            rcabrera@servicesprocurementpe.com
          </Link>
        </Text>

        <Text
          style={{
            marginBottom: "8px",
            fontSize: "14px",
          }}
        >
          🌐{" "}
          <Link
            href="https://servicesprocurementpe.com"
            style={{
              color: "#0891B2",
              textDecoration: "none",
            }}
          >
            servicesprocurementpe.com
          </Link>
        </Text>

        <Text
          style={{
            marginBottom: "18px",
            fontSize: "14px",
          }}
        >
          🇵🇪 Lima, Perú
        </Text>

        <Hr
          style={{
            borderColor: "#E2E8F0",
            margin: "24px 0",
          }}
        />

        <Text
          style={{
            color: "#94A3B8",
            fontSize: "12px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          © 2026 Services Procurement.
          <br />
          Todos los derechos reservados.
        </Text>
      </Container>
    </Section>
  );
}