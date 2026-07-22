import { Heading } from "@react-email/components";
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <Heading
      as="h2"
      style={{
        margin: "0 0 24px",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px",
        color: "#0F172A",
      }}
    >
      {children}
    </Heading>
  );
}