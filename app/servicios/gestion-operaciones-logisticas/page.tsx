
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function GestionOperacionesLogisticasPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <Header variant="dark" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,.10),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-10 xl:px-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              GESTIÓN DE OPERACIONES LOGÍSTICAS
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            La dimensión gerencial del Modelo SP6.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Gobernar una operación significa entender el sistema completo,
            anticiparse a sus restricciones, gestionar las relaciones entre
            áreas y tomar decisiones que permitan sostener la operación
            cuando las condiciones cambian.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            Conversemos
          </Link>
        </div>
      </section>

      {/* NUESTRA MIRADA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              NUESTRA MIRADA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              La operación se gobierna, no solamente se ejecuta.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Una operación puede tener procesos, indicadores y
              responsabilidades definidas y aun así perder capacidad de
              respuesta cuando las condiciones cambian. Gobernarla exige
              entender cómo las decisiones de cada área afectan al sistema,
              anticipar restricciones y conducir a las personas.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Por eso trabajamos sobre cinco capacidades gerenciales:
              visión macro, anticipación, negociación con las áreas,
              liderazgo y resiliencia.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-3">
            <article>
              <div className="mb-4 h-px w-10 bg-[#D4AF37]" />
              <h3 className="text-xl font-light text-white lg:text-2xl">
                Visión macro
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Entender la operación como un sistema, no como áreas
                independientes.
              </p>
            </article>

            <article>
              <div className="mb-4 h-px w-10 bg-[#D4AF37]" />
              <h3 className="text-xl font-light text-white lg:text-2xl">
                Anticipación
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Identificar restricciones antes de que obliguen a reaccionar.
              </p>
            </article>

            <article>
              <div className="mb-4 h-px w-10 bg-[#D4AF37]" />
              <h3 className="text-xl font-light text-white lg:text-2xl">
                Negociación con las áreas
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Alinear necesidades y decisiones con los resultados de
                la operación.
              </p>
            </article>

            <article>
              <div className="mb-4 h-px w-10 bg-[#D4AF37]" />
              <h3 className="text-xl font-light text-white lg:text-2xl">
                Liderazgo
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Conducir a las personas y sostener las decisiones necesarias.
              </p>
            </article>

            <article>
              <div className="mb-4 h-px w-10 bg-[#D4AF37]" />
              <h3 className="text-xl font-light text-white lg:text-2xl">
                Resiliencia
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Encontrar alternativas cuando las condiciones normales
                dejan de funcionar.
              </p>
            </article>
          </div>

          <p className="mt-10 text-xl font-medium text-white">
            No intervenimos solamente sobre cómo funciona la operación.
            Trabajamos sobre cómo se gobierna.
          </p>
        </div>
      </section>

      {/* COMO INTERVENIMOS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CÓMO INTERVENIMOS
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Desarrollamos la capacidad de los líderes para gobernar
              la operación.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Trabajamos con los líderes sobre situaciones reales para
              fortalecer sus criterios de decisión y establecer una forma
              de gestión que la organización pueda sostener por sí misma.
            </p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-white/10 pt-8 md:grid-cols-2">
            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                01
              </span>
              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Entender
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Identificamos cómo se toman las decisiones, dónde están las
                restricciones y cómo interactúan las áreas.
              </p>
            </article>

            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                02
              </span>
              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Ordenar
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Clarificamos responsabilidades, reglas de interacción
                y criterios para decidir.
              </p>
            </article>

            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                03
              </span>
              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Acompañar y desarrollar
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Fortalecemos la capacidad de gestión trabajando sobre
                problemas y decisiones reales de la operación.
              </p>
            </article>

            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                04
              </span>
              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Transferir y empoderar
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-400">
                Transferimos criterios y herramientas para que los líderes
                gestionen y mejoren la operación con autonomía.
              </p>
            </article>
          </div>

          <p className="mt-10 text-xl font-medium text-white">
            Acompañamos para transferir, no para sustituir.
          </p>
        </div>
      </section>

      {/* BRIDGE SP6 */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              MODELO SP6
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Una necesidad de gestión puede revelar una restricción
              en otra capacidad.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cuando una dificultad de gestión está relacionada con otras
              capacidades de la cadena, el Modelo SP6 permite ampliar la
              mirada y abordar la restricción donde realmente se origina.
            </p>

            <Link
              href="/modelo-sp6"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              CONOZCA EL MODELO SP6 →
            </Link>

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-500">
              Seis capacidades. Una sola dirección: la operación.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
