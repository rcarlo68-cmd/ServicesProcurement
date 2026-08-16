import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

interface LayoutProps {
  preview: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function Layout({
  preview,
  title,
  subtitle,
  children,
}: LayoutProps) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          margin: 0,
          padding: "40px 0",
          backgroundColor: "#05070B",
          fontFamily:
            "Inter, Segoe UI, Helvetica Neue, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            backgroundColor: "#0C1016",
            border: "1px solid #222831",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >
          {/* ENCABEZADO */}
          <Section
            style={{
              padding: "42px",
              textAlign: "center",
              borderBottom: "1px solid #1F2937",
            }}
          >
            <Img
              src="https://www.servicesprocurementpe.com/images/logo/logo-white.png"
              alt="Services Procurement"
              height="40"
              style={{
                display: "block",
                width: "auto",
                height: "40px",
                margin: "0 auto",
              }}
            />

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: "34px",
                fontWeight: 300,
                margin: "22px 0 12px",
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                color: "#B8C0CC",
                fontSize: "17px",
                lineHeight: "30px",
                margin: 0,
              }}
            >
              {subtitle}
            </Text>
          </Section>

          {/* CONTENIDO */}
          <Section
            style={{
              padding: "42px",
            }}
          >
            {children}
          </Section>

          {/* FOOTER */}
          <Section
            style={{
              borderTop: "1px solid #1F2937",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: "#7B8794",
                fontSize: "13px",
                lineHeight: "22px",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Services Procurement
              <br />
              Procurement · Supply Chain · Logistics
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

