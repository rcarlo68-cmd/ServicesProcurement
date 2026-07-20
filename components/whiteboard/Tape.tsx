// components/whiteboard/Tape.tsx

"use client";

import { TapeProps, TapeColor } from "./types";

const COLORS: Record<TapeColor, string> = {
  beige: `
    bg-[#F6E8C8]
    border-[#D9C79F]
  `,
  white: `
    bg-white/75
    border-white/40
    backdrop-blur-[1px]
  `,
};

export default function Tape({
  x,
  y,
  rotate = 0,
  zIndex = 20,
  size = 1,
  width = 84,
  opacity = 0.9,
  color = "beige",
  className = "",
}: TapeProps) {
  return (
    <div
      aria-hidden
      className="absolute pointer-events-none"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${size})`,
        zIndex,
        opacity,
      }}
    >
      <div
        className={`
          relative
          h-7
          rounded-[3px]
          border
          shadow-[0_2px_6px_rgba(0,0,0,.12)]
          ${COLORS[color]}
          ${className}
        `}
        style={{ width: `${width}px` }}
      >
        {/* Textura fibrosa */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            mix-blend-multiply
            rounded-[3px]
            bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,.15)_12%,transparent_24%,rgba(0,0,0,.08)_38%,transparent_55%,rgba(0,0,0,.12)_72%,transparent_100%)]
          "
        />

        {/* Brillo */}
        <div
          className="
            absolute
            inset-x-1
            top-[2px]
            h-[2px]
            rounded-full
            bg-white/60
          "
        />

        {/* Sombras laterales */}
        <div className="absolute inset-y-0 left-0 w-[1px] bg-black/10" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-black/10" />

        {/* Bordes rasgados */}
        <div
          className="
            absolute
            -left-[2px]
            top-0
            h-full
            w-[6px]
            bg-[radial-gradient(circle_at_right,transparent_58%,rgba(255,255,255,.95)_60%,transparent_78%)]
            opacity-70
          "
        />

        <div
          className="
            absolute
            -right-[2px]
            top-0
            h-full
            w-[6px]
            bg-[radial-gradient(circle_at_left,transparent_58%,rgba(255,255,255,.95)_60%,transparent_78%)]
            opacity-70
          "
        />

        {/* Arrugas */}
        <span
          className="absolute left-[18%] top-0 h-full w-px bg-black/10"
          style={{ transform: "rotate(-2deg)" }}
        />
        <span
          className="absolute left-[52%] top-0 h-full w-px bg-black/10"
          style={{ transform: "rotate(1.5deg)" }}
        />
        <span
          className="absolute left-[78%] top-0 h-full w-px bg-black/10"
          style={{ transform: "rotate(-1deg)" }}
        />

        {/* Mancha sutil */}
        <div
          className="
            absolute
            inset-0
            rounded-[3px]
            bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,.45),transparent_45%)]
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}