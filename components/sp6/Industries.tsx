import {
  industries,
  industriesIntroduction,
  industriesTitle,
} from "@/data/sp6";

export default function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-slate-200 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Aplicación
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {industriesTitle}
          </h2>

          <div className="mt-8 space-y-6">
            {industriesIntroduction.map((paragraph, index) => (
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
          {industries.map((industry, index) => (
            <article
              key={industry.title}
              className={`grid gap-6 py-10 md:grid-cols-[90px_1fr] ${
                index !== industries.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="text-6xl font-light leading-none text-slate-200">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-2xl border border-slate-200 bg-white px-10 py-12">
          <p className="text-center text-xl leading-9 text-slate-700">
            <span className="font-semibold text-slate-900">
              El Modelo SP6 no está diseñado para una industria específica.
            </span>
            <br />
            Es una metodología adaptable que fortalece las capacidades de la
            cadena de suministro respetando la realidad operacional, el nivel de
            madurez y los objetivos estratégicos de cada organización.
          </p>
        </div>
      </div>
    </section>
  );
}