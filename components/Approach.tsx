/*
----------------------------------------------------------
Services Procurement Website
Component: Approach
Version: 1.2
Status: APPROVED
----------------------------------------------------------
*/

const cards = [
  {
    title: "Producción",
    image: "/images/approach/production.png",
    phrase: "«No puedo cumplir el plan... siguen faltando materiales.»",
    description:
      "Sabemos que esa conversación normalmente comenzó semanas antes de que la operación se detuviera. Nuestro trabajo consiste en identificar ese origen y evitar que vuelva a repetirse.",
  },
  {
    title: "Mantenimiento",
    image: "/images/approach/maintenance.png",
    phrase: "«El equipo sigue detenido. Falta un repuesto.»",
    description:
      "Cada hora de indisponibilidad representa producción que no se recupera. Ayudamos a anticiparnos al problema fortaleciendo la cadena de suministro.",
  },
  {
    title: "Cadena de suministro",
    image: "/images/approach/supply-chain.png",
    phrase: "«El sistema dice que sí hay stock...»",
    description:
      "Convertimos la información en decisiones confiables para que la operación no tenga que trabajar por intuición.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
            Nuestro enfoque
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Entendemos la operación porque hemos estado allí.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            Durante años participamos en reuniones donde Producción,
            Mantenimiento y Cadena de Suministro perseguían el mismo objetivo,
            pero hablaban desde realidades diferentes.
          </p>

          <p className="mt-5 text-lg font-semibold text-cyan-700 md:text-xl">
            Nuestro trabajo comienza donde normalmente aparecen los problemas de
            la operación.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card) => (

            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="h-64 overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              <div className="flex flex-col p-8 lg:min-h-[330px]">

                <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">
                  {card.title}
                </h3>

                <p className="mt-5 text-lg italic font-medium leading-8 text-cyan-700 md:text-xl">
                  {card.phrase}
                </p>

                <p className="mt-6 leading-8 text-slate-600 flex-1">
                  {card.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

      {/* Franja inferior */}

      <div className="mt-20 bg-slate-900 md:mt-24">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 md:py-20">

          <p className="text-xl text-slate-300 md:text-2xl">
            No fortalecemos únicamente la cadena de suministro.
          </p>

          <h3 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Fortalecemos el desempeño de la operación.
          </h3>

        </div>

      </div>

    </section>
  );
}