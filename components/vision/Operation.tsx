"use client";

import Image from "next/image";

export default function Operation() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05070B]">

      {/* ===========================
          Background Image
      =========================== */}

      <div className="absolute inset-0">

        <Image
          src="/images/vision/operation-alignment-v1.png"
          alt="Alineación entre estrategia y operación"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Base */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/80 via-[#05070B]/58 to-[#05070B]/08" />

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:py-32 lg:px-10 lg:py-36 xl:px-12">

        <div className="flex max-w-2xl flex-col justify-start">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-4 py-2 backdrop-blur sm:px-5">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4A017] sm:text-xs sm:tracking-[0.35em]">
              NUESTRA FORMA DE TRABAJAR
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-[2.8rem] font-light leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-[4.2rem]">

            Alineamos
            <br />
            la estrategia
            <br />
            con la operación.

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 sm:mt-12 sm:text-xl sm:leading-9">

            La estrategia solo genera resultados cuando cada decisión,
            proceso y persona trabajan en la misma dirección.

          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:mt-8 sm:text-xl sm:leading-9">

            Integramos información, procesos y capacidades para convertir
            la visión del negocio en una ejecución consistente.

          </p>

        </div>

      </div>

      {/* Decorative Lines */}

      <div className="pointer-events-none absolute inset-0 hidden lg:block">

        <div className="absolute left-20 top-1/2 h-56 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        <div className="absolute right-20 top-1/2 h-56 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

    </section>
  );
}