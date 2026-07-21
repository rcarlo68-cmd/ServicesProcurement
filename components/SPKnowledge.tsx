/*
----------------------------------------------------------
Services Procurement Website
Component: SPKnowledge
Version: 1.1
Status: RESPONSIVE
----------------------------------------------------------
*/

export default function SPKnowledge() {
  return (
    <section
      id="knowledge"
      className="bg-slate-900 py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}

        <div className="max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            SP KNOWLEDGE
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Conocimiento que nace de la operación.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Compartimos investigaciones, casos, publicaciones y modelos
            desarrollados a partir de experiencias reales en operaciones donde
            la cadena de suministro tiene un impacto directo en el desempeño.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition duration-300 hover:border-cyan-500 hover:bg-slate-800">

            <h3 className="text-2xl font-bold">
              Newsletter
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Reflexiones, análisis y experiencias publicadas periódicamente en LinkedIn para compartir conocimiento aplicado.
            </p>

          </article>

          <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition duration-300 hover:border-cyan-500 hover:bg-slate-800">

            <h3 className="text-2xl font-bold">
              Casos
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Situaciones reales que muestran cómo abordamos problemas operacionales y fortalecemos la cadena de suministro.
            </p>

          </article>

          <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition duration-300 hover:border-cyan-500 hover:bg-slate-800">

            <h3 className="text-2xl font-bold">
              Investigación
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Desarrollo de conceptos y conocimiento aplicado para comprender mejor los desafíos de la logística moderna.
            </p>

          </article>

          <article className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800/40 p-8 transition duration-300 hover:border-cyan-500 hover:bg-slate-800">

            <h3 className="text-2xl font-bold">
              Modelos
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Marcos de trabajo propios desarrollados a partir de décadas de experiencia en operaciones y supply chain.
            </p>

          </article>

        </div>

      </div>

    </section>
  );
}