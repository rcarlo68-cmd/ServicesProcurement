// components/whiteboard/Whiteboard.tsx

"use client";

import Sticky from "./Sticky";
import Note from "./Note";
import Arrow from "./Arrow";
import Marker from "./Marker";
import Sketch from "./Sketch";
import { WhiteboardProps } from "./types";

export default function Whiteboard({
  className = "",
}: WhiteboardProps) {
  return (
    <section
      className={`
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#F3F0E7]
        ${className}
      `}
    >
      {/* Fondo tipo pared */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.45),transparent_60%)]" />

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.10)_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,.25),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,.18),transparent_30%)]" />

      {/* ========================= */}
      {/*        GARABATOS          */}
      {/* ========================= */}

      <Sketch
        x={140}
        y={140}
        variant="scribble"
        color="orange"
        rotate={-8}
      />

      <Sketch
        x={1500}
        y={220}
        variant="spiral"
        color="blue"
      />

      <Sketch
        x={230}
        y={720}
        variant="cloud"
        color="green"
      />

      <Sketch
        x={1450}
        y={760}
        variant="zigzag"
        color="red"
      />

      <Sketch
        x={900}
        y={880}
        variant="cross"
        color="purple"
      />

      {/* ========================= */}
      {/*        CENTRO             */}
      {/* ========================= */}

      <Sticky
        x={960}
        y={480}
        rotate={-2}
        color="yellow"
        title="MODELO SP6"
        zIndex={30}
      >
        Procurement{"\n"}
        Warehousing{"\n"}
        Inventory{"\n"}
        Operations{"\n"}
        Talent{"\n"}
        SP Knowledge
      </Sticky>

      {/* ========================= */}
      {/*       PRIMER ANILLO       */}
      {/* ========================= */}

      <Sticky
        x={630}
        y={280}
        color="blue"
        rotate={-6}
        title="Procurement"
      >
        Strategic sourcing{"\n"}
        Category{"\n"}
        Contracts
      </Sticky>

      <Sticky
        x={1290}
        y={280}
        color="green"
        rotate={5}
        title="Warehousing"
      >
        Layout{"\n"}
        Picking{"\n"}
        ABC
      </Sticky>

      <Sticky
        x={560}
        y={640}
        color="pink"
        rotate={4}
        title="Inventory"
      >
        Accuracy{"\n"}
        Stock{"\n"}
        Cycle Count
      </Sticky>

      <Sticky
        x={1360}
        y={640}
        color="yellow"
        rotate={-5}
        title="Operations"
      >
        Planning{"\n"}
        Reliability{"\n"}
        Execution
      </Sticky>

      <Sticky
        x={960}
        y={170}
        color="blue"
        rotate={1}
        title="Talent"
      >
        Coaching{"\n"}
        Skills{"\n"}
        Leadership
      </Sticky>

      <Sticky
        x={960}
        y={790}
        color="green"
        rotate={-1}
        title="SP Knowledge"
      >
        Frameworks{"\n"}
        Best Practices{"\n"}
        AI
      </Sticky>

      {/* ========================= */}
      {/*       PROBLEMAS           */}
      {/* ========================= */}

      <Sticky
        x={260}
        y={250}
        rotate={-8}
        title="Urgencias"
      >
        Compras reactivas
      </Sticky>

      <Sticky
        x={1660}
        y={260}
        rotate={7}
        title="Quiebres"
      >
        Falta de materiales
      </Sticky>

      <Sticky
        x={230}
        y={650}
        rotate={-5}
        title="Sobrestock"
      >
        Capital inmovilizado
      </Sticky>

      <Sticky
        x={1680}
        y={650}
        rotate={6}
        title="SAP"
      >
        Datos maestros
      </Sticky>

      <Sticky
        x={470}
        y={900}
        rotate={-3}
        title="Compras"
      >
        Maverick Buying
      </Sticky>

      <Sticky
        x={1450}
        y={900}
        rotate={4}
        title="Datos"
      >
        Información inconsistente
      </Sticky>

      {/* ========================= */}
      {/*      RESULTADOS           */}
      {/* ========================= */}

      <Note
        x={260}
        y={980}
        rotate={-4}
        title="Resultados Esperados"
        pinned
      >
        • Disponibilidad{"\n"}
        • Productividad{"\n"}
        • Ahorro{"\n"}
        • IA{"\n"}
        • Resiliencia{"\n"}
        • Transformación
      </Note>

      {/* ========================= */}
      {/*       CONEXIONES          */}
      {/* ========================= */}

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 630, y: 280 }}
        color="blue"
      />

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 1290, y: 280 }}
        color="green"
      />

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 560, y: 640 }}
        color="purple"
      />

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 1360, y: 640 }}
        color="orange"
      />

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 960, y: 170 }}
        color="black"
      />

      <Arrow
        from={{ x: 960, y: 480 }}
        to={{ x: 960, y: 790 }}
        color="black"
      />

      <Arrow
        from={{ x: 260, y: 250 }}
        to={{ x: 630, y: 280 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 1660, y: 260 }}
        to={{ x: 1290, y: 280 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 230, y: 650 }}
        to={{ x: 560, y: 640 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 1680, y: 650 }}
        to={{ x: 1360, y: 640 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 470, y: 900 }}
        to={{ x: 960, y: 790 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 1450, y: 900 }}
        to={{ x: 960, y: 790 }}
        color="red"
        dashed
      />

      <Arrow
        from={{ x: 960, y: 790 }}
        to={{ x: 260, y: 980 }}
        color="green"
        animated
      />

      {/* ========================= */}
      {/*      ANOTACIONES          */}
      {/* ========================= */}

      <Marker
        x={960}
        y={480}
        width={320}
        height={220}
        type="circle"
        color="orange"
        rotate={-4}
      />

      <Marker
        x={950}
        y={120}
        width={240}
        type="underline"
        color="blue"
      />

      <Marker
        x={1500}
        y={915}
        width={180}
        height={50}
        type="highlight"
        color="green"
        rotate={-3}
      />

      <Marker
        x={250}
        y={665}
        width={160}
        height={50}
        type="highlight"
        color="orange"
        rotate={5}
      />
    </section>
  );
}