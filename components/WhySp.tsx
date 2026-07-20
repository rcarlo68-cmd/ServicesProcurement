/*
----------------------------------------------------------
Services Procurement Website
Component: WhySP
Version: 1.0
Status: APPROVED
----------------------------------------------------------
*/

const experience = [
  "30 años de experiencia en operaciones y cadena de suministro.",
  "Experiencia en minería, industria y transformación organizacional.",
  "Especialistas en Procurement, Inventarios y Almacenes.",
  "Implementación de metodologías propias como SP6.",
  "Aplicación de Inteligencia Artificial a la gestión logística.",
  "Autor del libro «El Fraude que la Contabilidad no Ve».",
];

export default function WhySP() {
  return (
    <section id="why-sp" className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Imagen */}

          <div>

            <img
              src="/images/about/about-founder.png"
              alt="Services Procurement"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

          </div>

          {/* Contenido */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
              ¿POR QUÉ SERVICES PROCUREMENT?
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
              No aprendimos la operación desde una oficina.
            </h2>

            <p className="mt-4 text-3xl font-semibold text-cyan-700">
              La aprendimos viviéndola.
            </p>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Durante tres décadas participamos directamente en operaciones
              mineras e industriales donde la continuidad operacional dependía
              de que la cadena de suministro funcionara correctamente.
            </p>

            <div className="mt-10 space-y-5">

              {experience.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <div className="mt-2 h-3 w-3 rounded-full bg-cyan-600"></div>

                  <p className="text-lg leading-8 text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-24 rounded-3xl bg-slate-900 px-12 py-16 text-center">

          <p className="text-2xl text-slate-300">
            La experiencia genera conocimiento.
          </p>

          <h3 className="mt-5 text-5xl font-bold leading-tight text-white">
            El conocimiento genera mejores decisiones.
          </h3>

        </div>

      </div>

    </section>
  );
}