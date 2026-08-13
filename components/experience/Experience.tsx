"use client";

import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate min-h-screen overflow-hidden bg-[#05070B]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/experience/experience-master.png"
          alt="Cadena de valor integrada mediante el Modelo SP6"
          fill
          priority={false}
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/92 via-[#05070B]/78 to-[#05070B]/35" />

      {/* Warm light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(212,175,55,.10),transparent_42%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-10 xl:px-12">
        <div className="max-w-2xl pt-24">

          {/* Eyebrow */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            MODELO SP6
          </p>

          {/* Title */}
          <h2 className="text-[clamp(2.4rem,4.4vw,4.3rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
            UN SOLO LENGUAJE.
            <br />
            UNA SOLA
            <br />
            <span className="font-medium text-[#D4AF37]">
              CADENA DE SUMINISTRO.
            </span>
            <br />
            UN SOLO PROPÓSITO.
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-xl text-[1.15rem] leading-8 text-slate-200">
            Las organizaciones no necesitan más procedimientos ni más
            burocracia. Necesitan que Operaciones, Planificación,
            Compras, Almacenes y Distribución hablen un mismo lenguaje.
            El Modelo SP6 alinea toda la cadena de suministro bajo
            criterios comunes, eliminando interpretaciones, reduciendo
            reprocesos y fortaleciendo la colaboración para transformar
            la experiencia en resultados.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/modelo-sp6"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              Descubrir el SP6
            </Link>

            <Link
              href="/nuestra-vision"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Nuestra filosofía
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent" />
    </section>
  );
}