export default function Hero() {
  return (
    <section className="bg-slate-950">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 py-16 lg:grid-cols-2">

        {/* TEXTO */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            SERVICES PROCUREMENT
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white lg:text-5xl">
            La mayoría de las pérdidas operacionales
            <br />
            no ocurren donde usted las está buscando.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            Analizamos cómo interactúan Producción, Mantenimiento,
            Planeamiento, Compras, Inventarios y Logística para descubrir
            las restricciones que limitan el desempeño de su operación.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="#contacto"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
            >
              Hablemos
            </a>

            <a
              href="#sp6"
              className="rounded-xl border border-slate-500 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-300"
            >
              Conozca el Modelo SP6
            </a>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                +30
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Minería
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Energía · Manufactura
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Supply Chain
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Procurement · Operaciones
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                IA
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Inteligencia aplicada
              </p>
            </div>

          </div>

        </div>

        {/* MOSAICO */}

        <div className="grid grid-cols-2 gap-4">

          <div className="col-span-2 h-80 overflow-hidden rounded-3xl bg-slate-800 shadow-2xl">
            <img
              src="/images/hero/operations-hero.png"
              alt="Operaciones"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-40 overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="/images/hero/maintenance.png"
              alt="Mantenimiento"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-40 overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="/images/hero/warehouse.png"
              alt="Almacenes"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-40 overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="/images/hero/planning.png"
              alt="Planeamiento"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-40 overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="/images/hero/procurement.png"
              alt="Procurement"
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}