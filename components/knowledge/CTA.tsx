"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 lg:py-40">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[170px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070B]/20 to-[#05070B]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-10">

        {/* Eyebrow */}

        <div className="mb-8 flex items-center gap-5">
          <div className="h-px w-16 bg-[#D4AF37]" />

          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-[#D4AF37]">
            SP KNOWLEDGE
          </span>

          <div className="h-px w-16 bg-[#D4AF37]" />
        </div>

        {/* Title */}

        <h2 className="max-w-4xl text-[clamp(2.7rem,5vw,5rem)] font-light leading-[1.05] tracking-[-0.05em] text-white">
          Conocimiento aplicado
          <br />
          para transformar
          <br />
          la cadena de suministro.
        </h2>

        {/* Copy */}

        <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
          Descubra investigaciones, artículos y experiencias desarrolladas
          desde la práctica profesional para fortalecer la logística,
          procurement y la gestión integral de la cadena de suministro.
        </p>

        {/* Buttons */}

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">

          <Link
            href="/contacto#formulario"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-10
              text-[15px]
              font-semibold
              text-[#111111]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:brightness-110
            "
          >
            Solicitar una reunión
          </Link>

          <Link
            href="/modelo-sp6"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/5
              px-10
              text-[15px]
              font-medium
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
            "
          >
            Descubrir el Modelo SP6
          </Link>

        </div>

      </div>

    </section>
  );
}