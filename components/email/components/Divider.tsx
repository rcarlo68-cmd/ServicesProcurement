import { Hr } from "@react-email/components";
import React from "react";

interface DividerProps {
  margin?: string;
}

export default function Divider({
  margin = "32px 0",
}: DividerProps) {
  return (
    <Hr
      style={{
        border: "none",
        borderTop: "1px solid #E2E8F0",
        margin,
      }}
    />
  );
}