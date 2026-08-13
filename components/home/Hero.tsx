"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#05070B]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-operacion-minera.png"
          alt="Operación minera"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/92 via-[#05070B]/78 to-[#05070B]/35" />

      {/* Warm light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,55,.10),transparent_42%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-20 lg:px-10 xl:px-12">
        <div className="max-w-2xl">

          <h1 className="text-[clamp(2.6rem,4.8vw,4.6rem)] font-light leading-[1.02] tracking-[-0.04em] text-white">
            Transformamos la
            <br />
            cadena de suministro
            <br />
            en una{" "}
            <span className="font-medium text-[#D4AF37]">
              ventaja
              <br />
              competitiva
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[1.15rem] leading-8 text-slate-200">
            Integramos estrategia, procurement, operaciones y conocimiento
            mediante una metodología propia orientada a resultados.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/modelo-sp6"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              Soluciones
            </Link>

            <Link
              href="/contacto#formulario"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Agendar reunión
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent" />
    </section>
  );
}