// components/whiteboard/Sketch.tsx

"use client";

import { SketchProps, MarkerColor } from "./types";

const COLORS: Record<MarkerColor, string> = {
  red: "#E5484D",
  blue: "#2563EB",
  green: "#2F9E44",
  orange: "#F59F00",
  purple: "#7C3AED",
  black: "#3F3F46",
};

export default function Sketch({
  x,
  y,
  rotate = 0,
  zIndex = 1,
  size = 1,
  color = "black",
  variant = "scribble",
  className = "",
}: SketchProps) {
  const stroke = COLORS[color];

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
      {variant === "scribble" && (
        <svg width="150" height="90" viewBox="0 0 150 90">
          <path
            d="
              M8 45
              C22 15,40 75,58 42
              S92 18,110 50
              S132 72,145 34
            "
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="
              M12 50
              C30 22,45 68,61 45
              S95 24,112 55
              S130 60,142 42
            "
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".28"
            strokeLinecap="round"
          />
        </svg>
      )}

      {variant === "cloud" && (
        <svg width="180" height="110" viewBox="0 0 180 110">
          <path
            d="
              M28 55
              C18 25,50 10,72 24
              C82 6,110 6,122 24
              C148 10,168 28,158 54
              C170 76,148 98,120 90
              C102 104,70 104,54 90
              C24 98,6 76,18 54
              Z
            "
            fill="none"
            stroke={stroke}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="
              M33 57
              C25 28,52 15,70 27
              C82 11,109 11,120 28
              C142 16,160 31,151 52
              C161 72,144 90,118 84
              C100 96,72 96,57 84
              C28 92,14 72,24 53
            "
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".25"
          />
        </svg>
      )}

      {variant === "cross" && (
        <svg width="70" height="70" viewBox="0 0 70 70">
          <path
            d="M12 12 L58 58"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M58 12 L12 58"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M13 10 L56 57"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".25"
          />
        </svg>
      )}

      {variant === "spiral" && (
        <svg width="110" height="110" viewBox="0 0 110 110">
          <path
            d="
              M55 55
              m-5 0
              c0-8 10-8 10 0
              c0 12-16 12-16-1
              c0-18 24-18 24 2
              c0 24-32 24-32-4
              c0-30 40-30 40 6
              c0 36-48 36-48-8
            "
            fill="none"
            stroke={stroke}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="
              M55 55
              m-3 0
              c0-5 6-5 6 0
              c0 8-11 8-11 0
              c0-14 18-14 18 2
              c0 18-25 18-25-4
            "
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".25"
          />
        </svg>
      )}

      {variant === "zigzag" && (
        <svg width="170" height="70" viewBox="0 0 170 70">
          <path
            d="
              M5 55
              L25 20
              L45 48
              L65 15
              L85 46
              L105 18
              L125 52
              L145 16
              L165 44
            "
            fill="none"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="
              M6 58
              L25 25
              L44 51
              L64 19
              L84 49
              L104 22
              L125 55
              L145 20
              L163 47
            "
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".25"
          />
        </svg>
      )}
    </div>
  );
}