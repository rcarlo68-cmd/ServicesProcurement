import Header from "@/components/layout/Header";

const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado/a en el Coaching Logístico de Services Procurement. Me gustaría conversar sobre el proceso."
);

const whatsappUrl = `https://wa.me/51953449850?text=${whatsappMessage}`;

const capabilities = [
  {
    number: "01",
    title: "Visión sistémica",
    description:
      "Comprender cómo se relacionan las decisiones de Supply con las necesidades y prioridades del negocio.",
  },
  {
    number: "02",
    title: "Criterio para decidir",
    description:
      "Evaluar alternativas, consecuencias y prioridades para tomar decisiones con fundamento.",
  },
  {
    number: "03",
    title: "Influencia y negociación",
    description:
      "Construir acuerdos, gestionar diferencias y defender una posición profesional sin convertir cada desacuerdo en una confrontación.",
  },
  {
    number: "04",
    title: "Dirección de personas",
    description:
      "Delegar, desarrollar al equipo y sostener responsabilidades sin concentrar cada decisión en el líder.",
  },
  {
    number: "05",
    title: "Liderazgo bajo presión",
    description:
      "Mantener claridad, criterio y capacidad de respuesta en situaciones exigentes.",
  },
];

const process = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Exploramos tu experiencia, tus objetivos profesionales y los desafíos que afrontas en tu posición actual o en la que te preparas para asumir.",
  },
  {
    number: "02",
    title: "Objetivos de desarrollo",
    description:
      "Definimos contigo las capacidades y los cambios que tienen sentido para tu contexto y tu momento profesional.",
  },
  {
    number: "03",
    title: "Trabajo sobre situaciones reales",
    description:
      "Examinamos decisiones, relaciones y desafíos concretos para explorar alternativas y desarrollar tu manera de actuar.",
  },
  {
    number: "04",
    title: "Seguimiento del desarrollo",
    description:
      "Revisamos los avances y ajustamos el trabajo según tu evolución y las necesidades que vayan surgiendo.",
  },
];

export default function CoachingLogisticoPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <Header variant="dark" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(212,175,55,0.10),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#D4AF37]">
            COACHING LOGÍSTICO
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,5vw,5rem)] font-light leading-[1.04] tracking-[-0.045em]">
            Potencia tu liderazgo.
            <br />
            <span className="text-[#D4AF37]">
              Amplía tus posibilidades profesionales.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
            Reconoce tus fortalezas, desarrolla tu criterio y fortalece tu
            capacidad para tomar decisiones, influir y asumir nuevos desafíos
            en tu carrera en Supply Chain.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            CONVERSEMOS
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
  <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold tracking-wide text-[#D4AF37]">
    Primera sesión introductoria GRATUITA
  </span>
  <span className="text-sm text-slate-500">Modalidad virtual</span>
</div>


        </div>
      </section>

      {/* LA REALIDAD DEL LIDERAZGO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            LA REALIDAD DEL LIDERAZGO
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Liderar en minería exige mucho más que conocer la operación.
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-400 md:text-lg">
            <p>
              La presión por cumplir los objetivos de producción, las decisiones
              que no pueden esperar y las exigencias de distintos niveles
              jerárquicos forman parte de la realidad cotidiana. También hay
              jefes exigentes, prioridades que compiten entre sí y situaciones
              en las que necesitas sostener una posición profesional frente a
              personas con mayor autoridad formal.
            </p>

            <p>
              En ese entorno, desarrollar tu liderazgo significa reconocer el
              valor de tu criterio, expresar tus argumentos con claridad,
              defender tus decisiones con fundamento y gestionar las diferencias
              sin perder de vista los objetivos de la organización.
            </p>
          </div>

          <div className="mt-10 max-w-4xl border-l-2 border-[#D4AF37] pl-6">
            <p className="text-xl font-light leading-8 text-white md:text-2xl">
              Desarrollar la seguridad para defender tu posición sin imponerla,
              influir sin confrontar y construir acuerdos sin renunciar a tu
              criterio profesional.
            </p>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            TU DESARROLLO PROFESIONAL
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Fortalece las capacidades que acompañan tu crecimiento.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Cada proceso parte de tu experiencia, tus objetivos y los desafíos
            de tu entorno. El trabajo se adapta a lo que necesitas desarrollar
            para avanzar profesionalmente.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="border-t border-white/10 py-8 md:pr-10"
              >
                <p className="text-sm font-medium tracking-[0.15em] text-[#D4AF37]">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            CÓMO FUNCIONA
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Un proceso construido alrededor de ti.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            No todos los profesionales tienen los mismos objetivos ni enfrentan
            los mismos desafíos. Por eso, el proceso se construye de manera
            individual: los objetivos, el trabajo y su duración dependen de tu
            contexto y de tu evolución.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            {process.map((item) => (
              <article
                key={item.number}
                className="border-t border-white/10 py-8 md:pr-10"
              >
                <p className="text-sm font-medium tracking-[0.15em] text-[#D4AF37]">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            EXPERIENCIA EN EL SECTOR
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Conocer la operación también ayuda a comprender sus desafíos de
            liderazgo.
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-slate-400 md:text-lg">
            <p>
              Soy Ricardo Cabrera Casas. Durante 30 años de trayectoria
              profesional he trabajado en Logística y Supply Chain, viviendo de
              cerca los desafíos de las operaciones mineras y las decisiones
              que deben tomarse en entornos exigentes.
            </p>

            <p>
              También he formado a más de 100 ejecutivos que hoy se desempeñan
              en empresas líderes. Esa experiencia aporta contexto al proceso:
              permite trabajar sobre los desafíos reales del profesional, sin
              separar su desarrollo de las responsabilidades que enfrenta en
              la organización.
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            EMPECEMOS POR UNA CONVERSACIÓN
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
            Tu próximo paso profesional también se desarrolla.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
  Conversemos sobre tus objetivos, los desafíos que enfrentas y lo que buscas
  desarrollar. Exploremos si el Coaching Logístico responde a lo que necesitas
  y cómo podría acompañarte en tu desarrollo profesional.
</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            CONVERSEMOS
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>

          <p className="mt-8 text-sm text-slate-500">
            Services Procurement · Coaching Logístico
          </p>
        </div>
      </section>
    </main>
  );
}