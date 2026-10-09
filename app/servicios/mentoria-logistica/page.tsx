import Header from "@/components/layout/Header";

export default function MentoriaLogisticaPage() {
  const contactoUrl = "/contacto";

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
              MENTORÍA LOGÍSTICA
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.05em]">
            No tienes que resolverlo todo solo.
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">
            Hay momentos en la carrera profesional en los que necesitas algo
            más que conocimientos técnicos: alguien que escuche lo que estás
            viviendo, comprenda la complejidad de tu situación y te ayude a
            verla desde otra perspectiva.
          </p>

          <a
            href={contactoUrl}
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
          >
            CONVERSEMOS
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
              Primera sesión introductoria GRATUITA
            </span>
            <span className="text-sm text-slate-400">
              Modalidad virtual
            </span>
          </div>
        </div>
      </section>

      {/* LA REALIDAD PROFESIONAL */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              LA REALIDAD PROFESIONAL
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Hay situaciones para las que nadie te preparó.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              En Logística y Supply Chain puedes enfrentarte a usuarios que
              necesitan soluciones inmediatas, superiores que esperan
              resultados, decisiones complejas y problemas que no siempre
              puedes conversar abiertamente con quienes te rodean.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Tener conocimientos técnicos no significa tener todas las
              respuestas. En ocasiones, lo que necesitas es ordenar tus ideas,
              comprender mejor lo que está ocurriendo y recuperar la confianza
              para afrontar la situación.
            </p>
          </div>
        </div>
      </section>

      {/* MENTORÍA FRENTE A UN CURSO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              UNA FORMA DIFERENTE DE APRENDER
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Tu realidad no viene en un temario.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Un curso puede enseñarte conceptos, metodologías y herramientas.
              Pero ¿qué ocurre cuando tienes que responder a un usuario que
              exige una solución inmediata, afrontar una decisión compleja o
              manejar una situación para la que nadie te preparó?
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              En esos momentos, necesitas analizar lo que está ocurriendo,
              comprender las causas del problema y evaluar las alternativas
              disponibles. La respuesta no siempre está en aplicar una
              metodología: también importa entender las circunstancias
              concretas de tu operación.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              En la Mentoría Logística trabajamos sobre la situación que
              necesitas abordar. A partir de mi experiencia en operaciones
              logísticas, examinamos distintas perspectivas, contrastamos
              alternativas y evaluamos sus posibles consecuencias para
              identificar un camino razonado y adecuado a tu realidad.
            </p>

            <p className="mt-8 text-xl font-medium text-white">
              No vienes a seguir un temario. Vienes a analizar un desafío
              real con alguien que conoce la operación.
            </p>
          </div>
        </div>
      </section>

      {/* LA EXPERIENCIA DEL MENTOR */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              LA EXPERIENCIA DEL MENTOR
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Hay situaciones que solo alguien que ya estuvo allí puede comprender.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Soy Ricardo Cabrera Casas. Durante 30 años de trayectoria
              profesional he trabajado en Logística y Supply Chain y he
              formado a más de 100 ejecutivos que hoy se desempeñan en
              empresas líderes.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Esa experiencia me ha permitido conocer las exigencias de la
              operación, las expectativas de los superiores y las dificultades
              que aparecen cuando hay que responder, decidir y liderar en
              circunstancias complejas.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Desde Services Procurement, pongo esa experiencia al servicio
              de profesionales que necesitan conversar sobre sus desafíos y
              encontrar nuevas perspectivas para afrontarlos.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CÓMO FUNCIONA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Analizamos juntos lo que necesitas resolver.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Llegas con una situación concreta de tu trabajo: un problema
              logístico, una decisión compleja, un conflicto entre áreas o una
              dificultad para responder a las exigencias de la operación.
              Partimos de los hechos y del contexto para comprender qué está
              ocurriendo.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Desde mi experiencia, aporto perspectivas y experiencias
              relevantes para examinar las causas, contrastar alternativas y
              evaluar sus posibles consecuencias. No se trata de aplicar una
              receta, sino de analizar qué opciones tienen sentido en tu
              realidad operativa.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              La decisión final sigue siendo tuya. El propósito es que
              comprendas mejor la situación, tengas más elementos para
              decidir y puedas identificar un camino de acción razonado.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            <article className="border-t border-white/10 py-8 md:pr-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                01
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                COMPRENDER
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Identificar el problema
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Revisamos los hechos, el contexto, las restricciones y las
                personas involucradas para entender qué está ocurriendo.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pl-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                02
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ANALIZAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Examinar causas y alternativas
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Contrastamos perspectivas, exploramos opciones y evaluamos
                sus riesgos y posibles consecuencias.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pr-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                03
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                CONTRASTAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Incorporar experiencia operativa
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Utilizamos experiencias y conocimientos del sector para
                enriquecer el análisis y valorar qué resulta aplicable a tu
                situación.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pl-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                04
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                DECIDIR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Definir un camino de acción
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Organizamos las conclusiones para que puedas decidir con mayor
                claridad y actuar de acuerdo con las condiciones de tu
                operación.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MODALIDAD */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              MODALIDAD DE LA MENTORÍA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Un espacio para trabajar sobre lo que realmente necesitas.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              La mentoría está dirigida a profesionales de todos los niveles
              de Logística y Supply Chain. Las sesiones son virtuales, duran
              hasta una hora y pueden realizarse con una frecuencia máxima de
              dos veces por semana, según la complejidad de cada problemática.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              No existe una cantidad fija de sesiones para todos. La
              continuidad se define de acuerdo con los temas que el mentee
              necesita trabajar y está sujeta a la disponibilidad del mentor.
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE Y CONTACTO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              EMPECEMOS POR UNA CONVERSACIÓN
            </span>

            <h2 className="mt-6 text-[clamp(2.7rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.045em]">
              No necesitas tener todas las respuestas para dar el siguiente
              paso.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Te invito a una primera sesión introductoria sin costo para
              conversar sobre tu situación, conocer tus inquietudes y explorar
              si la mentoría puede ayudarte en el momento profesional que
              estás atravesando.
            </p>

            <a
              href={contactoUrl}
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-[#111111] transition-all duration-300 hover:brightness-110"
            >
              CONVERSEMOS
            </a>

            <p className="mt-5 text-sm text-slate-500">
              Services Procurement · Mentoría Logística
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Seis capacidades. Una sola dirección: la operación.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}