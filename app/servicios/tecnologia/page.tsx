
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function TecnologiaPage() {
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
              TECNOLOGÍA
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            ¿Está aprovechando su tecnología?
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Tener tecnología no significa necesariamente estar aprovechándola.
            Lo importante es entender qué necesita la operación y cuánto de la
            capacidad disponible realmente está siendo utilizada.
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
              ¿Su tecnología le permite saber qué está pasando?
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Una organización puede tener sistemas y aun así depender de
              Excel, consolidaciones manuales o personas que preparan
              información para gestionar. También puede contar con un ERP que
              no refleja cómo funciona realmente la operación.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Antes de incorporar una nueva herramienta, necesitamos entender
              qué información requiere la operación y qué pueden aportar los
              sistemas disponibles. A veces basta con mejorar un registro o
              corregir la configuración de un sistema; otras veces, se necesita
              una solución diferente.
            </p>

            <p className="mt-8 text-xl font-medium text-white">
              No buscamos más tecnología. Buscamos que la que ya tiene entregue
              más valor a la operación.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO INTERVENIMOS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CÓMO INTERVENIMOS
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Conectamos las necesidades de la operación con la tecnología que
              realmente necesita.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Analizamos qué información necesita la operación, dónde se
              generan los quiebres y cómo aprovechar las herramientas
              disponibles para resolverlos.
            </p>
          </div>

          
<div className="mt-12 grid grid-cols-1 md:grid-cols-2">
  <article className="border-t border-white/10 py-8 md:pr-10">
    <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
      01
    </span>
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
      ENTENDER
    </p>
    <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
      Qué necesita la operación
    </h3>
    <p className="mt-4 text-base leading-7 text-slate-400">
      Comprendemos qué información se necesita para funcionar y decidir,
      y cómo responde la tecnología disponible.
    </p>
  </article>

  <article className="border-t border-white/10 py-8 md:pl-10">
    <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
      02
    </span>
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
      ORDENAR
    </p>
    <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
      Información para la gestión
    </h3>
    <p className="mt-4 text-base leading-7 text-slate-400">
      Estructuramos la información para que sea clara, trazable y útil
      para gestionar y tomar decisiones.
    </p>
  </article>

  <article className="border-t border-white/10 py-8 md:pr-10">
    <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
      03
    </span>
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
      ALINEAR Y OPTIMIZAR
    </p>
    <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
      Información oportuna y confiable
    </h3>
    <p className="mt-4 text-base leading-7 text-slate-400">
      Alineamos los procesos y la tecnología para disponer de
      información confiable cuando se necesita.
    </p>
  </article>

  <article className="border-t border-white/10 py-8 md:pl-10">
    <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
      04
    </span>
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
      TRANSFERIR
    </p>
    <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
      Capacidad para gestionar
    </h3>
    <p className="mt-4 text-base leading-7 text-slate-400">
      Transferimos criterios para que el equipo pueda interpretar y
      utilizar la información con autonomía.
    </p>
  </article>
</div>


          <p className="mt-8 text-xl font-medium text-white">
            La tecnología genera capacidad cuando la organización sabe para qué
            la necesita y cómo utilizarla.
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
              ¿Qué necesita conocer hoy de su operación para poder decidir?
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Podemos comenzar por una necesidad concreta, comprender cómo se
              gestiona actualmente y determinar qué capacidad tecnológica puede
              aportar valor real a la operación.
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

      {/* CONEXIÓN CON SP6 */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              MODELO SP6
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Una necesidad tecnológica puede revelar una restricción en otra
              capacidad.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cuando una necesidad tecnológica tiene su origen o impacto en
              otra capacidad de la cadena, el Modelo SP6 permite ampliar la
              mirada y entender dónde se genera realmente la restricción.
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
