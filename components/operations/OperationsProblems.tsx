import SectionTitle from "../shared/SectionTitle";
import ServiceGrid from "../shared/ServiceGrid";

export default function OperationsProblems() {
  const cards = [
    {
      title: "Equipos esperando materiales",
      description:
        "La producción o el mantenimiento se detienen mientras esperan un repuesto crítico o un material que debió estar disponible.",
    },
    {
      title: "Compras de emergencia",
      description:
        "La urgencia reemplaza la planificación, incrementando costos y presión sobre toda la operación.",
    },
    {
      title: "Subbodegas fuera de control",
      description:
        "Los materiales terminan almacenados fuera del almacén central, perdiendo trazabilidad y visibilidad.",
    },
    {
      title: "Repuestos fuera de estándar",
      description:
        "Un mismo equipo utiliza materiales diferentes según el área que los solicita.",
    },
    {
      title: "Planeamiento desconectado",
      description:
        "Producción, Mantenimiento, Compras e Inventarios trabajan con prioridades distintas.",
    },
    {
      title: "Recursos subutilizados",
      description:
        "Equipos, personas e inventarios permanecen disponibles sin generar valor para la operación.",
    },
  ];

  return (
    <section className="mt-24">

      <SectionTitle
        eyebrow="LA REALIDAD OPERACIONAL"
        title="Situaciones que encontramos con frecuencia"
        subtitle="Más que problemas aislados, observamos restricciones que afectan el desempeño de toda la cadena de suministro."
      />

      <ServiceGrid cards={cards} />

    </section>
  );
}