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
    <g className="cursor-pointer">

      <polygon
        points={`
          ${x-40},${y}
          ${x-28},${y-38}
          ${x+28},${y-38}
          ${x+55},${y}
          ${x+28},${y+38}
          ${x-28},${y+38}
        `}
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      <text
        x={x}
        y={subtitle ? y - 4 : y + 5}
        textAnchor="middle"
        fontSize="15"
        fontWeight="600"
        fill="#0F172A"
      >
        {title}
      </text>

      {subtitle && (
        <text
          x={x}
          y={y + 18}
          textAnchor="middle"
          fontSize="13"
          fill="#475569"
        >
          {subtitle}
        </text>
      )}

    </g>
  );
}