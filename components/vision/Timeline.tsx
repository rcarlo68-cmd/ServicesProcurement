"use client";

import Image from "next/image";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative isolate min-h-screen overflow-hidden bg-[#05070B]"
    >
      {/* ===========================
          Background Image
      =========================== */}

      <div className="absolute inset-0">

        <Image
          src="/images/vision/timeline-evolution-v1.png"
          alt="Evolución del Modelo SP6"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Base */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/84 via-[#05070B]/62 to-[#05070B]/10" />

        {/* Bottom Fade */}

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#05070B] to-transparent" />

        {/* Top Fade */}

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#05070B]/80 to-transparent" />

        {/* Ambient Glow */}

        <div className="absolute left-[-180px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[#D4A017]/10 blur-[180px]" />

      </div>

      {/* ===========================
          Content
      =========================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 lg:px-10 lg:pt-32 xl:px-12">

        <div className="max-w-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-5 py-2 backdrop-blur">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A017]">
              NUESTRA EVOLUCIÓN
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-10 text-[2.8rem] font-light leading-[1.02] tracking-[-0.04em] text-white md:text-6xl xl:text-[4.2rem]">

            Evolucionamos
            <br />
            junto con la
            <br />
            cadena de
            <br />
            suministro.

          </h2>

          {/* Copy */}

          <p className="mt-12 max-w-xl text-xl leading-9 text-slate-200">
            Cada etapa incorpora nuevas capacidades
            para integrar procesos, fortalecer la
            ejecución y mejorar los resultados.
          </p>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            El Modelo SP6 reúne esa evolución
            en un marco de trabajo que conecta
            estrategia y operación.
          </p>

        </div>

      </div>

      {/* Decorative Lines */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-20 top-1/2 h-56 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        <div className="absolute right-20 top-1/2 h-56 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

    </section>
  );
}