"use client";

import Image from "next/image";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative isolate min-h-screen overflow-hidden bg-[#05070B]"
    >
      {/* ===========================
          Background Image
      =========================== */}

      <div className="absolute inset-0">

        <Image
          src="/images/vision/vision-boardroom-v1.png"
          alt="Nuestra Convicción"
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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 sm:py-32 lg:px-10 lg:py-0 xl:px-12">

        <div className="max-w-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-4 py-2 backdrop-blur sm:px-5">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4A017] sm:text-xs sm:tracking-[0.35em]">
              Nuestra Convicción
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[3.8rem]">

            La alta dirección
            <br />
            necesita información
            <br />

            <span className="text-[#D4A017]">
              confiable
            </span>{" "}

            para tomar decisiones.

          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:mt-10 sm:text-xl sm:leading-9">
            La calidad de las decisiones depende de la calidad de la información
            que genera la operación.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:mt-8 sm:text-xl sm:leading-9">
            Fortalecemos la cadena de suministro para convertir esa información
            en una base confiable para decidir, ejecutar y crear valor.
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