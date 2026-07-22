export default function Center() {
  return (
    <g>
      {/* Sombra */}
      <circle
        cx="350"
        cy="370"
        r="104"
        fill="#E2E8F0"
        opacity="0.35"
      />

      {/* Disco principal */}
      <circle
        cx="350"
        cy="370"
        r="96"
        fill="white"
        stroke="#0F766E"
        strokeWidth="8"
      />

      {/* Anillo interior */}
      <circle
        cx="350"
        cy="370"
        r="78"
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* SP6 */}
      <text
        x="350"
        y="352"
        textAnchor="middle"
        fontSize="44"
        fontWeight="800"
        fill="#0F766E"
      >
        SP6
      </text>

      {/* Subtítulo */}
      <text
        x="350"
        y="382"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#475569"
      >
        Strategic Supply Chain
      </text>

      <text
        x="350"
        y="402"
        textAnchor="middle"
        fontSize="14"
        fontWeight="600"
        fill="#475569"
      >
        Performance Model
      </text>
    </g>
  );
}