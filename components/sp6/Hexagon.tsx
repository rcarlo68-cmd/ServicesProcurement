"use client";

type HexagonProps = {
  x: number;
  y: number;
  title: string;
  subtitle: string;
};

export default function Hexagon({
  x,
  y,
  title,
  subtitle,
}: HexagonProps) {
  const size = 92;
  const h = size * 0.8660254;

  const points = [
    `0,-${size}`,
    `${h},-${size / 2}`,
    `${h},${size / 2}`,
    `0,${size}`,
    `-${h},${size / 2}`,
    `-${h},-${size / 2}`,
  ].join(" ");

  return (
    <>
      <style>{`
        .sp6-hex{
          cursor:pointer;
          transition:transform .35s ease;
          transform-origin:center;
        }

        .sp6-hex .glass{
          transition:fill .35s ease,opacity .35s ease;
        }

        .sp6-hex .border{
          transition:stroke .35s ease,filter .35s ease;
        }

        .sp6-hex .title,
        .sp6-hex .subtitle{
          transition:fill .35s ease;
        }

        .sp6-hex:hover{
          transform:translateY(-4px) scale(1.045);
        }

        .sp6-hex:hover .glass{
          fill:rgba(30,41,59,.82);
        }

        .sp6-hex:hover .border{
          stroke:#67E8F9;
          filter:drop-shadow(0 0 16px rgba(56,189,248,.9));
        }

        .sp6-hex:hover .title{
          fill:#ffffff;
        }

        .sp6-hex:hover .subtitle{
          fill:#BAE6FD;
        }
      `}</style>

      <g className="sp6-hex" transform={`translate(${x} ${y})`}>
        <defs>
          <linearGradient
            id="sp6HexFill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(30,41,59,0.72)" />
          </linearGradient>

          <linearGradient
            id="sp6HexStroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <filter
            id="sp6Shadow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="10"
              floodColor="#38BDF8"
              floodOpacity="0.25"
            />
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="18"
              floodColor="#000000"
              floodOpacity="0.55"
            />
          </filter>
        </defs>

        <polygon
          points={points}
          fill="#0f172a"
          opacity="0.55"
          filter="url(#sp6Shadow)"
        />

        <polygon
          className="glass"
          points={points}
          fill="url(#sp6HexFill)"
          opacity="0.95"
        />

        <polygon
          className="border"
          points={points}
          fill="none"
          stroke="url(#sp6HexStroke)"
          strokeWidth="2.5"
        />

        <polygon
          points={points}
          fill="none"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="1"
          transform="scale(.9)"
        />

        <text
          className="title"
          x="0"
          y="-8"
          textAnchor="middle"
          fill="#F8FAFC"
          fontSize="17"
          fontWeight="700"
          letterSpacing=".3"
          fontFamily="Inter, ui-sans-serif, system-ui"
        >
          {title}
        </text>

        <text
          className="subtitle"
          x="0"
          y="22"
          textAnchor="middle"
          fill="#CBD5E1"
          fontSize="14"
          fontWeight="500"
          letterSpacing=".25"
          fontFamily="Inter, ui-sans-serif, system-ui"
        >
          {subtitle}
        </text>
      </g>
    </>
  );
}