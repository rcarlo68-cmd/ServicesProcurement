import Image from "next/image";

export default function Book() {
  return (
    <section id="libro" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Portada */}

          <div className="flex justify-center">

            <Image
              src="/images/book-cover-v1.png"
              alt="El Fraude que la Contabilidad no Ve"
              width={420}
              height={620}
              priority
              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] h-auto drop-shadow-2xl transition duration-500 hover:scale-[1.02]"
            />

          </div>

          {/* Contenido */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              LIBRO
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              El Fraude que la Contabilidad no Ve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 lg:text-xl lg:leading-9">
              Una investigación basada en más de treinta casos reales que
              propone una nueva forma de comprender cómo la cadena de suministro
              puede convertirse en el origen de pérdidas de valor que rara vez
              son explicadas por los modelos tradicionales de control.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-600"></span>

                <p className="text-lg text-slate-700">
                  Más de <strong>30 casos reales documentados</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-600"></span>

                <p className="text-lg text-slate-700">
                  Investigación basada en experiencia operacional.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-red-600"></span>

                <p className="text-lg text-slate-700">
                  Una nueva perspectiva sobre la cadena de suministro.
                </p>
              </div>

            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-700 hover:shadow-xl">
                Leer un adelanto
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
                Notificarme del lanzamiento
              </button>

            </div>

            <p className="mt-8 text-sm text-slate-500">
              Actualmente en proceso editorial.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}