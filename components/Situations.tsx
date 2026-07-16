export default function Situations() {
  const situations = [
    {
      title: "Roturas de stock",
      text: "Materiales críticos que no llegan cuando la operación los necesita.",
      icon: "📦",
    },
    {
      title: "Compras urgentes",
      text: "La urgencia reemplaza la planificación y aumenta los costos.",
      icon: "🚨",
    },
    {
      title: "Baja disponibilidad",
      text: "Equipos detenidos por falta de materiales o repuestos.",
      icon: "⚙️",
    },
    {
      title: "Inventarios poco confiables",
      text: "El sistema indica una realidad distinta a la operación.",
      icon: "📊",
    },
    {
      title: "Materiales fuera de tiempo",
      text: "Los recursos llegan cuando la necesidad ya pasó.",
      icon: "⏱️",
    },
    {
      title: "Producción afectada",
      text: "La cadena de suministro limita el desempeño operacional.",
      icon: "🏭",
    },
    {
      title: "ERP sin resultados",
      text: "La tecnología existe, pero los procesos siguen desconectados.",
      icon: "💻",
    },
    {
      title: "Áreas desalineadas",
      text: "Producción, Compras, Inventarios y Mantenimiento trabajan con prioridades distintas.",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="situaciones"
      className="bg-gradient-to-b from-white to-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">
            SITUACIONES COMUNES
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            ¿Reconoce alguna de estas situaciones?
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Estas situaciones rara vez aparecen aisladas.
            Normalmente interactúan entre sí y terminan limitando
            el desempeño global de la operación.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {situations.map((item) => (

            <article
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl transition group-hover:bg-cyan-500 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.text}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}