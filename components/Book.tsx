export default function Book() {
  return (
    <section id="libro" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}

          <div className="flex justify-center">

            <div className="flex h-[520px] w-[360px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-100">

              <span className="text-lg font-semibold text-slate-500">
                Portada del libro
              </span>

            </div>

          </div>

          {/* Texto */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              LIBRO
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
              El Fraude que la Contabilidad no Ve
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">

              Una investigación basada en casos reales que propone una nueva
              forma de comprender cómo la cadena de suministro puede convertirse
              en el origen de pérdidas de valor que rara vez son explicadas por
              los modelos tradicionales de control.

            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              El libro reúne más de treinta casos documentados y décadas de
              experiencia en operaciones para analizar situaciones que afectan
              el desempeño operacional desde una perspectiva diferente.

            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-700">

                Próximamente

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}