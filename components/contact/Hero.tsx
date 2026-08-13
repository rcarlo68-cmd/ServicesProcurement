"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[72vh] lg:min-h-[88vh] overflow-hidden bg-[#05070B]">

      {/* Background */}

      <Image
        src="/images/contact/hero-contact-v1.png"
        alt="Contacto Services Procurement"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Main Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/90 via-[#05070B]/72 to-[#05070B]/18" />

      {/* Top Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/45 via-transparent to-[#05070B]/75" />

      {/* Golden Ambient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(212,175,55,.10),transparent_42%)]" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[72vh] lg:min-h-[88vh] w-full max-w-7xl items-center px-6 pt-8 lg:px-10 lg:pt-32 xl:px-12">

        <div className="max-w-[760px]">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-5 py-3 backdrop-blur">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A017]">
              CONTACTO
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-[clamp(3rem,5.5vw,5.7rem)] font-extralight leading-[0.93] tracking-[-0.05em] text-white">

            Conversemos
            <br />
            sobre el futuro
            <br />
            de su cadena
            <br />
            de suministro.

          </h1>

          {/* Copy */}

          <p className="mt-8 max-w-2xl text-[1.15rem] leading-9 text-slate-200">

            Cada organización enfrenta desafíos distintos.
            La mejor solución comienza entendiendo el contexto,
            identificando oportunidades y definiendo juntos
            el camino para generar resultados sostenibles.

          </p>
                    {/* Actions */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#formulario"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                bg-[#D4A017]
                px-9
                text-[15px]
                font-semibold
                whitespace-nowrap
                text-[#111111]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:brightness-110
              "
            >
              Iniciar la conversación

              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

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
                px-9
                text-[15px]
                font-medium
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/10
              "
            >
              Conocer el Modelo SP6
            </Link>

          </div>

        </div>

      </div>

      {/* Decorative Glow */}

      <div className="absolute right-[-140px] top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 rounded-full bg-[#D4A017]/10 blur-[220px] xl:block" />
          </section>
  );
}