
import Header from "@/components/layout/Header";

export default function MentoriaLogisticaPage() {
  const whatsappMessage = encodeURIComponent(
    "Hola, estoy interesado/a en la Mentoría Logística de Services Procurement. Me gustaría conversar sobre la sesión introductoria gratuita."
  );

  const whatsappUrl = `https://wa.me/51953449850?text=${whatsappMessage}`;

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
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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

      
      {/* MENTORIA FRENTE A UN CURSO */}
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
              En esos momentos, necesitas comprender tu situación particular,
              analizar qué está en juego y explorar alternativas. No basta con
              seguir un contenido predeterminado: necesitas trabajar sobre lo
              que realmente estás viviendo.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              En la Mentoría Logística, tú eliges el tema y compartes tus
              inquietudes. Desde mi experiencia, te ayudo a examinar el
              problema desde otras perspectivas, comprender mejor las
              expectativas de tu entorno y desarrollar tu propio criterio
              para afrontar la situación.
            </p>

            <p className="mt-8 text-xl font-medium text-white">
              No vienes a seguir un temario. Vienes a trabajar sobre aquello
              que hoy necesitas comprender.
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

      {/* COMO FUNCIONA */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              CÓMO FUNCIONA
            </span>

            <h2 className="mt-6 text-[clamp(2.4rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em]">
              Tú eliges qué necesitas conversar.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Cada mentee llega con sus propias inquietudes. Puede compartir
              una dificultad con un usuario, una decisión que no sabe cómo
              abordar, un conflicto entre áreas o una situación que le genera
              dudas sobre cómo actuar.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Mi papel no es darte respuestas prefabricadas ni decidir por
              ti. Te escucho, comparto experiencias y te ayudo a examinar lo
              que estás viviendo desde otras perspectivas para que puedas
              construir tu propio criterio y encontrar alternativas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
            <article className="border-t border-white/10 py-8 md:pr-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                01
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ESCUCHAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Comprender tu situación
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Partimos de lo que estás viviendo, de tus inquietudes y de
                las circunstancias que hacen compleja tu situación.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pl-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                02
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                EXAMINAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Mirar desde otra perspectiva
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Contrastamos interpretaciones, revisamos alternativas y
                exploramos aspectos que quizá no habías considerado.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pr-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                03
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                DESARROLLAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Fortalecer tu criterio
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Trabajamos sobre cómo interpretar la situación, evaluar
                opciones y comprender qué exige de ti tu responsabilidad
                profesional.
              </p>
            </article>

            <article className="border-t border-white/10 py-8 md:pl-10">
              <span className="text-sm tracking-[0.25em] text-[#D4AF37]">
                04
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                ACTUAR
              </p>

              <h3 className="mt-3 text-2xl font-light text-white lg:text-3xl">
                Decidir con mayor confianza
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-400">
                El propósito es que puedas afrontar tus desafíos con mayor
                claridad, autonomía y confianza en tus propias decisiones.
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
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
