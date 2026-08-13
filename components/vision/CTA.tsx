"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate min-h-[85vh] overflow-hidden bg-[#05070B]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/vision/vision-cta-strategic-conversation-v1.png"
          alt="Conversación estratégica sobre cadena de suministro"
          fill
          priority
          quality={100}
          className="object-cover object-right"
        />

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/94 via-[#05070B]/72 to-[#05070B]/28" />

      {/* Ambient Light */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(212,160,23,.10),transparent_45%)]" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[85vh] w-full max-w-7xl items-center px-6 py-28 sm:py-32 lg:px-10 lg:py-0 xl:px-12">

        <div className="max-w-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-4 py-2 backdrop-blur sm:px-6 sm:py-3">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4A017] sm:text-xs sm:tracking-[0.35em]">
              EL SIGUIENTE PASO
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-[2.8rem] font-light leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-[5.3rem] xl:tracking-[-0.05em]">

            Las mejores
            <br />
            decisiones comienzan
            <br />
            con una{" "}
            <span className="text-[#D4A017]">
              conversación.
            </span>

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 sm:mt-10 sm:text-[1.15rem] sm:leading-9">

            Cada organización enfrenta desafíos distintos.
            La primera conversación busca comprender el contexto,
            identificar oportunidades y definir dónde puede
            generarse mayor valor para su cadena de suministro.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5">

            <Link
              href="/contacto#formulario"
              className="group inline-flex h-14 w-full items-center justify-center rounded-full bg-[#D4A017] px-10 text-[15px] font-semibold tracking-wide text-[#111111] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 sm:w-auto"
            >
              Agendar una conversación

              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              href="/knowledge"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-[15px] font-medium text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Explorar SP Knowledge
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}