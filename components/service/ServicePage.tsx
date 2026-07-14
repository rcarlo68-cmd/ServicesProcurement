import ServiceInsight from "./ServiceInsight";

type ServicePageProps = {
  title: string;
  subtitle: string;
};

export default function ServicePage({
  title,
  subtitle,
}: ServicePageProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">

      {/* HERO */}

      <section className="rounded-3xl bg-slate-900 px-6 py-12 text-white lg:px-12 lg:py-20">

        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
          SERVICES PROCUREMENT
        </p>

        <h1 className="mt-6 text-4xl font-bold lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
          {subtitle}
        </p>

        <p className="mt-8 max-w-3xl leading-8 text-slate-300">
          Comprender cómo interactúan Producción, Mantenimiento,
          Planeamiento, Inventarios y Compras permite eliminar
          restricciones y mejorar el desempeño operacional.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
            Hablemos
          </button>

          <button className="rounded-xl border border-white px-6 py-3 font-semibold">
            Conozca el Modelo SP6
          </button>

        </div>

      </section>

      {/* RESTRICCIONES */}

      <section className="mt-24">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            LA REALIDAD OPERACIONAL
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Las restricciones que limitan el desempeño
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Las organizaciones rara vez tienen un solo problema.
            Generalmente varias restricciones interactúan entre sí.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            ["Paradas no programadas","La producción se detiene por falta de coordinación."],
            ["Cuellos de botella","Algunos procesos limitan el rendimiento de toda la operación."],
            ["Retrabajos","Las actividades deben repetirse por errores de planificación."],
            ["Falta de sincronización","Las áreas trabajan con prioridades diferentes."],
            ["Baja utilización de recursos","Equipos y materiales permanecen sin generar valor."],
            ["Decisiones reactivas","La urgencia reemplaza a la planificación."],
          ].map(([title,text]) => (

            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* MODELO */}

      <section className="mt-28">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            MODELO SP6
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Cómo intervenimos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comprendemos primero las interacciones antes de proponer soluciones.
          </p>

        </div>

      </section>

      <ServiceInsight />

      {/* ÁREAS */}

      <section className="mt-28">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            ÁREAS DE INTERVENCIÓN
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Dónde generamos impacto
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {[
            "Producción",
            "Mantenimiento",
            "Planeamiento",
            "Inventarios",
            "Compras",
            "Logística",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition hover:shadow-lg"
            >

              <h3 className="text-xl font-semibold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mt-28 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white">

        <h2 className="text-4xl font-bold">
          ¿Conversemos?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Descubra cómo una visión sistémica puede mejorar el desempeño de su organización.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900">
          Solicitar una reunión
        </button>

      </section>

    </main>
  );
}