"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#05070B] lg:min-h-[90vh]">

      {/* Background Image */}

      <Image
        src="/images/book/hero-book-v1.png"
        alt="El Fraude que la Contabilidad no Ve"
        fill
        priority
        className="object-cover object-[78%_58%] lg:object-[82%_55%] xl:object-[84%_52%]"
      />

      {/* Main Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/96 via-[#05070B]/82 to-[#05070B]/15" />

      {/* Vertical Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/45 via-transparent to-[#05070B]/75" />

      {/* Golden Light */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(212,175,55,.18),transparent_38%)]" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[72vh] lg:min-h-[88vh] w-full max-w-7xl items-center px-6 pt-28 lg:min-h-[90vh] lg:px-10 lg:pt-32 xl:px-12">

        <div className="max-w-3xl">

          {/* Eyebrow */}

          <div className="mb-8 flex items-center gap-4">

            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              LIBRO
            </span>

          </div>

          {/* Title */}

          <h1 className="text-[clamp(3.3rem,6vw,6.4rem)] font-light leading-[0.93] tracking-[-0.05em] text-white">
            El Fraude
            <br />
            que la
            <br />
            Contabilidad
            <br />
            no Ve.
          </h1>

          {/* Subtitle */}

          <p className="mt-10 max-w-2xl text-[1.12rem] leading-9 text-slate-200">
            Una investigación basada en casos reales que revela cómo las pérdidas
            de valor pueden originarse mucho antes de llegar a los estados
            financieros y permanecer invisibles para los mecanismos tradicionales
            de control.
          </p>

          {/* Actions */}

          <div className="mt-14 flex flex-wrap gap-5">

            <Link
              href="#contenido"
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
              Explorar el libro
            </Link>

            <button
  type="button"
  disabled
  className="
    inline-flex
    h-14
    cursor-default
    items-center
    justify-center
    rounded-full
    border
    border-white/20
    bg-white/5
    px-8
    text-[15px]
    font-medium
    text-white/60
  "
>
  Próximamente
</button>

          </div>

        </div>

      </div>

      {/* Decorative Glow */}

      <div className="absolute right-[-120px] top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 rounded-full bg-[#D4AF37]/12 blur-[220px] xl:block" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-[-70px] h-56 bg-gradient-to-t from-[#05070B] via-[#05070B]/85 to-transparent" />

    </section>
  );
}