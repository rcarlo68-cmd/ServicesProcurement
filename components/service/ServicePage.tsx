type ServicePageProps = {
  title: string;
  subtitle: string;
};

export default function ServicePage({
  title,
  subtitle,
}: ServicePageProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">

      {/* HERO */}

      <section className="overflow-hidden rounded-3xl bg-slate-900 text-white">

        <div className="mx-auto max-w-6xl px-8 py-16 lg:px-14 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            SERVICES PROCUREMENT
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-6xl">
            {title}
          </h1>

          <div className="mt-10 max-w-4xl space-y-6">

            <p className="text-xl leading-9 text-slate-200">
              {subtitle}
            </p>

            <p className="text-lg leading-8 text-slate-300">
              Comprender cómo interactúan Producción, Mantenimiento,
              Planeamiento, Inventarios y Compras permite reducir urgencias,
              mejorar la disponibilidad y fortalecer el desempeño de toda la
              cadena de suministro.
            </p>

          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
              Hablemos
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900">
              Conozca el Modelo SP6
            </button>

          </div>

        </div>

      </section>

      {/* PROBLEMAS */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            LA REALIDAD OPERACIONAL
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Lo que normalmente encontramos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Estas situaciones rara vez aparecen aisladas. Generalmente forman
            parte del mismo problema.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Compras urgentes permanentes",
              text: "La urgencia deja de ser la excepción y termina convirtiéndose en la forma habitual de operar.",
            },
            {
              title: "Inventarios elevados",
              text: "El inventario crece mientras continúan faltando materiales críticos.",
            },
            {
              title: "Proveedores reactivos",
              text: "Los proveedores terminan compensando deficiencias de planificación.",
            },
            {
              title: "Compras resolviendo problemas",
              text: "Las órdenes de compra terminan solucionando situaciones originadas mucho antes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* METODOLOGÍA */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            MODELO SP6
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Antes de proponer soluciones
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comprendemos cómo interactúan las diferentes áreas que participan en
            la cadena de suministro.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 xl:grid-cols-5">

          {[
            "Diagnóstico",
            "Interacciones",
            "Análisis",
            "Implementación",
            "Mejora Continua",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl font-bold text-slate-900">
                {index + 1}
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* CAPACIDADES */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            CAPACIDADES
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Cómo podemos aportar valor
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Strategic Sourcing",
              text: "Estrategias alineadas con la operación.",
            },
            {
              title: "Category Management",
              text: "Gestión integral por categorías.",
            },
            {
              title: "Supplier Management",
              text: "Desarrollo y evaluación de proveedores.",
            },
            {
              title: "Gestión Contractual",
              text: "Contratos orientados al desempeño.",
            },
            {
              title: "Spend Analysis",
              text: "Comprender antes de reducir costos.",
            },
            {
              title: "CAPEX y OPEX",
              text: "Abastecimiento para proyectos y operación.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-slate-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* RESULTADOS */}

      <section className="mt-24">

        <div className="rounded-3xl bg-slate-100 p-10">

          <h2 className="text-3xl font-bold text-slate-900">
            Resultados esperados
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Menos urgencias",
              "Mayor disponibilidad",
              "Mejor coordinación",
              "Mayor visibilidad",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-6 text-center font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white">

        <h2 className="text-4xl font-bold">
          ¿Conversemos?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Descubra cómo una visión integrada de la cadena de suministro puede
          mejorar el desempeño de su organización.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
          Solicitar una reunión
        </button>

      </section>

    </main>
  );
}