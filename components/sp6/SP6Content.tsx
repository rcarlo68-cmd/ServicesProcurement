"use client";

import Link from "next/link";

export default function SP6Content() {
  return (
    <div className="max-w-2xl">

      {/* Eyebrow */}

      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-16 bg-[#D4AF37]" />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          EL MODELO SP6
        </span>
      </div>

      {/* Title */}

      <h2 className="text-[clamp(2.2rem,4vw,3.9rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
        El problema no está
        <br />
        en un proceso.
        <br />
        <span className="font-medium text-[#D4AF37]">
          Está en la interacción
          <br />
          entre todos ellos.
        </span>
      </h2>

      {/* Copy */}

      <p className="mt-8 max-w-xl text-[1.15rem] leading-8 text-slate-200">
        La mayoría optimiza áreas.
        <br />
        El SP6 las alinea como un sistema.
      </p>

      {/* CTA */}

      <div className="mt-10">
        <Link
  href="/modelo-sp6"
  className="
    inline-flex
    h-14
    items-center
    justify-center
    rounded-full
    bg-[#D4AF37]
    px-8
    text-[15px]
    font-semibold
    text-[#111111]
    transition-all
    duration-300
    hover:brightness-110
  "
>
  Explorar el Modelo SP6
</Link>
      </div>

    </div>
  );
}