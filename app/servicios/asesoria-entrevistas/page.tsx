import Header from "@/components/layout/Header";

export default function AsesoriaEntrevistasPage() {
  const contactoUrl = "/contacto";

  const topics = [
    {
      number: "01",
      title: "Preguntas técnicas",
      description:
        "Prepara cómo explicar tus conocimientos y experiencia en logística y Supply Chain ante preguntas propias de tu especialidad.",
    },
    {
      number: "02",
      title: "Situaciones prácticas",
      description:
        "Analiza escenarios relacionados con la operación logística y desarrolla respuestas que reflejen tu criterio profesional.",
    },
    {
      number: "03",
      title: "Cómo sustentar tus decisiones",
      description:
        "Practica cómo explicar tu razonamiento, las alternativas que considerarías y las decisiones que tomarías ante un problema.",
    },
    {
      number: "04",
      title: "Tu experiencia profesional",
      description:
        "Organiza la forma de presentar tu trayectoria y relaciona tus experiencias con las exigencias del puesto al que postulas.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <Header variant="dark" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(212,175,55,0.10),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.24em] text-[#D4AF37]">
            ASESORÍA PARA ENTREVISTAS
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,5vw,5rem)] font-light leading-[1.04] tracking-[-0.045em]">
            No basta con conocer la logística.
            <br />
            <span className="text-[#D4AF37]">
              Tienes que demostrarlo en la entrevista.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl md:leading-9">
            Prepárate para responder preguntas técnicas, analizar situaciones
            prácticas y explicar cómo aplicas tu experiencia y tu criterio
            profesional en Logística y Supply Chain.
          </p>

          <a
            href={contactoUrl}
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            CONVERSEMOS
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold tracking-wide text-[#D4AF37]">
              2 sesiones de 50 minutos
            </span>
            <span className="text-sm text-slate-500">
              Modalidad 100 % virtual
            </span>
          </div>
        </div>
      </section>

      {/* EL DESAFÍO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
              EL DESAFÍO
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
              Una entrevista también pone a prueba tu criterio.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400 md:text-lg">
              <p>
                Conocer los procesos, dominar herramientas y tener experiencia
                en logística son ventajas importantes. Pero durante una
                entrevista también necesitas explicar cómo analizas un
                problema, qué factores consideras y por qué tomarías una
                determinada decisión.
              </p>

              <p>
                Una pregunta técnica o un caso práctico puede exigir mucho más
                que una definición aprendida. Necesitas ordenar tus ideas,
                relacionar tus conocimientos con la situación planteada y
                sustentar tu respuesta con claridad.
              </p>
            </div>

            <div className="mt-10 max-w-4xl border-l-2 border-[#D4AF37] pl-6">
              <p className="text-xl font-light leading-8 text-white md:text-2xl">
                La preparación consiste en practicar cómo razonas, cómo
                respondes y cómo sustentas lo que sabes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ TRABAJAMOS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            QUÉ TRABAJAMOS
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Prepárate para las preguntas y los casos que puedes encontrar.
          </h2>

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

      {/* CÓMO FUNCIONA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
            CÓMO FUNCIONA
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Dos sesiones para preparar tu entrevista.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            <article className="border-t border-white/10 py-8 md:pr-10">
              <p className="text-sm font-medium tracking-[0.15em] text-[#D4AF37]">
                01
              </p>

              <h3 className="mt-4 text-xl font-medium text-white">
                Primera sesión
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Identificamos el puesto al que postulas, revisamos tus
                principales desafíos y trabajamos sobre las preguntas y
                situaciones que necesitas preparar.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pl-10">
              <p className="text-sm font-medium tracking-[0.15em] text-[#D4AF37]">
                02
              </p>

              <h3 className="mt-4 text-xl font-medium text-white">
                Segunda sesión
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Practicamos respuestas, analizamos casos y revisamos cómo
                sustentar tus decisiones para que puedas afrontar la entrevista
                con mayor preparación y claridad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
              EXPERIENCIA EN EL SECTOR
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
              Prepárate con alguien que conoce la realidad de la operación.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400 md:text-lg">
              <p>
                Soy Ricardo Cabrera Casas. Durante 30 años de trayectoria
                profesional he trabajado en Logística y Supply Chain, en
                operaciones mineras y en entornos que exigen criterio,
                conocimiento técnico y capacidad para decidir.
              </p>

              <p>
                La asesoría se apoya en esa experiencia para trabajar sobre
                preguntas y situaciones vinculadas con la realidad logística,
                no solamente sobre respuestas teóricas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDAD */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
              MODALIDAD
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
              Una preparación concreta para tu próximo proceso de selección.
            </h2>

            <div className="mt-8 space-y-4 text-lg leading-8 text-slate-400">
              <p>Modalidad: 100 % virtual.</p>
              <p>Duración: 2 sesiones de 50 minutos cada una.</p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-slate-400">
              La preparación se adapta al puesto al que postulas y a los
              aspectos que necesitas reforzar. El objetivo es que llegues
              mejor preparado, puedas explicar tu experiencia y sustentes tus
              respuestas con mayor claridad.
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
            Tu experiencia merece una buena preparación.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Cuéntame sobre el puesto al que postulas y qué necesitas preparar.
            Conversaremos sobre cómo trabajar tus preguntas técnicas y
            situaciones prácticas para afrontar el proceso de selección con
            mayor claridad.
          </p>

          <a
            href={contactoUrl}
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            CONVERSEMOS
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>

          <p className="mt-8 text-sm text-slate-500">
            Services Procurement · Asesoría para entrevistas
          </p>
        </div>
      </section>
    </main>
  );
}