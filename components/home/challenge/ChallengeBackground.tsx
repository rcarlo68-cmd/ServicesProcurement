"use client";

import Image from "next/image";

export default function ChallengeBackground() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/challenge/challenge-master.jpg"
          alt="Cadena de suministro"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-[#05070B]/70" />

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#05070B] via-[#05070B]/70 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

      {/* Left Light */}
      <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-black/35 to-transparent" />

      {/* Right Light */}
      <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-black/30 to-transparent" />

      {/* Radial Highlight */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
        "
      />
    </>
  );
}