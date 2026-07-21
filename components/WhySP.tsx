/*
----------------------------------------------------------
Services Procurement Website
Component: WhySP
Version: 1.4
Status: PRODUCTION
----------------------------------------------------------
*/

import Image from "next/image";

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
    <section
      id="why-sp"
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Imagen */}

          <div className="flex justify-center">
            <Image
              src="/images/whysp/operations-experience.png"
              alt="Operations Experience"
              width={1000}
              height={1000}
              priority
              className="w-full max-w-xl rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02] lg:max-w-2xl"
            />
          </div>

          {/* Contenido */}

          <div className="lg:pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
              ¿POR QUÉ SERVICES PROCUREMENT?
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-[2.9rem] lg:text-[3.1rem]">
              No aprendimos la operación desde una oficina.
            </h2>

            <p className="mt-5 text-2xl font-semibold text-cyan-700 md:text-3xl">
              La aprendimos viviéndola.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
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
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-cyan-600" />

                  <p className="text-lg leading-8 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-14 text-center md:mt-24 md:px-12 md:py-16">
          <p className="text-xl text-slate-300 md:text-2xl">
            La experiencia genera conocimiento.
          </p>

          <h3 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            El conocimiento genera mejores decisiones.
          </h3>
        </div>
      </div>
    </section>
  );
}