"use client";

export default function Connection() {
  const cx = 350;
  const cy = 370;

  const nodes = [
    { x: 350, y: 120 },
    { x: 560, y: 245 },
    { x: 560, y: 495 },
    { x: 350, y: 620 },
    { x: 140, y: 495 },
    { x: 140, y: 245 },
  ];

  return (
    <>
      <defs>
        <linearGradient
          id="sp6ConnectionGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="45%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <filter
          id="sp6ConnectionGlow"
          x="-300%"
          y="-300%"
          width="700%"
          height="700%"
        >
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="sp6NodeFill">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#38BDF8" />
        </radialGradient>
      </defs>

      <g
        stroke="url(#sp6ConnectionGradient)"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        filter="url(#sp6ConnectionGlow)"
      >
        {nodes.map((node, index) => {
          const mx = (cx + node.x) / 2;
          const my = (cy + node.y) / 2;

          const dx = node.x - cx;
          const dy = node.y - cy;

          const nx = -dy * 0.12;
          const ny = dx * 0.12;

          return (
            <path
              key={index}
              d={`M ${cx} ${cy} Q ${mx + nx} ${my + ny} ${node.x} ${node.y}`}
            />
          );
        })}
      </g>

      <g>
        {nodes.map((node, index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="5"
              fill="url(#sp6NodeFill)"
              opacity="0.25"
            />
            <circle
              cx={cx}
              cy={cy}
              r="2.4"
              fill="#E0F2FE"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="url(#sp6NodeFill)"
              opacity="0.28"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="2.4"
              fill="#E0F2FE"
            />
          </g>
        ))}
      </g>
    </>
  );
}