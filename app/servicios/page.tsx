import Header from "@/components/layout/Header";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Procurement",
    description:
      "Fortalecemos la capacidad de Procurement para conectar las necesidades reales de la operación con el abastecimiento, los proveedores y las decisiones de compra.",
    href: "/servicios/procurement",
  },
  {
    number: "02",
    title: "Almacenes e Inventarios",
    description:
      "Convertimos la gestión de inventarios y almacenes en una capacidad que sostiene la disponibilidad, la trazabilidad y la continuidad de la operación.",
    href: "/servicios/almacenes-inventarios",
  },
  {
    number: "03",
    title: "Gestión de Operaciones Logísticas",
    description:
      "Desarrollamos en los líderes la capacidad de gobernar, decidir y mejorar la operación logística de manera sostenible.",
    href: "/servicios/gestion-operaciones-logisticas",
  },
  {
    number: "04",
    title: "Auditoría Logística",
    description:
      "Identificamos brechas, riesgos y desviaciones para comprender qué está ocurriendo realmente y orientar las acciones de mejora.",
    href: "/servicios/auditoria-logistica",
  },
  {
    number: "05",
    title: "Talento",
    description:
      "Desarrollamos las capacidades que las personas necesitan para gestionar, tomar decisiones y sostener el desempeño de la operación.",
    href: "/servicios/talento",
  },
  {
    number: "06",
    title: "Tecnología",
    description:
      "Evaluamos las necesidades reales de la operación para determinar cómo la tecnología puede aportar información, integración y capacidad de decisión.",
    href: "/servicios/tecnologia",
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <Header variant="dark" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,.10),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 xl:px-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              SERVICIOS
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            Seis capacidades.
            <br />
            Una sola dirección:
            <br />
            la operación.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Intervenimos desde necesidades específicas de la operación y
            ampliamos la mirada cuando el diagnóstico muestra que la
            restricción atraviesa distintas capacidades de la cadena.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-[#080B10] p-8 transition-colors duration-300 hover:bg-[#0D1118] lg:p-10"
            >
              <div className="mb-12">
  <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
    {service.number}
  </span>
</div>

              <h2 className="min-h-[5rem] max-w-xl text-3xl font-light tracking-[-0.02em] lg:text-4xl">
  {service.title}
</h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37] transition-all duration-300 hover:gap-5"
              >
                Conocer servicio
              </Link>
            </article>
          ))}
        </div>
      </section>

      
      
      
            {/* DESARROLLO PROFESIONAL */}
      <section id="desarrollo-profesional" className="border-t border-white/10 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="mb-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                DESARROLLO PROFESIONAL
              </span>
            </div>

            <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
              Fortalece tus capacidades en Logística y Supply Chain.
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-400 md:text-lg">
              Mentoría, coaching, capacitación y preparación profesional
              conectados con los desafíos reales de Logística y Supply Chain.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* 01 — MENTORÍA LOGÍSTICA */}
            <article className="flex flex-col">
              <img
                src="/images/desarrollo-profesional/mentoria-logistica.png"
                alt="Dos profesionales conversando sobre logística en una operación minera"
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="mt-5 flex flex-1 flex-col border-t border-white/10 pt-6">
                <h3 className="text-xl font-light text-white">
                  Mentoría Logística
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Analiza desafíos concretos de tu trabajo con el aporte de
                  experiencia operativa.
                </p>

                <Link
                  href="/servicios/mentoria-logistica"
                  className="mt-auto inline-flex items-center pt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </article>

            {/* 02 — COACHING LOGÍSTICO */}
            <article className="flex flex-col">
              <img
                src="/images/desarrollo-profesional/coaching-logistico.png"
                alt="Profesional reflexionando frente a una operación minera"
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="mt-5 flex flex-1 flex-col border-t border-white/10 pt-6">
                <h3 className="text-xl font-light text-white">
                  Coaching Logístico
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Desarrolla tus habilidades para afrontar desafíos y crecer
                  profesionalmente.
                </p>

                <Link
                  href="/servicios/coaching-logistico"
                  className="mt-auto inline-flex items-center pt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </article>

            {/* 03 — CAPACITACIÓN Y SEMINARIOS */}
            <article className="flex flex-col">
              <img
                src="/images/desarrollo-profesional/capacitacion-seminarios.png"
                alt="Instructor explicando un proceso logístico a un grupo de profesionales"
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="mt-5 flex flex-1 flex-col border-t border-white/10 pt-6">
                <h3 className="text-xl font-light text-white">
                  Capacitación y Seminarios
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Amplía tus conocimientos con formación conectada con la
                  realidad de la operación.
                </p>

                <Link
                  href="/servicios/capacitacion-seminarios"
                  className="mt-auto inline-flex items-center pt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </article>

            {/* 04 — ASESORÍA PARA ENTREVISTAS */}
            <article className="flex flex-col">
              <img
                src="/images/desarrollo-profesional/asesoria-entrevistas.png"
                alt="Profesional de logística preparándose para una entrevista laboral"
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="mt-5 flex flex-1 flex-col border-t border-white/10 pt-6">
                <h3 className="text-xl font-light text-white">
                  Asesoría para entrevistas
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Practica preguntas técnicas y situaciones de logística para
                  sustentar tu experiencia y tu criterio profesional.
                </p>

                <Link
                  href="/servicios/asesoria-entrevistas"
                  className="mt-auto inline-flex items-center pt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>




      {/* SP6 Bridge */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              MODELO SP6
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Una necesidad específica puede ser el punto de partida para una
              mirada integral.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Las seis capacidades forman parte de un mismo modelo de
              intervención. Cuando una restricción atraviesa distintas áreas,
              ampliamos la mirada para entender y resolver el problema donde
              realmente se genera.
            </p>

            <Link
              href="/modelo-sp6"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              Conozca el Modelo SP6
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}