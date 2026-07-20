// components/whiteboard/Marker.tsx

"use client";

import { MarkerProps, MarkerColor } from "./types";

const COLORS: Record<MarkerColor, string> = {
  red: "#E5484D",
  blue: "#2563EB",
  green: "#2F9E44",
  orange: "#F59F00",
  purple: "#7C3AED",
  black: "#2F2F2F",
};

export default function Marker({
  x,
  y,
  rotate = 0,
  zIndex = 4,
  size = 1,
  width,
  height = 42,
  color = "red",
  type = "circle",
  className = "",
}: MarkerProps) {
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
      {type === "circle" && (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          {/* Primer trazo */}
          <path
            d={`
              M 8 ${height / 2}
              C 18 6,
              ${width * 0.32} 2,
              ${width / 2} 6

              C ${width * 0.82} 10,
              ${width - 5} ${height * 0.35},
              ${width - 8} ${height / 2}

              C ${width - 10} ${height - 5},
              ${width * 0.72} ${height - 1},
              ${width / 2} ${height - 4}

              C ${width * 0.22} ${height - 3},
              5 ${height * 0.75},
              8 ${height / 2}
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".95"
          />

          {/* Segundo trazo imperfecto */}
          <path
            d={`
              M 10 ${height / 2 + 1}
              C 20 8,
              ${width * 0.34} 4,
              ${width / 2} 8

              C ${width * 0.80} 12,
              ${width - 7} ${height * 0.38},
              ${width - 10} ${height / 2}

              C ${width - 12} ${height - 8},
              ${width * 0.70} ${height - 4},
              ${width / 2} ${height - 6}

              C ${width * 0.24} ${height - 4},
              8 ${height * 0.74},
              10 ${height / 2 + 1}
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            opacity=".45"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "underline" && (
        <svg
          width={width}
          height={18}
          viewBox={`0 0 ${width} 18`}
        >
          <path
            d={`
              M2 10
              C ${width * 0.18} 15,
                ${width * 0.36} 4,
                ${width * 0.52} 10

              C ${width * 0.70} 15,
                ${width * 0.86} 6,
                ${width - 2} 9
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d={`
              M2 9
              C ${width * 0.18} 14,
                ${width * 0.36} 5,
                ${width * 0.52} 11

              C ${width * 0.70} 14,
                ${width * 0.86} 5,
                ${width - 3} 8
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            opacity=".35"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "highlight" && (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <path
            d={`
              M2 ${height * .35}
              C ${width*.20} ${height*.15},
                ${width*.42} ${height*.55},
                ${width*.60} ${height*.30}

              C ${width*.80} ${height*.10},
                ${width*.90} ${height*.55},
                ${width-2} ${height*.35}

              L ${width-2} ${height*.80}

              C ${width*.80} ${height*.98},
                ${width*.45} ${height*.60},
                2 ${height*.82}

              Z
            `}
            fill={stroke}
            opacity=".22"
          />

          <path
            d={`
              M4 ${height*.40}
              C ${width*.18} ${height*.22},
                ${width*.40} ${height*.56},
                ${width*.60} ${height*.35}

              C ${width*.82} ${height*.16},
                ${width*.92} ${height*.55},
                ${width-4} ${height*.42}
            `}
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            opacity=".25"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}