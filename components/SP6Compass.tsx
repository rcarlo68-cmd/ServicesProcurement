import Center from "./sp6/Center";
import Connection from "./sp6/Connection";
import Hexagon from "./sp6/Hexagon";
import Label from "./sp6/Label";

export default function SP6Compass() {
  return (
    <div className="flex justify-center">

      <svg
        viewBox="0 0 700 700"
        className="w-full max-w-[640px]"
      >

        <Connection />

        <Center />
        <Hexagon
          x={350}
          y={85}
          title="Procurement"
        />

        <Hexagon
          x={550}
          y={210}
          title="SP"
          subtitle="Knowledge"
        />

        <Hexagon
          x={550}
          y={490}
          title="Auditoría"
          subtitle="Logística"
        />

        <Hexagon
          x={350}
          y={615}
          title="Talento"
        />      
        <Hexagon
          x={150}
          y={490}
          title="Operaciones"
          subtitle="y Distribución"
        />

        <Hexagon
          x={150}
          y={210}
          title="Almacenes"
          subtitle="e Inventarios"
        />

        <Label
          x={350}
          y={28}
          text="MODELO SP6"
        />

      </svg>

    </div>
  );
}          