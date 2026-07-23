"use client";

import Center from "./Center";
import Connection from "./Connection";
import Hexagon from "./Hexagon";

export default function SP6Framework() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_72%)]" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto aspect-square w-full max-w-[900px]">
          <svg
            viewBox="0 0 700 740"
            className="h-auto w-full overflow-visible"
            role="img"
            aria-label="SP6 Framework"
          >
            <defs>
              <filter
                id="sp-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient
                id="line-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>

            <g
              filter="url(#sp-glow)"
              stroke="url(#line-gradient)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.9"
            >
              <Connection />
            </g>

            <Hexagon
              x={350}
              y={120}
              title="Strategic"
              subtitle="Procurement"
            />

            <Hexagon
              x={560}
              y={245}
              title="Warehouse"
              subtitle="Excellence"
            />

            <Hexagon
              x={560}
              y={495}
              title="Inventory"
              subtitle="Intelligence"
            />

            <Hexagon
              x={350}
              y={620}
              title="Logistics"
              subtitle="Operations"
            />

            <Hexagon
              x={140}
              y={495}
              title="Talent"
              subtitle="Development"
            />

            <Hexagon
              x={140}
              y={245}
              title="SP"
              subtitle="Knowledge"
            />

            <Center />
          </svg>
        </div>
      </div>
    </section>
  );
}