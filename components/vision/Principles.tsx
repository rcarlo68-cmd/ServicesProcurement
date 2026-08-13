"use client";

import Image from "next/image";

export default function Principles() {
  return (
    <section
      id="principles"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#05070B]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-1/2 h-[900px] w-[900px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-[#D4A017]/8 blur-[220px]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/96 to-[#05070B]" />

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-20">

        {/* Badge */}

        <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-6 py-3 backdrop-blur">

          <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A017]">
            NUESTRO ENFOQUE
          </span>

        </div>

        {/* Title */}

        <h2 className="mt-10 max-w-2xl text-[clamp(3.3rem,4.7vw,4.8rem)] font-extralight leading-[1.05] tracking-[-0.05em] text-white">

          <>
  Las grandes organizaciones
  <br />
  <span className="block mt-5">
    comparten un mismo
  </span>

  <span className="text-[#D4A017]">
    lenguaje.
  </span>
</>

        </h2>

        {/* Statement */}

        <div className="mt-12 max-w-2xl">

          <p className="text-[1.35rem] leading-[2.35rem] text-slate-200">

            Cuando cada proceso interpreta la operación
desde una lógica distinta, la estrategia pierde
coherencia y deja de funcionar como un
verdadero sistema.

          </p>

        </div>

        {/* Closing */}

        <div className="mt-10 max-w-xl">

          <p className="text-xl leading-9 text-slate-400">

            Convertimos la estrategia en un lenguaje
compartido por toda la organización.

          </p>

        </div>

        {/* Logo */}

        <div className="mt-8">

          <Image
            src="/images/logo/logo-white.png"
            alt="Services Procurement"
            width={220}
            height={62}
            priority
            className="opacity-90"
          />

        </div>

      </div>

    </section>
  );
}