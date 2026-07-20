// components/whiteboard/Arrow.tsx

"use client";

import { ArrowProps } from "./types";

const COLORS = {
  red: "#D9485F",
  blue: "#2563EB",
  green: "#2E8B57",
  orange: "#F59E0B",
  purple: "#7C3AED",
  black: "#374151",
};

export default function Arrow({
  from,
  to,
  color = "black",
  dashed = false,
  curved = true,
  animated = false,
  zIndex = 2,
}: ArrowProps) {
  const stroke = COLORS[color];

  const dx = to.x - from.x;
  const dy = to.y - from.y;

  const distance = Math.sqrt(dx * dx + dy * dy);

  const width = Math.abs(dx) + 120;
  const height = Math.abs(dy) + 120;

  const offsetX = Math.min(from.x, to.x) - 60;
  const offsetY = Math.min(from.y, to.y) - 60;

  const startX = from.x - offsetX;
  const startY = from.y - offsetY;

  const endX = to.x - offsetX;
  const endY = to.y - offsetY;

  const cx1 = startX + dx * 0.28;
  const cy1 = startY;

  const cx2 = endX - dx * 0.28;
  const cy2 = endY;

  const path = curved
    ? `M ${startX} ${startY}
       C ${cx1} ${cy1},
         ${cx2} ${cy2},
         ${endX} ${endY}`
    : `M ${startX} ${startY}
       L ${endX} ${endY}`;

  const angle = Math.atan2(dy, dx);

  const arrowSize = Math.min(14, Math.max(9, distance * 0.03));

  const arrowAngle = Math.PI / 7;

  const p1x =
    endX -
    arrowSize * Math.cos(angle - arrowAngle);

  const p1y =
    endY -
    arrowSize * Math.sin(angle - arrowAngle);

  const p2x =
    endX -
    arrowSize * Math.cos(angle + arrowAngle);

  const p2y =
    endY -
    arrowSize * Math.sin(angle + arrowAngle);

  return (
    <svg
      className="absolute overflow-visible pointer-events-none"
      style={{
        left: offsetX,
        top: offsetY,
        width,
        height,
        zIndex,
      }}
    >
      {/* sombra */}

      <path
        d={path}
        fill="none"
        stroke="rgba(0,0,0,.10)"
        strokeWidth={5}
        strokeLinecap="round"
        transform="translate(2 2)"
      />

      {/* línea principal */}

      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "8 7" : undefined}
        style={{
          filter: "url(#marker-shadow)",
        }}
      >
        {animated && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        )}
      </path>

      {/* pequeñas imperfecciones tipo marcador */}

      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        opacity=".18"
        strokeLinecap="round"
        transform="translate(.8 -.5)"
      />

      {/* punta */}

      <polygon
        points={`${endX},${endY} ${p1x},${p1y} ${p2x},${p2y}`}
        fill={stroke}
      />

      {/* pequeño punto inicial */}

      <circle
        cx={startX}
        cy={startY}
        r="2.2"
        fill={stroke}
      />

      <defs>
        <filter
          id="marker-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1.2"
            floodOpacity=".22"
          />
        </filter>
      </defs>
    </svg>
  );
}