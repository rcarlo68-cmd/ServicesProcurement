export default function SituationsSolved() {
  const cases = [
    {
      title: "Roturas recurrentes de stock",
      text: "La causa no siempre estaba en el almacén.",
    },
    {
      title: "Compras urgentes permanentes",
      text: "La urgencia era el resultado, no el origen del problema.",
    },
    {
      title: "Inventarios poco confiables",
      text: "El ERP no era la causa; solo reflejaba una realidad que nadie estaba viendo.",
    },
    {
      title: "Baja disponibilidad mecánica",
      text: "La falta de repuestos era solo uno de los síntomas.",
    },
  ];

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          EXPERIENCIA
        </p>

        <h2 className="mt-4 max-w-5xl text-5xl font-bold leading-tight text-slate-900">
          Hemos ayudado a resolver situaciones como estas.
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
          Cada organización es diferente. Sin embargo, muchas situaciones
          comparten síntomas similares aunque sus causas sean completamente distintas.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {cases.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-10 transition hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}