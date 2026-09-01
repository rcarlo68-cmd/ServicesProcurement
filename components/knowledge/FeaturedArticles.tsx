"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import { knowledge } from "@/data/knowledge";
import ResourceCard from "./ResourceCard";

const articles = knowledge
  .filter((resource) => resource.type === "newsletter")
  .sort((a, b) => {
    const dateA = new Date(
      a.publishedAt.split("/").reverse().join("-")
    ).getTime();

    const dateB = new Date(
      b.publishedAt.split("/").reverse().join("-")
    ).getTime();

    return dateB - dateA;
  })
  .slice(0, 3);

export default function FeaturedArticles() {
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
    <section
      id="contenido"
      className="relative bg-[#070A0F] py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">

        {/* Header */}

        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              RECURSOS DESTACADOS
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Ideas que fortalecen
            <br />
            la toma de decisiones.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Una selección de newsletters, casos reales, investigaciones y
            conocimiento aplicado desarrollado para fortalecer la logística,
            procurement y la cadena de suministro.
          </p>
        </div>

        {/* Desktop */}

        <div
          className="
            mt-16
            hidden
            gap-8
            md:grid
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {articles.map((article) => (
            <ResourceCard
              key={article.id}
              resource={article}
            />
          ))}
        </div>

        {/* Mobile Carousel */}

        <div className="relative mt-16 md:hidden">

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
            {articles.map((article) => (
              <div
                key={article.id}
                className="w-[88%] shrink-0 snap-center"
              >
                <ResourceCard resource={article} />
              </div>
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