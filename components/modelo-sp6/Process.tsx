"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "ENTENDER",
    headline: "Escuchamos, bajamos a la operación y reconstruimos.",
    columns: [
      {
        title: "Escuchamos",
        text: "Recogemos la percepción de las gerencias y entendemos dónde están los problemas.",
      },
      {
        title: "Bajamos a la operación",
        text: "Conversamos con quienes ejecutan el proceso y observamos cómo funciona realmente.",
      },
      {
        title: "Reconstruimos",
        text: "Seguimos las distintas decisiones hasta identificar dónde se rompe la cadena.",
      },
    ],
    result:
      "Entendemos dónde se genera el problema y qué está afectando realmente al negocio.",
  },
  {
    number: "02",
    title: "ORDENAR",
    headline: "Marcamos la cancha y estabilizamos Supply.",
    columns: [
      {
        title: "Definimos las reglas de abastecimiento",
        text: "Necesidades, criticidad, frecuencia, cobertura y tiempos.",
      },
      {
        title: "Ordenamos responsabilidades",
        text: "Supply, planners, compradores, almacenes y usuarios saben qué les corresponde.",
      },
      {
        title: "Parametrizamos la cadena",
        text: "Catálogo, consumos, stocks, lead times y grupos de compra.",
      },
    ],
    result:
      "Supply recupera capacidad de gestión y la organización sabe cómo debe funcionar.",
  },
  {
    number: "03",
    title: "ALINEAR Y OPTIMIZAR",
    headline: "Hacemos que la cadena funcione como una sola.",
    columns: [
      {
        title: "Conectamos los inputs",
        text: "Cada área entrega la información que la cadena necesita para funcionar.",
      },
      {
        title: "Medimos y corregimos",
        text: "Seguimos el comportamiento de inventarios, roturas, urgencias y excepciones.",
      },
      {
        title: "Optimizamos donde los datos lo justifican",
        text: "Procurement, almacenes, distribución, talento y tecnología.",
      },
    ],
    result:
      "Los problemas dejan de desplazarse entre áreas y empiezan a ser gestionados desde su origen.",
  },
  {
    number: "04",
    title: "TRANSFERIR",
    headline: "El sistema queda dentro de la organización.",
    columns: [
      {
        title: "Transferimos el sistema",
        text: "El equipo aprende la metodología y comienza a operar con autonomía.",
      },
      {
        title: "Empoderamos a los líderes",
        text: "Los heads anticipan problemas y utilizan la información para decidir.",
      },
      {
        title: "Consolidamos capacidades",
        text: "Supply se convierte en una capacidad estratégica para el negocio.",
      },
    ],
    result:
      "SP6 deja de depender del consultor y queda incorporado a la forma de trabajar.",
  },
];

export default function Process() {
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
      left: direction === "right" ? 340 : -340,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  };

  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-[#05070B] py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              METODOLOGÍA
            </span>
          </div>

          <h2 className="text-[clamp(2.3rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
            ¿Cómo logramos
            <br />
            el alineamiento?
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 lg:text-lg">
            SP6 transforma el sistema mediante un proceso progresivo, desde
            entender el problema hasta lograr que la organización funcione
            como una sola cadena.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          <div
            ref={carouselRef}
            onScroll={updateScrollButtons}
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
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
                  flex
                  h-auto
                  min-h-[470px]
                  w-[88%]
                  shrink-0
                  snap-center
                  flex-col
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-sm

                  sm:min-h-[480px]
                  sm:w-[72%]
                  sm:p-7

                  lg:h-[500px]
                  lg:min-h-0
                  lg:w-[760px]
                  lg:p-8
                "
              >
                {/* Card Header */}
                <div className="border-b border-white/10 pb-6">
                  <div
                    className="
                      flex
                      flex-col
                      gap-4

                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                      sm:gap-6
                    "
                  >
                    <div className="min-w-0">
                      <div className="text-4xl font-extralight text-[#D4AF37] sm:text-5xl">
                        {step.number}
                      </div>

                      <h3 className="mt-2 text-2xl font-light leading-tight text-white sm:text-3xl">
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        max-w-none
                        pt-0
                        text-sm
                        leading-6
                        text-slate-400

                        sm:max-w-[210px]
                        sm:pt-2
                      "
                    >
                      {step.headline}
                    </p>
                  </div>
                </div>

                {/* Columns */}
                <div
                  className="
                    mt-7
                    grid
                    grid-cols-1
                    gap-7

                    sm:grid-cols-3
                    sm:gap-5
                  "
                >
                  {step.columns.map((column) => (
                    <div key={column.title}>
                      <div className="mb-4 h-px w-8 bg-[#D4AF37]" />

                      <h4 className="text-base font-medium leading-6 text-white">
                        {column.title}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {column.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Resultado */}
                <div className="mt-auto border-t border-white/10 pt-6">
                  <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    RESULTADO
                  </div>

                  <p className="text-sm leading-6 text-slate-300 sm:text-base">
                    {step.result}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Left */}
          {canScrollLeft && (
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollCarousel("left")}
              className="
                absolute
                left-[-4px]
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/50
                bg-[#05070B]/90
                text-[#D4AF37]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#111111]
                active:bg-[#D4AF37]
                active:text-[#111111]
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Right */}
          {canScrollRight && (
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scrollCarousel("right")}
              className="
                absolute
                right-[-4px]
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/50
                bg-[#05070B]/90
                text-[#D4AF37]
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#111111]
                active:bg-[#D4AF37]
                active:text-[#111111]
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