"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05070B]">

      {/* ===========================
          Background Image
      =========================== */}

      <div className="absolute inset-0">
        <Image
          src="/images/vision/vision-hero-v4.png"
          alt="PRUEBA HERO"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Base */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/88 via-[#05070B]/68 to-[#05070B]/12" />

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

      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-10 lg:py-0 xl:px-12">

        <div className="max-w-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A017]/30 bg-white/5 px-4 py-2 backdrop-blur sm:px-5">

            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4A017] sm:text-xs sm:tracking-[0.35em]">
              Nuestra Visión
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[4.2rem]">
            Diseñamos cadenas
            <br />
            de suministro.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90 sm:mt-10 sm:text-xl sm:leading-9">

            <span className="font-medium text-white">
              Con propósito.
            </span>{" "}

            <span className="font-medium text-white">
              Con personalidad.
            </span>{" "}

            <span className="font-semibold text-[#D4A017]">
              Con estrategia.
            </span>

          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5">

            <Link
              href="/modelo-sp6"
              className="group inline-flex w-full items-center justify-center rounded-full bg-[#D4A017] px-8 py-4 text-sm font-semibold tracking-wide text-[#05070B] transition-all duration-300 hover:scale-[1.03] hover:bg-[#E8B529] sm:w-auto"
            >
              Conocer el Modelo SP6

              <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/knowledge"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur transition-all duration-300 hover:border-[#D4A017]/40 hover:bg-white/10 sm:w-auto"
            >
              Explorar SP Knowledge
            </Link>

          </div>

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