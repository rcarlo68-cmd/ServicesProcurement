import Center from "./sp6/Center";
import Connection from "./sp6/Connection";
import Hexagon from "./sp6/Hexagon";
import Label from "./sp6/Label";

const pillars = [
  {
    x: 350,
    y: 90,
    title: "Procurement",
  },
  {
    x: 565,
    y: 215,
    title: "SP",
    subtitle: "Knowledge",
  },
  {
    x: 565,
    y: 525,
    title: "Auditoría",
    subtitle: "Logística",
  },
  {
    x: 350,
    y: 650,
    title: "Talento",
  },
  {
    x: 135,
    y: 525,
    title: "Operaciones",
    subtitle: "y Distribución",
  },
  {
    x: 135,
    y: 215,
    title: "Almacenes",
    subtitle: "e Inventarios",
  },
];

export default function SP6Compass() {
  return (
    <div className="flex justify-center py-12">
      <svg
        viewBox="0 0 700 740"
        className="w-full max-w-[820px]"
      >
        <Label
          x={350}
          y={40}
          text="MODELO SP6"
        />

        <Connection />

        <Center />

        {pillars.map((pillar) => (
          <Hexagon
            key={`${pillar.title}-${pillar.x}-${pillar.y}`}
            {...pillar}
          />
        ))}
      </svg>
    </div>
  );
}