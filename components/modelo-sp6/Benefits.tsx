"use client";

const benefits = [
  {
    title: "Visión Integral",
    description:
      "Integra procurement, almacenes, operaciones, auditoría, transformación digital y talento dentro de un único modelo de gestión.",
  },
  {
    title: "Menores Pérdidas",
    description:
      "Reduce pérdidas operativas identificando vulnerabilidades antes de que afecten la productividad o los resultados del negocio.",
  },
  {
    title: "Mejor Toma de Decisiones",
    description:
      "Convierte la información operativa en conocimiento útil para decidir con mayor rapidez, precisión y confianza.",
  },
  {
    title: "Mayor Productividad",
    description:
      "Optimiza procesos críticos eliminando actividades que no generan valor y fortaleciendo la eficiencia operacional.",
  },
  {
    title: "Transformación Sostenible",
    description:
      "Los cambios no dependen de personas aisladas, sino de procesos, capacidades y una cultura orientada a la mejora continua.",
  },
  {
    title: "Ventaja Competitiva",
    description:
      "Transforma la cadena de suministro en un activo estratégico capaz de generar eficiencia, resiliencia y diferenciación.",
  },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[#070A0F] py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              BENEFICIOS
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Más que una metodología,
            <br />
            una ventaja competitiva.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            El verdadero valor del Modelo SP6 no reside únicamente en mejorar
            procesos individuales, sino en integrar capacidades para construir
            una cadena de suministro más eficiente, resiliente y orientada a la
            creación de valor.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D4AF37]/40
                hover:bg-white/[0.05]
              "
            >
              <div className="mb-6 h-1 w-14 rounded-full bg-[#D4AF37]" />

              <h3 className="text-2xl font-light text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                {benefit.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}