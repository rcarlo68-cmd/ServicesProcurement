"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28 lg:py-36">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center lg:px-10 xl:px-12">
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#D4AF37]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            SERVICES PROCUREMENT
          </span>

          <div className="h-px w-16 bg-[#D4AF37]" />
        </div>

        <h2 className="text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
          Transformemos juntos
          <br />
          su cadena de suministro.
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-slate-300">
          Descubra cómo el Modelo SP6 puede ayudar a fortalecer sus procesos,
          reducir pérdidas operativas y convertir la logística en una verdadera
          ventaja competitiva para su organización.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
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
              hover:brightness-110
            "
          >
            Solicitar una reunión
          </Link>

          <Link
            href="/knowledge"
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
            Explorar SP Knowledge
          </Link>
        </div>
      </div>
    </section>
  );
}