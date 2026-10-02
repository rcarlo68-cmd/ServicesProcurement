
import Header from "@/components/layout/Header";
import Link from "next/link";

export default function TalentoPage() {
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
              TALENTO
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            Las personas también son parte de la capacidad de la operación.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Una operación necesita personas capaces de comprender lo que
            ocurre, tomar decisiones y resolver situaciones reales. El
            conocimiento individual debe convertirse en capacidad del equipo
            y de la organización.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            Conversemos
          </Link>
        </div>
      </section>

      {/* REALIDAD OPERACIONAL */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              LA REALIDAD OPERACIONAL
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              El conocimiento existe. La capacidad no siempre.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Una organización puede tener personas experimentadas y, aun así,
              depender de unos pocos para resolver problemas. El conocimiento
              puede quedarse en cada individuo, los mismos errores repetirse y
              las decisiones variar según quién esté a cargo.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Desarrollar talento significa fortalecer el criterio, la
              autonomía y la capacidad de actuar para que las personas y los
              equipos puedan sostener la operación.
            </p>
          </div>
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
              Desarrollar personas. Fortalecer equipos.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              No todas las personas ni todos los equipos necesitan el mismo
              desarrollo. Primero comprendemos qué exige la operación, qué
              capacidades existen y dónde están las brechas. Después trabajamos
              sobre las necesidades concretas de cada persona y equipo.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              El desarrollo debe reflejarse en el trabajo cotidiano: en cómo
              las personas interpretan una situación, toman decisiones,
              resuelven problemas y transfieren lo que saben.
            </p>

            <p className="mt-8 text-xl font-medium text-white">
              El objetivo no es solamente aprender más, sino desarrollar la
              capacidad que la operación necesita.
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
              Desarrollamos las capacidades que las personas necesitan para
              gestionar la operación.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Trabajamos sobre las brechas identificadas y situaciones reales
              para que el desarrollo se traduzca en una mejor forma de
              gestionar, decidir y actuar.
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
                Capacidades y brechas
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Identificamos qué necesita la operación, cómo trabajan las
                personas y dónde existen brechas de conocimiento, criterio
                o autonomía.
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
                Roles y necesidades
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Definimos las capacidades que necesita desarrollar cada
                persona y equipo según sus responsabilidades y desafíos.
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
                Aprendizaje aplicado
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Desarrollamos capacidades sobre situaciones reales,
                conectando el aprendizaje con las decisiones y el trabajo
                cotidiano.
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
                Autonomía y continuidad
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Fortalecemos la capacidad del equipo para sostener su gestión,
                compartir conocimientos y resolver problemas con mayor
                autonomía.
              </p>
            </article>
          </div>

          <p className="mt-8 text-xl font-medium text-white">
            El desarrollo genera valor cuando se refleja en cómo las personas
            trabajan y deciden.
          </p>
        </div>
      </section>

      {/* TALENTO Y SP6 */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              TALENTO Y MODELO SP6
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Las personas sostienen la transformación de Supply Chain.
            </h2>

            
<p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
  Dentro del Modelo SP6, Talento es una de las seis capacidades de la
  intervención integral. Desarrollamos las capacidades que las personas
  y los equipos necesitan para incorporar nuevas formas de trabajar,
  decidir y gestionar, en coordinación con las demás capacidades de
  la cadena de suministro.
</p>

<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
  Si necesitas trabajar sobre un desafío profesional o desarrollar
  conocimientos específicos sin implementar todo el Modelo SP6,
  puedes contratar nuestros servicios independientes de Mentoría
  Logística, Coaching Logístico o Capacitación y Seminarios.
</p>


            <Link
              href="/modelo-sp6"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              CONOZCA EL MODELO SP6 
            </Link>
            <Link
  href="/servicios#desarrollo-profesional"
  className="ml-6 inline-flex items-center text-sm font-semibold uppercase tracking-[0.14em] text-[#D4AF37] transition-colors hover:text-white"
>
  EXPLORAR SERVICIOS INDEPENDIENTES →
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
