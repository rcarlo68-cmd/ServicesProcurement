
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function AuditoriaLogisticaPage() {
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
              AUDITORÍA LOGÍSTICA
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            ¿Para qué hacer una auditoría logística?
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Para que los problemas que hoy todavía pueden corregirse no se
            conviertan mañana en sorpresas para la operación.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            Conversemos
          </Link>
        </div>
      </section>

      {/* REALIDAD OPERACIONAL + NUESTRA MIRADA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              NUESTRA MIRADA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              El problema puede existir mucho antes de que alguien lo detecte.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Puede haber diferencias entre el proceso diseñado y el que
              realmente se ejecuta, controles que no acompañan la operación o
              riesgos que todavía no han producido una pérdida visible. Cuando
              aparecen las consecuencias, la desviación puede llevar tiempo
              creciendo.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Por eso, auditamos contrastando los procesos, las
              responsabilidades, los controles y las evidencias con lo que
              ocurre realmente. El objetivo es identificar brechas, comprender
              los riesgos y ayudar a la organización a actuar antes de que el
              problema escale.
            </p>

            <p className="mt-8 text-xl font-medium text-white">
              Una buena auditoría no debería llegar después de la sorpresa.
              Debería ayudar a evitarla.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-[#080B10] p-6 lg:p-8">
              <div className="mb-5 h-px w-10 bg-[#D4AF37]" />
              <p className="text-lg font-light text-white lg:text-xl">
                Brechas entre lo diseñado y lo ejecutado
              </p>
            </div>

            <div className="bg-[#080B10] p-6 lg:p-8">
              <div className="mb-5 h-px w-10 bg-[#D4AF37]" />
              <p className="text-lg font-light text-white lg:text-xl">
                Controles que no funcionan como deberían
              </p>
            </div>

            <div className="bg-[#080B10] p-6 lg:p-8">
              <div className="mb-5 h-px w-10 bg-[#D4AF37]" />
              <p className="text-lg font-light text-white lg:text-xl">
                Riesgos operacionales que pasan inadvertidos
              </p>
            </div>

            <div className="bg-[#080B10] p-6 lg:p-8">
              <div className="mb-5 h-px w-10 bg-[#D4AF37]" />
              <p className="text-lg font-light text-white lg:text-xl">
                Diferencias entre lo que se cree y lo que ocurre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO INTERVENIMOS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CÓMO INTERVENIMOS
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Convertimos la evidencia en capacidad de mejora.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              No nos limitamos a verificar si un procedimiento existe.
              Analizamos cómo se ejecuta, dónde falla el control y qué riesgos
              pueden afectar a la operación.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            <article className="bg-[#080B10] p-8 lg:p-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                01
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ENTENDER
              </p>
              <h3 className="mt-4 min-h-[4.5rem] text-2xl font-light text-white lg:text-3xl">
                Qué ocurre realmente
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Contrastamos la ejecución de los procesos con lo que la
                organización ha definido.
              </p>
            </article>

            <article className="bg-[#080B10] p-8 lg:p-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                02
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ORDENAR
              </p>
              <h3 className="mt-4 min-h-[4.5rem] text-2xl font-light text-white lg:text-3xl">
                Controles y responsabilidades
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Identificamos qué debe controlarse, quién es responsable y qué
                evidencia demuestra que el control funciona.
              </p>
            </article>

            <article className="bg-[#080B10] p-8 lg:p-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                03
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ALINEAR Y OPTIMIZAR
              </p>
              <h3 className="mt-4 min-h-[4.5rem] text-2xl font-light text-white lg:text-3xl">
                Brechas y riesgos
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Priorizamos las desviaciones según su impacto y orientamos las
                acciones necesarias para corregirlas.
              </p>
            </article>

            <article className="bg-[#080B10] p-8 lg:p-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                04
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                TRANSFERIR
              </p>
              <h3 className="mt-4 min-h-[4.5rem] text-2xl font-light text-white lg:text-3xl">
                Capacidad de control y mejora
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Transferimos criterios para que el equipo pueda detectar,
                gestionar y corregir desviaciones con autonomía.
              </p>
            </article>
          </div>

          <p className="mt-8 text-xl font-medium text-white">
            La auditoría genera valor cuando permite actuar antes de que una
            desviación se convierta en una sorpresa.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CONVERSEMOS
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              ¿Qué necesita conocer hoy sobre su operación?
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Podemos comenzar por una brecha concreta, un riesgo identificado
              o la necesidad de comprobar si la operación funciona como la
              organización cree.
            </p>

            <Link
              href="/contacto"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              Conversemos
            </Link>
          </div>
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
              Una brecha de auditoría puede revelar una restricción en otra
              capacidad.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cuando la causa de una desviación atraviesa distintas capacidades
              de la cadena, el Modelo SP6 permite ampliar la mirada y entender
              dónde se origina realmente la restricción.
            </p>

            <Link
              href="/modelo-sp6"
              className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
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
