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
    <g
      className="
        cursor-default
        transition-all
        duration-300
      "
    >
      {/* sombra */}
      <polygon
        points={`
          ${x - 50},${y + 4}
          ${x - 34},${y - 42}
          ${x + 34},${y - 42}
          ${x + 50},${y + 4}
          ${x + 34},${y + 50}
          ${x - 34},${y + 50}
        `}
        fill="#CBD5E1"
        opacity="0.28"
      />

      {/* hexágono */}
      <polygon
        points={`
          ${x - 50},${y}
          ${x - 34},${y - 46}
          ${x + 34},${y - 46}
          ${x + 50},${y}
          ${x + 34},${y + 46}
          ${x - 34},${y + 46}
        `}
        fill="white"
        stroke="#0F766E"
        strokeWidth="3"
      />

      {/* línea superior */}
      <line
        x1={x - 22}
        y1={y - 22}
        x2={x + 22}
        y2={y - 22}
        stroke="#14B8A6"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* título */}
      <text
        x={x}
        y={subtitle ? y - 2 : y + 6}
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
          y={y + 22}
          textAnchor="middle"
          fontSize="13"
          fontWeight="500"
          fill="#475569"
        >
          {subtitle}
        </text>
      )}
    </g>
  );
}