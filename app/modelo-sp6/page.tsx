import Header from "@/components/layout/Header";

import Hero from "@/components/modelo-sp6/Hero";
import Introduction from "@/components/modelo-sp6/Introduction";
import Capabilities from "@/components/modelo-sp6/Capabilities";
import Process from "@/components/modelo-sp6/Process";
import Benefits from "@/components/modelo-sp6/Benefits";
import CTA from "@/components/modelo-sp6/CTA";

export const metadata = {
  title: "Modelo SP6 | Services Procurement",
  description:
    "Conozca el Modelo SP6, una metodología desarrollada por Services Procurement para transformar la cadena de suministro mediante la integración de Procurement, Almacenes, Operaciones, Auditoría Logística, Transformación Digital y Desarrollo del Talento.",
};

export default function ModeloSP6Page() {
  return (
    <main className="overflow-x-hidden bg-[#05070B] text-white">
      <Header variant="dark" />

      <Hero />
      <Introduction />
      <Capabilities />
      <Process />
      <Benefits />
      <CTA />
    </main>
  );
}