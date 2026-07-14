export default function OperationsInsight() {
  return (
    <section className="mt-28 rounded-3xl bg-slate-900 px-8 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          EL ENFOQUE SERVICES PROCUREMENT
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
          La mayoría de las organizaciones buscan mejorar procesos.
        </h2>

        <h3 className="mt-4 text-3xl font-light text-cyan-300">
          Nosotros analizamos las interacciones entre procesos.
        </h3>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
          Las restricciones más importantes rara vez nacen dentro de un área.
          Generalmente aparecen donde Producción, Mantenimiento,
          Planeamiento, Compras, Inventarios y Logística dejan de funcionar
          como un solo sistema.
        </p>

        {/* DIAGRAMA */}

        <div className="mt-20 rounded-3xl border border-slate-700 bg-slate-800 p-12">

          <div className="grid grid-cols-3 gap-10 text-center">

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Producción
              </h4>
            </div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Compras
              </h4>
            </div>

            <div className="rounded-3xl border-2 border-cyan-400 bg-cyan-950 p-8 shadow-xl">

              <p className="text-xs uppercase tracking-[0.30em] text-cyan-300">
                MODELO
              </p>

              <h3 className="mt-4 text-4xl font-bold">
                SP6
              </h3>

              <p className="mt-5 text-slate-300">
                Comprender las interacciones antes de intervenir.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Inventarios
              </h4>
            </div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Mantenimiento
              </h4>
            </div>

            <div></div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Planeamiento
              </h4>
            </div>

            <div></div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="font-bold text-lg">
                Logística
              </h4>
            </div>

            <div></div>

          </div>

        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-slate-300">

          No intervenimos únicamente sobre Compras, Producción o Inventarios.

          Analizamos cómo interactúan todas las áreas para identificar las
          restricciones que limitan el desempeño global del sistema.

        </p>

      </div>

    </section>
  );
}