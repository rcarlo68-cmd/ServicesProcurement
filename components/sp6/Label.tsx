type LabelProps = {
  x: number;
  y: number;
  text: string;
};

export default function Label({ x, y, text }: LabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize="12"
      letterSpacing="4"
      fontWeight="600"
      fill="#64748B"
    >
      {text}
    </text>
  );
}