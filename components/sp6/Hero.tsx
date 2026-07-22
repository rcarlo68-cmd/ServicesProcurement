import Link from "next/link";

import { hero } from "@/data/sp6";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.03),_transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.4fr_420px] lg:items-center lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.30em] text-slate-600">
            METODOLOGÍA PROPIETARIA
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-light leading-relaxed text-slate-700">
            {hero.subtitle}
          </p>

          <div className="mt-10 h-px w-28 bg-slate-300" />

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-600">
            {hero.description}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#methodology"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800"
            >
              Explorar la metodología
            </Link>

            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50"
            >
              Solicitar una reunión
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-slate-500">
            MODELO SP6
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Una metodología para fortalecer la cadena de suministro.
          </h2>

          <div className="mt-10 space-y-8">
            <div className="border-l-2 border-slate-300 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                Enfoque
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Comprender la cadena de suministro como un sistema integrado,
                donde cada capacidad influye en el desempeño global.
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                Fundamentado en
              </p>

              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Experiencia operacional.</li>
                <li>Conocimiento aplicado.</li>
                <li>Análisis técnico.</li>
                <li>Mejora continua.</li>
              </ul>
            </div>

            <div className="border-l-2 border-slate-300 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-500">
                Propósito
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Desarrollar organizaciones más resilientes, eficientes y
                preparadas para enfrentar los desafíos de una cadena de
                suministro moderna.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}