import Center from "./sp6/Center";
import Connection from "./sp6/Connection";
import Hexagon from "./sp6/Hexagon";
import Label from "./sp6/Label";

export default function SP6Compass() {
  return (
    <div className="flex justify-center py-8">
      <svg
        viewBox="0 0 700 740"
        className="w-full max-w-[760px]"
      >
        <Connection />

        <Center />

        <Hexagon
          x={350}
          y={115}
          title="Procurement"
        />

        <Hexagon
          x={550}
          y={230}
          title="SP"
          subtitle="Knowledge"
        />

        <Hexagon
          x={550}
          y={510}
          title="Auditoría"
          subtitle="Logística"
        />

        <Hexagon
          x={350}
          y={625}
          title="Talento"
        />

        <Hexagon
          x={150}
          y={510}
          title="Operaciones"
          subtitle="y Distribución"
        />

        <Hexagon
          x={150}
          y={230}
          title="Almacenes"
          subtitle="e Inventarios"
        />

        <Label
          x={350}
          y={40}
          text="MODELO SP6"
        />
      </svg>
    </div>
  );
}