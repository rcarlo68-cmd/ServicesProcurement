export default function InventoryInsight() {
  return (
    <section className="mt-28 rounded-3xl bg-slate-900 px-8 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          EL ENFOQUE SERVICES PROCUREMENT
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
          Un almacén no crea valor por la cantidad de materiales que almacena.
        </h2>

        <h3 className="mt-4 text-3xl font-light text-cyan-300">
          Crea valor cuando garantiza la continuidad de la operación.
        </h3>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
          La disponibilidad operacional depende de la interacción entre
          Planeamiento, Compras, Almacenes, Mantenimiento y Producción.
          Cuando una de estas áreas falla, el inventario deja de ser una
          solución y se convierte en una restricción.
        </p>

        {/* DIAGRAMA */}

        <div className="mt-20 rounded-3xl border border-slate-700 bg-slate-800 p-12">

          <div className="grid grid-cols-3 gap-10 text-center">

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="text-lg font-bold">
                Planeamiento
              </h4>
            </div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="text-lg font-bold">
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
                Inventarios como parte del sistema, no como un área aislada.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="text-lg font-bold">
                Producción
              </h4>
            </div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="text-lg font-bold">
                Mantenimiento
              </h4>
            </div>

            <div></div>

            <div></div>

            <div className="rounded-2xl bg-slate-700 p-6">
              <h4 className="text-lg font-bold">
                Almacenes
              </h4>
            </div>

            <div></div>

          </div>

        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-slate-300">

          La mayoría de los problemas de inventario no se solucionan comprando
          más materiales. Se solucionan mejorando la coordinación entre las
          áreas que planifican, consumen, abastecen y controlan los recursos.

        </p>

      </div>

    </section>
  );
}