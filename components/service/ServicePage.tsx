type ServicePageProps = {
  title: string;
  subtitle: string;
};

export default function ServicePage({
  title,
  subtitle,
}: ServicePageProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:max-w-7xl lg:px-8 lg:py-20">

      {/* HERO */}

      <section className="rounded-3xl bg-slate-900 px-6 py-12 text-white lg:px-12 lg:py-20">

        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
          SERVICES PROCUREMENT
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 lg:text-xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Hablemos
          </button>

          <button className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
            Conozca el Modelo SP6
          </button>
        </div>

      </section>

      {/* PROBLEMAS */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            DESAFÍOS OPERATIVOS
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Problemas que resolvemos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Ayudamos a las organizaciones a identificar y eliminar las causas
            que limitan el desempeño de la cadena de suministro.
          </p>

        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              Compras urgentes
            </h3>

            <p className="mt-3 text-slate-600">
              Reducimos la dependencia de adquisiciones no planificadas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              Sobreinventarios
            </h3>

            <p className="mt-3 text-slate-600">
              Liberamos capital inmovilizado y mejoramos la rotación.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              Roturas de stock
            </h3>

            <p className="mt-3 text-slate-600">
              Incrementamos la disponibilidad de materiales críticos.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold">
              Baja disponibilidad
            </h3>

            <p className="mt-3 text-slate-600">
              Fortalecemos la planificación y la coordinación operativa.
            </p>
          </div>

        </div>

      </section>
            {/* METODOLOGÍA */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            METODOLOGÍA SP6
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Cómo trabajamos
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-5">

          {[
            "Diagnóstico",
            "Análisis",
            "Diseño",
            "Implementación",
            "Mejora Continua",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl font-bold text-slate-900">
                {index + 1}
              </div>

              <h3 className="mt-4 font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* SERVICIOS */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            SERVICIOS
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Capacidades de Procurement
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            "Strategic Sourcing",
            "Category Management",
            "Supplier Relationship Management",
            "Gestión Contractual",
            "Spend Analysis",
            "Compras CAPEX y OPEX",
          ].map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-slate-200 p-8 transition hover:border-slate-900"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white">

        <h2 className="text-3xl font-bold">
          ¿Conversemos?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Descubra cómo Services Procurement puede ayudar a mejorar el desempeño
          de su cadena de suministro.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
          Solicitar una reunión
        </button>

      </section>

    </main>
  );
}