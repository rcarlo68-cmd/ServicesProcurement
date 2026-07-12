export default function Situations() {
  const situations = [
    "Roturas de stock.",
    "Compras urgentes recurrentes.",
    "Baja disponibilidad mecánica por falta de materiales.",
    "Inventarios poco confiables.",
    "Materiales críticos fuera de tiempo.",
    "Producción afectada por problemas de abastecimiento.",
    "ERP implementado, pero sin los resultados esperados.",
    "Conflictos recurrentes entre Producción, Mantenimiento, Compras y Logística.",
  ];

  return (
<section
  id="situaciones"
  className="bg-slate-50 py-24">   
    <div className="mx-auto max-w-7xl px-8">

        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            SITUACIONES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
  ¿Reconoce alguna de estas situaciones?
</h2>

         <p className="mt-8 text-xl leading-9 text-slate-600">
  Estas son algunas de las situaciones que encontramos con mayor frecuencia en organizaciones de diferentes sectores.
</p> 

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {situations.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-start gap-4">

                <div className="mt-1 h-3 w-3 rounded-full bg-red-600" />

                <p className="text-lg leading-8 text-slate-700">
                  {item}
                </p>

              </div>
            </div>
          ))}

        </div>

              </div>
    </section>
  );
}