"use client";

import Image from "next/image";

export default function SP6Illustration() {
  return (
    <>
      {/* Imagen */}
      <div
        className="
          absolute
          inset-0
          translate-x-20
          lg:translate-x-24
          xl:translate-x-28
        "
      >
        <Image
          src="/images/sp6/sp6-master.png"
          alt="Modelo SP6"
          fill
          priority
          quality={100}
          className="
            object-cover
            object-[82%_50%]
            select-none
            pointer-events-none
            brightness-105
            contrast-105
          "
        />
      </div>

      {/* Luz principal */}
      <div
        className="
          absolute
          right-[-8%]
          top-1/2
          h-[900px]
          w-[900px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/6
          blur-[180px]
        "
      />

      {/* Luz secundaria */}
      <div
        className="
          absolute
          right-[12%]
          top-[18%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-amber-400/10
          blur-[120px]
        "
      />

      {/* Viñeta */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/25
          via-transparent
          to-black/15
        "
      />
    </>
  );
}