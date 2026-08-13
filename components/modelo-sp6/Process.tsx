"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos el estado actual de la cadena de suministro para identificar fortalezas, riesgos, pérdidas operativas y oportunidades de mejora.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Definimos la estrategia de intervención priorizando las capacidades del Modelo SP6 con mayor impacto para la organización.",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Desarrollamos las iniciativas priorizadas mediante una ejecución estructurada, con participación de las áreas involucradas.",
  },
  {
    number: "04",
    title: "Consolidación",
    description:
      "Medimos resultados, fortalecemos las buenas prácticas e institucionalizamos los cambios para asegurar su sostenibilidad.",
  },
];

export default function Process() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
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
              METODOLOGÍA
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Un proceso claro
            <br />
            para generar resultados.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            El Modelo SP6 sigue una metodología estructurada que permite
            comprender la situación actual, diseñar soluciones, ejecutarlas de
            manera ordenada y asegurar que los resultados permanezcan en el
            tiempo.
          </p>
        </div>

        {/* Process - Desktop / Tablet */}
        <div className="mt-24 hidden md:block">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-12">
                {/* Number */}
                <div className="lg:col-span-2 lg:pr-6">
                  <span className="text-6xl font-extralight text-[#D4AF37]/90">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <h3 className="text-3xl font-light text-white">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Process - Mobile Carousel */}
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
            {steps.map((step) => (
              <article
                key={step.number}
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
                  {step.number}
                </div>

                <h3 className="text-2xl font-light leading-snug text-white">
                  {step.title}
                </h3>

                <p className="mt-6 text-base leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          {/* Left Arrow */}
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

          {/* Right Arrow */}
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