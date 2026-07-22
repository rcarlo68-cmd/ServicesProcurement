import { Section, Text } from "@react-email/components";
import React from "react";

interface InfoCardProps {
  label: string;
  value?: React.ReactNode;
}

export default function InfoCard({
  label,
  value,
}: InfoCardProps) {
  return (
    <Section
      style={{
        backgroundColor: "#F8FAFC",
        border: "1px solid #E2E8F0",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "14px",
      }}
    >
      <Text
        style={{
          margin: "0 0 6px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#64748B",
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          color: "#0F172A",
        }}
      >
        {value || "-"}
      </Text>
    </Section>
  );
}