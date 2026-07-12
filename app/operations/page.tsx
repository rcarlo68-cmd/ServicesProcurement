import Header from "../../components/Header";

export default function OperationsPage() {
  return (
    <>
      <Header />

      <main>

        <section className="mx-auto max-w-7xl px-8 py-24">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              OPERATIONS
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-slate-900">
              Cuando una operación pierde desempeño,
              la causa rara vez pertenece a una sola área.
            </h1>

            <p className="mt-10 max-w-4xl text-xl leading-9 text-slate-600">
              Ayudamos a comprender cómo la interacción entre Producción,
              Mantenimiento, Compras y Logística puede afectar el desempeño
              operacional cuando la cadena de suministro forma parte de la
              situación.
            </p>

          </div>

        </section>

      </main>

    </>
  );
}