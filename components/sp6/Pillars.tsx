import {
  integratedModel,
  pillars,
  pillarsIntroduction,
  pillarsTitle,
} from "@/data/sp6";

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="border-b border-slate-200 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Capacidades Estratégicas
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {pillarsTitle}
          </h2>

          <div className="mt-8 space-y-6">
            {pillarsIntroduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <article
  id={pillar.id}
  key={pillar.id}
  className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300"
>
              <h3 className="text-2xl font-semibold text-slate-900">
                {pillar.title}
              </h3>

              <div className="mt-6 space-y-5">
                {pillar.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-5xl rounded-2xl border border-slate-200 bg-white p-10">
          <h3 className="text-2xl font-semibold text-slate-900">
            {integratedModel.title}
          </h3>

          <div className="mt-6 space-y-6">
            {integratedModel.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}