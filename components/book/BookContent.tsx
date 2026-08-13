"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function BookContent() {
    const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      carouselRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 5
    );
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  };
  return (
    <main
      id="contenido"
      className="overflow-hidden bg-[#05070B]"
    >

      {/* ========================================================= */}
      {/* BOOK SHOWCASE                                              */}
      {/* ========================================================= */}

      <section className="relative py-28">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[170px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,.03),transparent_65%)]" />

        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 xl:px-12">

          {/* ===================================================== */}
          {/* BOOK                                                   */}
          {/* ===================================================== */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute h-[620px] w-[620px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative">

              <Image
                src="/images/book/book-cover-v1.png"
                alt="El Fraude que la Contabilidad no Ve"
                width={620}
                height={880}
                priority
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  max-w-[520px]
                  drop-shadow-[0_45px_80px_rgba(0,0,0,.65)]
                  transition-transform
                  duration-700
                  hover:-translate-y-2
                "
              />

            </div>

          </div>

          {/* ===================================================== */}
          {/* CONTENT                                                */}
          {/* ===================================================== */}

          <div>

            <div className="mb-8 flex items-center gap-4">

              <div className="h-px w-16 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                INVESTIGACIÓN
              </span>

            </div>

            <h2 className="max-w-xl text-[clamp(2.3rem,4vw,4rem)] font-light leading-[1.02] tracking-[-0.04em] text-white">

              Una nueva
              <br />
              mirada sobre
              <br />
              las pérdidas
              <br />
              de valor.

            </h2>

            <p className="mt-10 max-w-xl text-[1.12rem] leading-9 text-slate-300">

              Este libro propone una perspectiva distinta para comprender
              cómo determinadas pérdidas operativas permanecen ocultas
              porque nunca llegan a convertirse en anomalías
              contables.

            </p>

            <p className="mt-7 max-w-xl text-[1.12rem] leading-9 text-slate-300">

              Basado en más de tres décadas de experiencia en minería,
              logística y cadena de suministro, reúne casos reales,
              investigación aplicada y una propuesta conceptual para
              fortalecer la gestión empresarial.

            </p>

            {/* =============================================== */}
            {/* METRICS                                         */}
            {/* =============================================== */}

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 border-t border-white/10 pt-10">

              <div>

                <div className="text-5xl font-extralight text-[#D4AF37]">
                  30
                </div>

                <div className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Casos reales
                </div>

              </div>

              <div>

                <div className="text-5xl font-extralight text-[#D4AF37]">
                  30+
                </div>

                <div className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Años de experiencia
                </div>

              </div>

              <div>

                <div className="text-5xl font-extralight text-[#D4AF37]">
                  1
                </div>

                <div className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Nueva perspectiva
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WHAT THE READER WILL DISCOVER                             */}
      {/* ========================================================= */}

      <section className="relative border-y border-white/5 bg-[#070A0F] py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-12">

          <div className="mb-20 text-center">

            <div className="mb-8 flex items-center justify-center gap-4">

              <div className="h-px w-16 bg-[#D4AF37]" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                ¿QUÉ DESCUBRIRÁ EL LECTOR?
              </span>

              <div className="h-px w-16 bg-[#D4AF37]" />

            </div>

            <h2 className="mx-auto max-w-4xl text-[2.4rem] font-light leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-[4.2rem]">

              Una investigación que conecta
              la operación con las pérdidas
              que nunca llegan a la contabilidad.

            </h2>

          </div>

          {/* Reader Discoveries - Desktop / Tablet */}
<div className="mt-8 hidden md:grid gap-8 md:grid-cols-2 xl:grid-cols-4">

  <article className="group rounded-3xl border border-white/8 bg-white/[0.02] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.035]">
    <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

    <h3 className="text-2xl font-light text-white">
      Casos
      <br />
      reales
    </h3>

    <p className="mt-6 leading-8 text-slate-300">
      Treinta investigaciones basadas en experiencias desarrolladas durante
      más de tres décadas de trabajo en minería, logística y cadena de
      suministro.
    </p>
  </article>

  <article className="group rounded-3xl border border-white/8 bg-white/[0.02] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.035]">
    <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

    <h3 className="text-2xl font-light text-white">
      Fraude
      <br />
      operativo
    </h3>

    <p className="mt-6 leading-8 text-slate-300">
      Una explicación de cómo determinadas pérdidas de valor pueden originarse
      antes de llegar a los registros financieros tradicionales.
    </p>
  </article>

  <article className="group rounded-3xl border border-white/8 bg-white/[0.02] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.035]">
    <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

    <h3 className="text-2xl font-light text-white">
      Minería
      <br />
      y Supply Chain
    </h3>

    <p className="mt-6 leading-8 text-slate-300">
      Experiencias reales sobre abastecimiento, almacenes, inventarios,
      mantenimiento, procurement y operaciones en empresas mineras.
    </p>
  </article>

  <article className="group rounded-3xl border border-white/8 bg-white/[0.02] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/[0.035]">
    <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

    <h3 className="text-2xl font-light text-white">
      Una nueva
      <br />
      perspectiva
    </h3>

    <p className="mt-6 leading-8 text-slate-300">
      Una propuesta para comprender las pérdidas invisibles que afectan el
      valor de la organización y que rara vez son detectadas por los
      mecanismos tradicionales.
    </p>
  </article>

</div>

{/* Reader Discoveries - Mobile Carousel */}
<div className="relative mt-8 md:hidden">

  <div
    ref={carouselRef}
    onScroll={updateScrollButtons}
    className="
      flex
      snap-x
      snap-mandatory
      gap-6
      overflow-x-auto
      pb-6
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >

    <article className="w-[88%] shrink-0 snap-center rounded-3xl border border-white/8 bg-white/[0.02] p-8">
      <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

      <h3 className="text-2xl font-light text-white">
        Casos
        <br />
        reales
      </h3>

      <p className="mt-6 text-base leading-7 text-slate-300">
        Treinta investigaciones basadas en experiencias desarrolladas durante
        más de tres décadas de trabajo en minería, logística y cadena de
        suministro.
      </p>
    </article>

    <article className="w-[88%] shrink-0 snap-center rounded-3xl border border-white/8 bg-white/[0.02] p-8">
      <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

      <h3 className="text-2xl font-light text-white">
        Fraude
        <br />
        operativo
      </h3>

      <p className="mt-6 text-base leading-7 text-slate-300">
        Una explicación de cómo determinadas pérdidas de valor pueden originarse
        antes de llegar a los registros financieros tradicionales.
      </p>
    </article>

    <article className="w-[88%] shrink-0 snap-center rounded-3xl border border-white/8 bg-white/[0.02] p-8">
      <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

      <h3 className="text-2xl font-light text-white">
        Minería
        <br />
        y Supply Chain
      </h3>

      <p className="mt-6 text-base leading-7 text-slate-300">
        Experiencias reales sobre abastecimiento, almacenes, inventarios,
        mantenimiento, procurement y operaciones en empresas mineras.
      </p>
    </article>

    <article className="w-[88%] shrink-0 snap-center rounded-3xl border border-white/8 bg-white/[0.02] p-8">
      <div className="mb-8 h-1 w-14 rounded-full bg-[#D4AF37]" />

      <h3 className="text-2xl font-light text-white">
        Una nueva
        <br />
        perspectiva
      </h3>

      <p className="mt-6 text-base leading-7 text-slate-300">
        Una propuesta para comprender las pérdidas invisibles que afectan el
        valor de la organización y que rara vez son detectadas por los
        mecanismos tradicionales.
      </p>
    </article>

  </div>

  {canScrollLeft && (
    <button
      type="button"
      aria-label="Anterior"
      onClick={() => scrollCarousel("left")}
      className="
        absolute
        left-[-6px]
        top-1/2
        z-20
        -translate-y-1/2
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/40
        bg-[#05070B]/80
        text-[#D4AF37]
        backdrop-blur-md
        transition-all
        hover:bg-[#D4AF37]
        hover:text-[#111111]
      "
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  )}

  {canScrollRight && (
    <button
      type="button"
      aria-label="Siguiente"
      onClick={() => scrollCarousel("right")}
      className="
        absolute
        right-[-6px]
        top-1/2
        z-20
        -translate-y-1/2
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/40
        bg-[#05070B]/80
        text-[#D4AF37]
        backdrop-blur-md
        transition-all
        hover:bg-[#D4AF37]
        hover:text-[#111111]
      "
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  )}

</div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WHY THIS BOOK                                              */}
      {/* ========================================================= */}

      <section className="relative py-28">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[180px]" />

        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">

          <div className="mb-8 flex items-center justify-center gap-4">

            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              ¿POR QUÉ ESTE LIBRO?
            </span>

            <div className="h-px w-16 bg-[#D4AF37]" />

          </div>

          <h2 className="mx-auto max-w-4xl text-[clamp(2.3rem,4vw,4.5rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">

            Todo comenzó
            <br />
            con una
            <br />
            pregunta.

          </h2>

          <p className="mx-auto mt-12 max-w-4xl text-[1.15rem] leading-10 text-slate-300">

            Si las organizaciones invierten millones en controles,
            auditorías y sistemas de información,
            ¿por qué continúan produciéndose pérdidas
            que nadie identifica hasta que el daño ya
            es irreversible?

          </p>

          <p className="mx-auto mt-10 max-w-4xl text-[1.15rem] leading-10 text-slate-300">

            Esa pregunta dio origen a una investigación
            que terminó cuestionando la forma tradicional
            de interpretar las pérdidas de valor dentro
            de la cadena de suministro.

          </p>

          <div className="mt-16">
                        <Link
              href="/knowledge"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]
                bg-transparent
                px-9
                text-sm
                font-medium
                tracking-wide
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#111111]
                hover:shadow-[0_0_40px_rgba(212,175,55,.30)]
              "
            >
              Explorar publicaciones relacionadas
            </Link>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FINAL CTA                                                 */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-t border-white/5 py-32">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[220px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.025),transparent_70%)]" />

        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">

          <div className="mb-8 flex items-center justify-center gap-4">

            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              PRÓXIMAMENTE
            </span>

            <div className="h-px w-16 bg-[#D4AF37]" />

          </div>

          <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,4vw,4.8rem)] font-light leading-[1.02] tracking-[-0.05em] text-white">

            Una nueva forma
            <br />
            de comprender
            <br />
            las pérdidas
            <br />
            invisibles.

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-[1.15rem] leading-10 text-slate-300">

            Muy pronto podrás acceder a esta investigación
            y descubrir una perspectiva diferente sobre la
            cadena de suministro, el fraude operativo y las
            pérdidas de valor que rara vez llegan a los
            estados financieros.

          </p>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/contacto#formulario"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                px-9
                text-sm
                font-semibold
                tracking-wide
                text-[#111111]
                transition-all
                duration-300
                hover:brightness-110
                hover:shadow-[0_0_40px_rgba(212,175,55,.35)]
              "
            >
              Solicitar información
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
                bg-white/[0.03]
                px-9
                text-sm
                font-medium
                tracking-wide
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

    </main>
  );
}