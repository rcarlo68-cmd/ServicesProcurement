import type { ReactNode } from "react";

import Header from "@/components/layout/Header";


interface KnowledgeLayoutProps {
  children: ReactNode;
}

export default function KnowledgeLayout({
  children,
}: KnowledgeLayoutProps) {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070B] pt-[104px]">
        {children}
      </main>

      
    </>
  );
}