export default function SPKnowledge() {
  return (
    <section id="knowledge" className="bg-slate-900 py-24 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          SP KNOWLEDGE
        </p>

        <h2 className="mt-4 max-w-5xl text-5xl font-bold leading-tight">
          Conocimiento que nace de la operación.
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
          Compartimos investigaciones, casos, publicaciones y modelos desarrollados
          a partir de experiencias reales en operaciones donde la cadena de suministro
          tiene un impacto directo en el desempeño.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-700 p-8">

            <h3 className="text-2xl font-bold">
              Newsletter
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Reflexiones y experiencias publicadas periódicamente en LinkedIn.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 p-8">

            <h3 className="text-2xl font-bold">
              Casos
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Situaciones reales que muestran cómo abordamos problemas operacionales.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 p-8">

            <h3 className="text-2xl font-bold">
              Investigación
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Desarrollo de conceptos y conocimiento aplicado a la cadena de suministro.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 p-8">

            <h3 className="text-2xl font-bold">
              Modelos
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Marcos de trabajo propios desarrollados a partir de la experiencia en campo.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}