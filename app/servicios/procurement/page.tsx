
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function ProcurementPage() {
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
              PROCUREMENT
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            Procurement no empieza con una orden de compra.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Empieza mucho antes: entendiendo qué necesita realmente la operación,
            cuándo lo necesita y qué debe ocurrir para que esté disponible cuando
            se necesita.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            Conversemos
          </Link>
        </div>
      </section>

      {/* REALIDAD OPERACIONAL Y NUESTRA MIRADA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              NUESTRA MIRADA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              El problema puede aparecer en Compras. La causa puede estar en
              otra parte.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Las compras de emergencia, los pendientes acumulados y los Lead
              Times que no se cumplen suelen atribuirse a Procurement. Sin
              embargo, su origen puede estar en necesidades mal definidas, una
              planificación que no considera los tiempos reales de
              abastecimiento, inventarios que no reflejan la realidad o usuarios
              que terminan comprando directamente.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Por eso, mejorar Procurement no consiste solamente en comprar
              mejor. Significa comprender cómo se genera la necesidad, qué
              información la determina y dónde se rompe la cadena antes de que
              el problema llegue al comprador.
            </p>
          </div>
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
              Convertimos Procurement en una capacidad conectada con el negocio.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Intervenimos desde cómo se genera la necesidad hasta la capacidad
              de la organización para gestionar el abastecimiento con autonomía.
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
                Comprendemos cómo se genera la necesidad de compra y qué
                información la determina.
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
                Definimos las reglas de abastecimiento y las responsabilidades
                para gestionar cada necesidad.
              </p>
            </article>

            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                03
              </span>

              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Alinear y optimizar
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-400">
                Alineamos la planificación, la información y los procesos de
                compra con las necesidades reales de la operación.
              </p>
            </article>

            <article>
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                04
              </span>

              <h3 className="mt-3 text-xl font-light text-white lg:text-2xl">
                Transferir
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-400">
                Desarrollamos la capacidad del equipo para sostener y mejorar
                la gestión de Procurement con autonomía.
              </p>
            </article>
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
              Una necesidad de Procurement puede revelar una restricción en
              otra capacidad.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cuando el problema de abastecimiento atraviesa distintas
              capacidades, el Modelo SP6 nos permite ampliar la mirada y
              entender dónde se origina realmente la restricción.
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
