import {
  benefits,
  benefitsConclusion,
  benefitsIntroduction,
  benefitsTitle,
} from "@/data/sp6";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="border-b border-slate-200 bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Resultados
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {benefitsTitle}
          </h2>

          <div className="mt-8 space-y-6">
            {benefitsIntroduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`grid gap-6 py-10 md:grid-cols-[90px_1fr] ${
                index !== benefits.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="text-6xl font-light leading-none text-slate-200">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-2xl border border-slate-200 bg-slate-900 px-10 py-12 text-center">
          <h3 className="text-2xl font-semibold text-white">
            {benefitsConclusion.title}
          </h3>

          <div className="mt-6 space-y-5">
            {benefitsConclusion.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-300"
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