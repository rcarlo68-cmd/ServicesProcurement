import Header from "../layout/Header";

import Hero from "./Hero";
import Challenge from "./challenge/Challenge";
import SP6 from "../sp6";
import CTA from "../cta";


export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-[#05070b]">
        <Hero />
        <Challenge />
        <SP6 />
        <CTA />
        
      </main>
    </>
  );
}