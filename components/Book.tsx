import Image from "next/image";

export default function Book() {
  return (
    <section
      id="libro"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Portada */}

          <div className="flex justify-center">

            <Image
              src="/images/books/book-cover-v1.png"
              alt="El Fraude que la Contabilidad no Ve"
              width={520}
              height={760}
              priority
              className="h-auto w-full max-w-[300px] drop-shadow-2xl transition duration-500 hover:scale-[1.03] sm:max-w-[340px] lg:max-w-[430px]"
            />

          </div>

          {/* Contenido */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
              LIBRO
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              El Fraude que la Contabilidad no Ve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              Una investigación basada en más de treinta casos reales que
              propone una nueva forma de comprender cómo la cadena de
              suministro puede convertirse en el origen de pérdidas de valor
              que rara vez son explicadas por los modelos tradicionales de
              control.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600"></span>

                <p className="text-lg leading-8 text-slate-700">
                  <strong>Más de 30 casos reales</strong> documentados durante
                  tres décadas de experiencia profesional.
                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600"></span>

                <p className="text-lg leading-8 text-slate-700">
                  Una investigación construida desde la operación y no desde la
                  teoría.
                </p>

              </div>

              <div className="flex items-start gap-4">

                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600"></span>

                <p className="text-lg leading-8 text-slate-700">
                  Una nueva perspectiva sobre los riesgos ocultos de la cadena
                  de suministro.
                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-700 hover:shadow-xl">
                Leer un adelanto
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:border-cyan-700 hover:bg-slate-100">
                Notificarme del lanzamiento
              </button>

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Estado
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                Actualmente en proceso editorial.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}