"use client";

export default function Center() {
  return (
    <>
      <style>{`
        .sp6-center{
          transform-origin:center;
          animation:sp6-breath 5.5s ease-in-out infinite;
        }

        @keyframes sp6-breath{
          0%{
            transform:scale(1);
          }
          50%{
            transform:scale(1.025);
          }
          100%{
            transform:scale(1);
          }
        }
      `}</style>

      <defs>
        <radialGradient id="sp6HaloOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#2563EB" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="sp6HaloInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="sp6Glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0F172A" stopOpacity="0.92" />
        </linearGradient>

        <linearGradient id="sp6Stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <filter
          id="sp6CenterGlow"
          x="-300%"
          y="-300%"
          width="700%"
          height="700%"
        >
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="12"
            floodColor="#38BDF8"
            floodOpacity="0.85"
          />
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="28"
            floodColor="#2563EB"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      <g className="sp6-center">
        <circle
          cx="350"
          cy="370"
          r="165"
          fill="url(#sp6HaloOuter)"
        />

        <circle
          cx="350"
          cy="370"
          r="118"
          fill="url(#sp6HaloInner)"
          opacity="0.9"
        />

        <circle
          cx="350"
          cy="370"
          r="102"
          fill="none"
          stroke="#38BDF8"
          strokeOpacity="0.12"
          strokeWidth="2"
        />

        <circle
          cx="350"
          cy="370"
          r="88"
          fill="none"
          stroke="#38BDF8"
          strokeOpacity="0.2"
          strokeWidth="1.8"
        />

        <circle
          cx="350"
          cy="370"
          r="73"
          fill="none"
          stroke="#7DD3FC"
          strokeOpacity="0.28"
          strokeWidth="1.6"
        />

        <circle
          cx="350"
          cy="370"
          r="62"
          fill="url(#sp6Glass)"
          stroke="url(#sp6Stroke)"
          strokeWidth="2.4"
          filter="url(#sp6CenterGlow)"
        />

        <circle
          cx="350"
          cy="352"
          r="18"
          fill="#BAE6FD"
          opacity="0.08"
        />

        <g
          transform="translate(350 370)"
          filter="url(#sp6CenterGlow)"
        >
          <path
            d="
              M0 -26
              L22 -13
              L22 13
              L0 26
              L-22 13
              L-22 -13
              Z
            "
            fill="none"
            stroke="#7DD3FC"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          <path
            d="
              M0 -14
              L12 -7
              L12 7
              L0 14
              L-12 7
              L-12 -7
              Z
            "
            fill="#38BDF8"
            fillOpacity="0.16"
            stroke="#E0F2FE"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />

          <circle
            cx="0"
            cy="0"
            r="3.5"
            fill="#E0F2FE"
          />

          <path
            d="M0 -26V-14"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M22 -13L12 -7"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M22 13L12 7"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M0 26V14"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M-22 13L-12 7"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M-22 -13L-12 -7"
            stroke="#7DD3FC"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </>
  );
}