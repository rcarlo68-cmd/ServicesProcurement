export default function Connection() {
  return (
    <g>
      {/* Línea vertical */}
      <line
        x1="350"
        y1="275"
        x2="350"
        y2="165"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Diagonal superior derecha */}
      <line
        x1="430"
        y1="325"
        x2="515"
        y2="245"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Diagonal inferior derecha */}
      <line
        x1="430"
        y1="415"
        x2="515"
        y2="495"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Línea vertical inferior */}
      <line
        x1="350"
        y1="465"
        x2="350"
        y2="575"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Diagonal inferior izquierda */}
      <line
        x1="270"
        y1="415"
        x2="185"
        y2="495"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Diagonal superior izquierda */}
      <line
        x1="270"
        y1="325"
        x2="185"
        y2="245"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Nodos */}
      {[
        [350, 275],
        [430, 325],
        [430, 415],
        [350, 465],
        [270, 415],
        [270, 325],
      ].map(([cx, cy], index) => (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r="6"
          fill="#0F766E"
          stroke="white"
          strokeWidth="2"
        />
      ))}
    </g>
  );
}