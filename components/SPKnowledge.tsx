/*
----------------------------------------------------------
Services Procurement Website
Component: SPKnowledge
Version: 1.3
Status: PRODUCTION
----------------------------------------------------------
*/

export default function SPKnowledge() {
  return (
    <section
      id="knowledge"
      className="bg-slate-900 py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}

        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
            SP KNOWLEDGE
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            Conocimiento que nace de la operación.
          </h2>

          <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg md:mt-8 md:text-xl md:leading-9">
            Compartimos investigaciones, casos, publicaciones y modelos
            desarrollados a partir de experiencias reales en operaciones donde
            la cadena de suministro tiene un impacto directo en el desempeño.
          </p>
        </div>

        {/* Tarjetas */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          <article className="group flex flex-col rounded-3xl border border-slate-600 bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 5h16v14H4z" />
                <path d="M8 9h8M8 13h6" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold">
              Newsletter
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Reflexiones, análisis y experiencias publicadas periódicamente en
              LinkedIn para compartir conocimiento aplicado.
            </p>
          </article>

          <article className="group flex flex-col rounded-3xl border border-slate-600 bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold">
              Casos
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Situaciones reales que muestran cómo abordamos problemas
              operacionales y fortalecemos la cadena de suministro.
            </p>
          </article>

          <article className="group flex flex-col rounded-3xl border border-slate-600 bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l2 2" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold">
              Investigación
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Desarrollo de conceptos y conocimiento aplicado para comprender
              mejor los desafíos de la logística moderna.
            </p>
          </article>

          <article className="group flex flex-col rounded-3xl border border-slate-600 bg-slate-800/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3l8 4v10l-8 4-8-4V7z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold">
              Modelos
            </h3>

            <p className="mt-5 flex-1 leading-8 text-slate-300">
              Marcos de trabajo propios desarrollados a partir de décadas de
              experiencia en operaciones y supply chain.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}