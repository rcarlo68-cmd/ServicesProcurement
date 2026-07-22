import type { Metadata } from "next";

import Benefits from "@/components/sp6/Benefits";
import Compass from "@/components/sp6/Compass";
import CTA from "@/components/sp6/CTA";
import Hero from "@/components/sp6/Hero";
import Industries from "@/components/sp6/Industries";
import Introduction from "@/components/sp6/Introduction";
import Methodology from "@/components/sp6/Methodology";
import Origin from "@/components/sp6/Origin";
import Pillars from "@/components/sp6/Pillars";

export const metadata: Metadata = {
  title: "Modelo SP6 | Services Procurement",
  description:
    "Conozca el Modelo SP6, la metodología desarrollada por Services Procurement para fortalecer la cadena de suministro desde una perspectiva integral.",
};

export default function SP6Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <Introduction />

      <Origin />

      <Compass />

      <Pillars />

      <Methodology />

      <Benefits />

      <Industries />

      <CTA />
    </main>
  );
}