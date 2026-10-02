
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function AlmacenesInventariosPage() {
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
              ALMACENES E INVENTARIOS
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            ¿Su inventario está cumpliendo su función?
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            El inventario existe para sostener la operación. Debe asegurar
            que los materiales necesarios estén disponibles cuando la
            operación los necesita, en la cantidad y condición adecuadas.
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
              El inventario debe responder a la operación, no al revés.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Tener materiales almacenados no garantiza su disponibilidad.
              Puede haber roturas de stock mientras existen materiales
              inmovilizados, diferencias entre el inventario físico y el
              sistema o códigos duplicados que dificultan el control.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Por eso, no basta con mantener saldos correctos. Necesitamos
              entender qué requiere la operación, cuándo lo necesita y cómo
              se generan, almacenan, mueven y consumen los materiales para
              que el inventario cumpla su función.
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
              Desarrollamos la capacidad de inventarios que la operación necesita.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Trabajamos desde cómo se genera y se mueve el inventario hasta
              las reglas y capacidades que permiten gestionarlo con autonomía.
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
                Comprendemos cómo se genera la necesidad, cómo circulan los
                materiales y qué ocurre realmente dentro del almacén.
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
                Definimos las reglas para gestionar niveles, movimientos,
                ubicaciones y condiciones del inventario.
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
                Alineamos los parámetros y la gestión del inventario con
                las necesidades reales de la operación.
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
                la gestión de inventarios sin depender de nuestra intervención.
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
              Una necesidad de inventarios puede revelar una restricción en otra capacidad.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Cuando la disponibilidad depende de otras capacidades de la
              cadena, el Modelo SP6 permite ampliar la mirada y entender
              dónde se origina realmente la restricción.
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
