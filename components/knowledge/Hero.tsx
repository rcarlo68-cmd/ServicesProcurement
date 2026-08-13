"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05070B]">
      {/* Background Image */}
      <Image
        src="/images/knowledge/hero-knowledge-v1.png"
        alt="SP Knowledge"
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
              SP KNOWLEDGE
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(3rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-white">
            Conocimiento
            <br />
            que transforma
            <br />
            la cadena de
            <br />
            suministro.
          </h1>

          {/* Copy */}
          <p className="mt-8 max-w-xl text-[1.12rem] leading-8 text-slate-200">
  Artículos, investigaciones y experiencias aplicadas para fortalecer
  la logística, el procurement y la cadena de suministro mediante
  conocimiento práctico y pensamiento estratégico.
</p>

          {/* Actions */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
  href="#contenido"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("contenido")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
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
  Explorar contenidos
</Link>

            <Link
              href="/contacto#formulario"
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
              Hablar con un especialista
            </Link>
          </div>
        </div>
      </div>
            {/* Decorative Glow */}
<div className="absolute right-0 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[140px] xl:block" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />
          </section>
  );
}