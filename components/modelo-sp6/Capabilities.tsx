"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Procurement Estratégico",
    description:
      "Alinea las decisiones de abastecimiento con los objetivos del negocio, fortaleciendo la planificación, la gestión de proveedores y la creación de valor.",
  },
  {
    number: "02",
    title: "Almacenes e Inventarios",
    description:
      "Garantiza la confiabilidad de los inventarios mediante procesos estandarizados, control operacional y trazabilidad de los materiales.",
  },
  {
    number: "03",
    title: "Operaciones y Distribución",
    description:
      "Optimiza el flujo de materiales desde el proveedor hasta el usuario final, reduciendo tiempos, costos y pérdidas operativas.",
  },
  {
    number: "04",
    title: "Auditoría Logística",
    description:
      "Evalúa procesos, identifica vulnerabilidades y detecta oportunidades de mejora para fortalecer el control y la eficiencia.",
  },
  {
  number: "05",
  title: "Desarrollo del Talento",
  description:
    "Impulsa las competencias de las personas, promoviendo una cultura de mejora continua, liderazgo y excelencia operacional.",
},
{
  number: "06",
  title: "Transformación Digital",
  description:
    "Integra tecnología, analítica e inteligencia artificial para mejorar la toma de decisiones y aumentar la productividad.",
},
];

export default function Capabilities() {
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
    <section className="relative bg-[#070A0F] py-28 lg:py-36">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CAPACIDADES
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Seis capacidades.
            <br />
            Un solo sistema.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            El Modelo SP6 integra las capacidades fundamentales que fortalecen
la cadena de suministro. Cada capacidad genera valor por sí misma,
pero su verdadero potencial se alcanza cuando funcionan como un solo
sistema.
          </p>
        </div>

        {/* Cards */}
        {/* Desktop / Tablet */}
<div
  className="
    mt-10 lg:mt-16
    hidden
    md:grid
    gap-8
    md:grid-cols-2
    xl:grid-cols-3
  "
>
  {capabilities.map((item) => (
    <article
      key={item.number}
      className="
        group
        flex
        min-h-[360px]
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#D4AF37]/40
        hover:bg-white/[0.05]
      "
    >
      <div className="mb-8 text-5xl font-extralight text-[#D4AF37]/80">
        {item.number}
      </div>

      <h3 className="text-2xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
        {item.title}
      </h3>

      <p className="mt-6 leading-8 text-slate-300">
        {item.description}
      </p>
    </article>
  ))}
</div>

{/* Mobile Carousel */}
<div className="relative mt-10">

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
      md:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >
    {capabilities.map((item) => (
      <article
        key={item.number}
        className="
          group
          w-[88%]
          shrink-0
          snap-center
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-sm
          transition-all
          duration-300
        "
      >
        <div className="mb-8 text-5xl font-extralight text-[#D4AF37]">
          {item.number}
        </div>

        <h3 className="text-2xl font-light leading-snug text-white">
          {item.title}
        </h3>

        <p className="mt-6 leading-8 text-slate-300">
          {item.description}
        </p>
      </article>
    ))}
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
      md:hidden
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
      md:hidden
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