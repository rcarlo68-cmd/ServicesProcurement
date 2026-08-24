"use client";

const gantt = [
  {
    label: "F1 · ENTENDER",
    months: [1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    label: "F2 · ORDENAR",
    months: [0, 1, 1, 0, 0, 0, 0, 0, 0],
  },
  {
    label: "F3 · ALINEAR Y OPTIMIZAR",
    months: [0, 0, 0, 1, 1, 1, 0, 0, 0],
  },
  {
    label: "F4 · TRANSFERIR",
    months: [0, 0, 0, 0, 0, 0, 1, 1, 1],
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-[#D4AF37]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                PROGRAMA REFERENCIAL
              </span>
            </div>

            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-tight tracking-[-0.04em] text-white">
              Evolución del programa.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Un horizonte referencial para visualizar la progresión de las
              cuatro fases del Modelo SP6.
            </p>
          </div>

          <span className="hidden text-sm text-slate-500 sm:block">
            9 meses
          </span>
        </div>

        {/* Gantt */}
        <div className="mt-12">

          {/* Desktop / Tablet */}
          <div className="hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:block">

            {/* Month header */}
            <div className="grid grid-cols-[220px_repeat(9,1fr)] border-b border-white/10">

              <div className="p-4 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                FASE
              </div>

              {Array.from({ length: 9 }, (_, index) => (
                <div
                  key={index}
                  className="border-l border-white/5 p-4 text-center text-[10px] text-slate-600"
                >
                  M{index + 1}
                </div>
              ))}
            </div>

            {/* Rows */}
            {gantt.map((row, rowIndex) => (
              <div
                key={row.label}
                className={`grid grid-cols-[220px_repeat(9,1fr)] ${
                  rowIndex < gantt.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="flex items-center px-4 py-5 text-xs text-slate-300">
                  {row.label}
                </div>

                {row.months.map((active, index) => (
                  <div
                    key={index}
                    className="flex min-h-[58px] items-center border-l border-white/5 px-1.5"
                  >
                    {active ? (
                      <div className="h-5 w-full rounded-sm bg-[#D4AF37]/80" />
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">

            {gantt.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="mb-4 text-xs text-slate-300">
                  {row.label}
                </div>

                <div className="grid grid-cols-9 gap-1">
                  {row.months.map((active, index) => (
                    <div key={index} className="text-center">

                      <div
                        className={`h-2 rounded-sm ${
                          active
                            ? "bg-[#D4AF37]"
                            : "bg-white/[0.06]"
                        }`}
                      />

                      <span className="mt-1 block text-[8px] text-slate-600">
                        M{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-5 max-w-3xl text-xs leading-6 text-slate-500">
            El horizonte es referencial. La duración y profundidad de cada
            fase dependen de la situación inicial, la capacidad de respuesta
            de la organización y la complejidad de la operación.
          </p>
        </div>
      </div>
    </section>
  );
}