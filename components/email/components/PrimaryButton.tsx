import { Button } from "@react-email/components";
import React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Button
      href={href}
      style={{
        display: "inline-block",
        backgroundColor: "#0891B2",
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: 700,
        padding: "14px 28px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      {children}
    </Button>
  );
}