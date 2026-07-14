export default function InventoryCTA() {
  return (
    <section className="mt-28 rounded-3xl bg-slate-100 px-8 py-20">

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          SERVICES PROCUREMENT
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
          Un inventario eficiente no es el que tiene más materiales.
        </h2>

        <h3 className="mt-4 text-2xl font-light text-slate-700">
          Es el que garantiza la continuidad de la operación con el menor capital posible.
        </h3>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Si su organización enfrenta materiales obsoletos, inventarios
          paralelos, diferencias entre SAP y el almacén físico,
          repuestos duplicados o exceso de capital inmovilizado,
          conversemos.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-700">
            Solicitar una reunión
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition hover:bg-white">
            Conocer Services Procurement
          </button>

        </div>

      </div>

    </section>
  );
}