type HexagonProps = {
  x: number;
  y: number;
  title: string;
  subtitle?: string;
};

export default function Hexagon({
  x,
  y,
  title,
  subtitle,
}: HexagonProps) {
  return (
    <g className="cursor-pointer transition-all duration-300">

      <polygon
        points={`
          ${x - 48},${y}
          ${x - 32},${y - 44}
          ${x + 32},${y - 44}
          ${x + 48},${y}
          ${x + 32},${y + 44}
          ${x - 32},${y + 44}
        `}
        fill="white"
        stroke="#0891B2"
        strokeWidth="3"
      />

      <text
        x={x}
        y={subtitle ? y - 6 : y + 6}
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fill="#0F172A"
      >
        {title}
      </text>

      {subtitle && (
        <text
          x={x}
          y={y + 20}
          textAnchor="middle"
          fontSize="14"
          fontWeight="500"
          fill="#334155"
        >
          {subtitle}
        </text>
      )}

    </g>
  );
}