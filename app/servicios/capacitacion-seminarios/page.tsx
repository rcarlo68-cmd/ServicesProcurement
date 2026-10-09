import Header from "@/components/layout/Header";

const contactoUrl = "/contacto";

const topics = [
  {
    number: "01",
    title: "Gestión de almacenes",
    description:
      "Comprende cómo organizar y gestionar un almacén para mejorar el control de los materiales, sus movimientos y su disponibilidad para la operación.",
  },
  {
    number: "02",
    title: "Compras y Procurement",
    description:
      "Explora cómo se generan los requerimientos, cómo se gestionan las compras y qué debe ocurrir para que los materiales estén disponibles cuando la operación los necesita.",
  },
  {
    number: "03",
    title: "Gestión de inventarios",
    description:
      "Profundiza en el control de existencias, los parámetros de abastecimiento, la exactitud del inventario y su relación con las necesidades de la operación.",
  },
  {
    number: "04",
    title: "Fraude Operativo",
    description:
      "Analiza cómo pueden materializarse los fraudes dentro de los procesos operativos, qué vulnerabilidades pueden aprovecharse y cómo reconocer señales de alerta.",
  },
];

export default function CapacitacionSeminariosPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <Header variant="dark" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(212,175,55,0.10),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#D4AF37]">
            CAPACITACIÓN Y SEMINARIOS
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,5vw,5rem)] font-light leading-[1.04] tracking-[-0.045em]">
            Aprender logística
            <br />
            <span className="text-[#D4AF37]">
              desde la realidad de la operación.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
            Conocimientos aplicables, situaciones reales y experiencia práctica
            para comprender los desafíos de Logística y Supply Chain y
            desarrollar criterios que puedas llevar a tu trabajo.
          </p>

          <a
            href={contactoUrl}
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            SOLICITAR INFORMACIÓN
          </a>

          <p className="mt-5 text-sm text-slate-500">
            Modalidad virtual · Presencial a solicitud de empresas
          </p>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            NUESTRO ENFOQUE
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            La logística se comprende mejor cuando se conecta con la realidad.
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-400 md:text-lg">
            <p>
              Los conceptos y procedimientos son necesarios, pero los desafíos
              del trabajo cotidiano exigen comprender cómo funcionan realmente
              los procesos, dónde aparecen las dificultades y qué decisiones
              pueden cambiar un resultado.
            </p>

            <p>
              Por eso, nuestras capacitaciones y seminarios parten de la
              experiencia en Logística y Supply Chain. Buscamos conectar los
              conocimientos con situaciones concretas para que cada participante
              pueda analizar problemas y ampliar sus criterios de actuación.
            </p>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            TEMAS DE CAPACITACIÓN
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Cuatro líneas para comenzar.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Estamos desarrollando nuestra oferta inicial alrededor de temas
            esenciales de la gestión logística y de situaciones que requieren
            una mirada más profunda sobre los procesos.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.number}
                className="border-t border-white/10 py-8 md:pr-10"
              >
                <p className="text-sm font-medium tracking-[0.15em] text-[#D4AF37]">
                  {topic.number}
                </p>

                <h3 className="mt-4 text-xl font-medium text-white">
                  {topic.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDAD */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            MODALIDAD
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Formación accesible, conectada con tu realidad profesional.
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-400 md:text-lg">
            <p>
              Las capacitaciones y seminarios se desarrollan habitualmente en
              modalidad virtual, para facilitar la participación de profesionales
              interesados en fortalecer sus conocimientos desde distintos lugares.
            </p>

            <p>
              Si una empresa necesita trabajar presencialmente con sus equipos,
              podemos conversar sobre esa posibilidad y evaluar el requerimiento.
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            SOLICITAR INFORMACIÓN
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
            ¿Qué capacitación necesitas?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Cuéntanos qué tema te interesa, qué necesitas aprender o qué desafío
            quieres abordar con tu equipo. Te brindaremos información sobre las
            alternativas de capacitación y seminarios disponibles.
          </p>

          <a
            href={contactoUrl}
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            SOLICITAR INFORMACIÓN
          </a>

          <p className="mt-8 text-sm text-slate-500">
            Services Procurement · Capacitación y Seminarios
          </p>
        </div>
      </section>
    </main>
  );
}