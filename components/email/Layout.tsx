import {
  Body,
  Container,
  Head,
  Html,
  Preview,
} from "@react-email/components";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  preview: string;
  title: string;
  subtitle?: string;
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
          backgroundColor: "#F1F5F9",
          fontFamily:
            "Segoe UI, Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            width: "600px",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
          }}
        >
          <Header
            title={title}
            subtitle={subtitle}
          />

          <Container
            style={{
              padding: "40px",
            }}
          >
            {children}
          </Container>

          <Footer />
        </Container>
      </Body>
    </Html>
  );
}