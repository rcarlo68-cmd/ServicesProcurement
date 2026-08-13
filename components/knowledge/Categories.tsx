"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { pillars } from "@/data/pillars";
import { knowledge } from "@/data/knowledge";

export default function Categories() {
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
    <section className="relative overflow-hidden bg-[#05070B] py-28 lg:py-36">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 xl:px-12">

        {/* Header */}

        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              PILARES DEL CONOCIMIENTO
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Explore el conocimiento
            <br />
            por especialidad.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            SP Knowledge organiza newsletters, casos reales y recursos
            especializados alrededor de las capacidades del Modelo SP6.
          </p>
        </div>

        {/* Pillars - Desktop / Tablet */}

        <div className="mt-24 hidden md:block">
          {pillars.map((pillar, index) => {
            const totalResources = knowledge.filter(
              (resource) => resource.pillar === pillar.id
            ).length;

            return (
              <div key={pillar.id}>
                <div className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-12">

                  <div className="lg:col-span-2 lg:pr-6">
                    <span className="text-6xl font-extralight text-[#D4AF37]/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:col-span-10">

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                      <div>
                        <h3 className="text-3xl font-light text-white">
                          {pillar.title}
                        </h3>

                        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-5 py-4 text-center">

                        <div className="text-3xl font-light text-[#D4AF37]">
                          {totalResources}
                        </div>

                        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                          Recursos
                        </div>

                      </div>

                    </div>

                    <Link
                      href={`/knowledge/${pillar.id}`}
                      className="
                        mt-10
                        inline-flex
                        items-center
                        text-sm
                        font-medium
                        text-[#D4AF37]
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                    >
                      Explorar recursos →
                    </Link>

                  </div>

                </div>

                {index < pillars.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Pillars - Mobile Carousel */}

        <div className="relative mt-14 md:hidden">

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
            {pillars.map((pillar, index) => {
              const totalResources = knowledge.filter(
                (resource) => resource.pillar === pillar.id
              ).length;

              return (
                <article
                  key={pillar.id}
                  className="
                    w-[88%]
                    shrink-0
                    snap-center
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-sm
                  "
                >
                  <div className="mb-8 text-5xl font-extralight text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl font-light leading-snug text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-6 text-base leading-7 text-slate-300">
                    {pillar.description}
                  </p>

                  <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-5 py-4 text-center">
                    <div className="text-3xl font-light text-[#D4AF37]">
                      {totalResources}
                    </div>

                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                      Recursos
                    </div>
                  </div>

                  <Link
                    href={`/knowledge/${pillar.id}`}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      text-sm
                      font-medium
                      text-[#D4AF37]
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    Explorar recursos →
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Flecha izquierda */}

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

          {/* Flecha derecha */}

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
  );
}