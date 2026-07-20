// components/whiteboard/Note.tsx

"use client";

import { NoteProps } from "./types";
import Tape from "./Tape";
import Pin from "./Pin";

export default function Note({
  x,
  y,
  rotate = -1,
  zIndex = 5,
  size = 1,
  title,
  children,
  pinned = false,
  taped = true,
  className = "",
}: NoteProps) {
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
      {/* Sujetadores */}

      {taped && (
        <>
          <Tape
            x={-82}
            y={-142}
            width={54}
            rotate={-22}
            color="beige"
            zIndex={zIndex + 3}
          />

          <Tape
            x={82}
            y={-142}
            width={54}
            rotate={18}
            color="beige"
            zIndex={zIndex + 3}
          />
        </>
      )}

      {pinned && (
        <Pin
          x={0}
          y={-148}
          zIndex={zIndex + 4}
        />
      )}

      {/* Hoja */}

      <article
        className={`
          relative
          w-[340px]
          min-h-[430px]
          rounded-[3px]
          border
          border-neutral-300
          bg-[#FFFDFC]
          shadow-[0_18px_35px_rgba(0,0,0,.15)]
          overflow-hidden
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_28px_45px_rgba(0,0,0,.20)]
          ${className}
        `}
      >
        {/* Papel */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(0,0,0,.045)_1px,transparent_1px)]
            bg-[length:100%_32px]
            opacity-40
            pointer-events-none
          "
        />

        {/* Fibra */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            mix-blend-multiply
            bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,.25),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,.18),transparent_35%)]
          "
        />

        {/* Pliegue */}

        <div
          className="
            absolute
            right-0
            top-0
            w-14
            h-14
            rotate-45
            translate-x-7
            -translate-y-7
            border-l
            border-b
            border-black/10
            bg-white/50
          "
        />

        {/* Margen */}

        <div className="absolute left-8 top-0 bottom-0 w-px bg-red-300/70" />

        {/* Perforaciones */}

        <div className="absolute left-3 top-12 flex flex-col gap-9">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="
                h-[10px]
                w-[10px]
                rounded-full
                bg-neutral-200
                shadow-[inset_0_1px_2px_rgba(0,0,0,.18)]
              "
            />
          ))}
        </div>

        {/* Contenido */}

        <div className="relative z-10 px-12 pt-10 pb-10">

          {title && (
            <h2
              className="
                mb-6
                text-[26px]
                font-bold
                tracking-tight
                text-zinc-800
                [font-family:'Patrick_Hand','Comic_Neue','Segoe_Print',cursive]
              "
            >
              {title}
            </h2>
          )}

          <div
            className="
              whitespace-pre-line
              leading-8
              text-[18px]
              text-zinc-700
              [font-family:'Patrick_Hand','Comic_Neue','Segoe_Print',cursive]
            "
          >
            {children}
          </div>
        </div>

        {/* Mancha */}

        <div
          className="
            absolute
            right-10
            bottom-8
            h-14
            w-14
            rounded-full
            bg-amber-200/20
            blur-xl
          "
        />

        {/* Sombra interna */}

        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,.06)] pointer-events-none" />
      </article>
    </div>
  );
}