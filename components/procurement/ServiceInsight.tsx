export default function ServiceInsight() {
  return (
    <section className="mt-28 rounded-3xl bg-slate-900 px-8 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          EL ENFOQUE SERVICES PROCUREMENT
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
          Los problemas importantes rara vez nacen dentro de un proceso.
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
          Generalmente aparecen donde Producción, Mantenimiento,
          Planeamiento, Inventarios, Compras y Logística dejan de
          funcionar como un sistema.
        </p>

        <div className="mt-16 rounded-3xl bg-slate-800 p-10">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-700 p-6 text-center">
              <h3 className="font-bold text-lg">
                Producción
              </h3>
            </div>

            <div className="flex items-center justify-center text-5xl text-slate-500">
              ↕
            </div>

            <div className="rounded-2xl bg-slate-700 p-6 text-center">
              <h3 className="font-bold text-lg">
                Mantenimiento
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-700 p-6 text-center">
              <h3 className="font-bold text-lg">
                Compras
              </h3>
            </div>

            <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-950 p-8 text-center shadow-xl">

              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                MODELO
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                SP6
              </h3>

              <p className="mt-4 text-slate-300">
                Comprender las interacciones antes de intervenir.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-700 p-6 text-center">
              <h3 className="font-bold text-lg">
                Inventarios
              </h3>
            </div>

            <div></div>

            <div className="flex justify-center">

              <div className="rounded-2xl bg-slate-700 px-10 py-6 text-center">

                <h3 className="font-bold text-lg">
                  Logística
                </h3>

              </div>

            </div>

            <div></div>

          </div>

        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-slate-300">

          No intervenimos únicamente sobre Compras,
          Producción o Inventarios.

          Analizamos cómo interactúan todas las áreas
          para identificar las restricciones que limitan
          el desempeño global del sistema.

        </p>

      </div>

    </section>
  );
}