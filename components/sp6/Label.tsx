type LabelProps = {
  x: number;
  y: number;
  text: string;
};

export default function Label({
  x,
  y,
  text,
}: LabelProps) {
  return (
    <g>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        letterSpacing="5"
        fill="#0F766E"
      >
        {text}
      </text>

      <line
        x1={x - 82}
        y1={y + 16}
        x2={x + 82}
        y2={y + 16}
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}