"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05070B]">
      {/* Background Image */}
      <Image
        src="/images/modelo-sp6/hero-modelo-sp6.png"
        alt="Modelo SP6"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/95 via-[#05070B]/82 to-[#05070B]/20" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/45 via-transparent to-[#05070B]/70" />

      {/* Golden Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(212,175,55,.10),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-10 xl:px-12">
        <div className="max-w-3xl pt-24">

          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              MODELO SP6
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-white">
            Una metodología
            <br />
            para transformar
            <br />
            la cadena de
            <br />
            suministro.
          </h1>

          {/* Copy */}
          <p className="mt-8 max-w-2xl text-[1.18rem] leading-8 text-slate-200">
            El Modelo SP6 integra las capacidades críticas de la cadena de
            suministro en un único marco de gestión para reducir pérdidas
            operativas, fortalecer la ejecución y convertir la logística en una
            ventaja competitiva.
          </p>

          {/* Actions */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="#introduccion"
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
              Descubrir el Modelo
            </Link>

            <Link
              href="/contacto#diagnostico"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8
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
              Solicitar un diagnóstico
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />
    </section>
  );
}