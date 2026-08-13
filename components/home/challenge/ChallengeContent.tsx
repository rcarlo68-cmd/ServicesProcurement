"use client";

import Link from "next/link";

export default function ChallengeContent() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-20 lg:px-10 xl:px-12">
      <div className="max-w-2xl">
        {/* Eyebrow */}

        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37] backdrop-blur-md">
          MÁS ALLÁ DE LOS SÍNTOMAS
        </span>

        {/* Título */}

        <h2 className="mt-6 text-[clamp(2.3rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
          ¿Qué está impidiendo que
          <br />
          su cadena de suministro
          <br />
          genere el valor esperado?
        </h2>

        {/* Statement */}

<div className="mt-8">
  <p className="text-[1.25rem] font-light text-slate-300">
    El desafío no es optimizar procesos.
  </p>

  <p className="mt-3 text-[1.8rem] font-medium text-white">
    Es{" "}
    <span className="uppercase tracking-[0.02em] text-[#D4AF37]">
      REALINEAR EL SISTEMA.
    </span>
  </p>
</div>

        {/* CTA */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
             href="/modelo-sp6"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            Conocer SP6
          </Link>

          <Link
            href="/contacto#formulario"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </div>
    </div>
  );
}