import Header from "@/components/layout/Header";

import Hero from "./Hero";
import Manifesto from "./Manifesto";
import Principles from "./Principles";
import Operation from "./Operation";
import Timeline from "./Timeline";
import CTA from "./CTA";

export default function Vision() {
  return (
    <main className="relative overflow-hidden bg-[#05070B] text-white">

      <Header />

      <Hero />

      <Manifesto />

      <Principles />

      <Operation />

      <Timeline />

      <CTA />

    </main>
  );
}