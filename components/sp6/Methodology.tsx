import {
  methodology,
  methodologyConclusion,
  methodologyIntroduction,
  methodologyTitle,
} from "@/data/sp6";

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="border-b border-slate-200 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Metodología
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {methodologyTitle}
          </h2>

          <div className="mt-8 space-y-6">
            {methodologyIntroduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="space-y-10">
            {methodology.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-slate-300"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <div className="mt-6 space-y-5">
                      {step.description.map((paragraph, index) => (
                        <p
                          key={index}
                          className="leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {step.bullets && (
                      <ul className="mt-8 grid gap-3 md:grid-cols-2">
                        {step.bullets.map((bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />

                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-10">
          <h3 className="text-2xl font-semibold text-slate-900">
            {methodologyConclusion.title}
          </h3>

          <div className="mt-6 space-y-6">
            {methodologyConclusion.paragraphs.map((paragraph, index) => (
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