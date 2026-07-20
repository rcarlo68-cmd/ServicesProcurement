// components/whiteboard/Pin.tsx

"use client";

import { PinProps } from "./types";

export default function Pin({
  x,
  y,
  rotate = 0,
  zIndex = 50,
  size = 1,
  color = "#D64545",
  className = "",
}: PinProps) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${size})`,
        zIndex,
      }}
    >
      <div className="relative w-7 h-7">
        {/* Sombra */}
        <div className="absolute left-1/2 top-[22px] h-2 w-5 -translate-x-1/2 rounded-full bg-black/15 blur-[3px]" />

        {/* Aguja */}
        <div
          className="absolute left-1/2 top-[13px] h-5 w-[2px] -translate-x-1/2 rounded-full bg-zinc-500"
          style={{
            boxShadow: "0 0 1px rgba(255,255,255,.8)",
          }}
        />

        {/* Cabeza */}
        <div
          className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border border-black/15"
          style={{
            background: `
              radial-gradient(circle at 30% 28%,
              rgba(255,255,255,.95) 0%,
              rgba(255,255,255,.55) 18%,
              ${color} 38%,
              ${color} 68%,
              rgba(0,0,0,.22) 100%)
            `,
            boxShadow:
              "0 2px 4px rgba(0,0,0,.28), inset 0 -2px 3px rgba(0,0,0,.18)",
          }}
        >
          {/* Reflejo */}
          <div className="absolute left-[4px] top-[4px] h-[4px] w-[4px] rounded-full bg-white/95" />
        </div>

        {/* Aro inferior */}
        <div
          className="absolute left-1/2 top-[14px] h-[5px] w-[9px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom,#f3f3f3,#bdbdbd,#8b8b8b)",
          }}
        />

        {/* Pequeña perforación en el papel */}
        <div className="absolute left-1/2 top-[18px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black/20 blur-[0.5px]" />
      </div>
    </div>
  );
}