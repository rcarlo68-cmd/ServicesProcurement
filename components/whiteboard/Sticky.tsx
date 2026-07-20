// components/whiteboard/Sticky.tsx

"use client";

import { StickyProps, StickyColor } from "./types";
import Tape from "./Tape";

const COLORS: Record<StickyColor, string> = {
  yellow: `
    bg-[#FFF8A6]
    border-[#E7D97A]
    before:from-white/45
    before:to-transparent
  `,
  pink: `
    bg-[#FFD9E6]
    border-[#E7AFC3]
    before:from-white/40
    before:to-transparent
  `,
  blue: `
    bg-[#DDF4FF]
    border-[#A8D5EB]
    before:from-white/40
    before:to-transparent
  `,
  green: `
    bg-[#DFF7D6]
    border-[#AED9A3]
    before:from-white/40
    before:to-transparent
  `,
};

export default function Sticky({
  x,
  y,
  rotate = -2,
  zIndex = 1,
  size = 1,
  color = "yellow",
  title,
  children,
  className = "",
}: StickyProps) {
  return (
    <div
      className="absolute select-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${size})`,
        zIndex,
      }}
    >
      {/* Cinta adhesiva */}
      <Tape
        x={0}
        y={0}
        rotate={-6}
        zIndex={zIndex + 1}
        width={82}
      />

      {/* Nota */}
      <article
        className={`
          relative
          w-64
          min-h-56
          border
          rounded-sm
          p-6
          shadow-[0_10px_22px_rgba(0,0,0,.16)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_36px_rgba(0,0,0,.22)]
          overflow-hidden

          before:absolute
          before:inset-0
          before:bg-gradient-to-br
          before:opacity-60
          before:pointer-events-none

          after:absolute
          after:inset-0
          after:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.35),transparent_55%)]
          after:pointer-events-none

          ${COLORS[color]}
          ${className}
        `}
      >
        {/* Textura papel */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            mix-blend-multiply
            pointer-events-none
            bg-[linear-gradient(rgba(0,0,0,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]
            bg-[length:18px_18px]
          "
        />

        {/* Sombra interior */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,.08)] pointer-events-none" />

        {/* Pliegue */}
        <div
          className="
            absolute
            right-0
            top-0
            w-10
            h-10
            bg-white/35
            border-l
            border-b
            border-black/5
            origin-top-right
            rotate-45
            translate-x-5
            -translate-y-5
            pointer-events-none
          "
        />

        {/* Título */}
        {title && (
          <h3
            className="
              relative
              z-10
              mb-3
              text-[20px]
              leading-none
              font-black
              tracking-tight
              text-zinc-800
              [font-family:'Comic_Neue','Bradley_Hand','Segoe_Print','Patrick_Hand',cursive]
            "
          >
            {title}
          </h3>
        )}

        {/* Contenido */}
        <div
          className="
            relative
            z-10
            space-y-2
            text-[17px]
            leading-7
            text-zinc-700
            whitespace-pre-line
            [font-family:'Comic_Neue','Bradley_Hand','Segoe_Print','Patrick_Hand',cursive]
          "
        >
          {children}
        </div>

        {/* Marca de rotulador */}
        <div
          className="
            absolute
            bottom-5
            left-5
            w-20
            h-[5px]
            rounded-full
            bg-black/10
            blur-[1px]
            rotate-[-2deg]
            pointer-events-none
          "
        />

        {/* Mancha de tinta */}
        <div
          className="
            absolute
            right-6
            bottom-6
            w-2
            h-2
            rounded-full
            bg-zinc-700/10
            blur-[1px]
            pointer-events-none
          "
        />
      </article>
    </div>
  );
}