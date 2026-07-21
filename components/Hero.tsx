import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-20">
        {/* TEXTO */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
            SERVICES PROCUREMENT
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:mt-6 lg:text-6xl lg:leading-[1.08]">
            La mayoría de las pérdidas operacionales
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            no ocurren donde usted las está buscando.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9 lg:mt-8">
            Analizamos cómo interactúan Producción, Mantenimiento,
            Planeamiento, Compras, Inventarios y Logística para descubrir las
            restricciones que limitan el desempeño de su operación.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-12">
            <a
              href="https://wa.me/51953449850?text=Hola%2C%20Services%20Procurement.%0A%0AQuisiera%20conversar%20sobre%20los%20desaf%C3%ADos%20log%C3%ADsticos%20de%20nuestra%20organizaci%C3%B3n%20y%20conocer%20c%C3%B3mo%20sus%20servicios%20podr%C3%ADan%20ayudarnos%20a%20mejorar%20nuestros%20procesos.%0A%0AQuedo%20atento%20a%20su%20respuesta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-xl"
            >
              <FaWhatsapp size={24} />
              Hablemos por WhatsApp
            </a>

            <a
              href="#sp6"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500 px-8 py-4 text-center font-semibold text-white transition hover:border-cyan-400 hover:bg-slate-900 hover:text-cyan-300"
            >
              Conozca el Modelo SP6
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:mt-16 lg:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">+30</h3>

              <p className="mt-2 text-sm text-slate-400">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Minería</h3>

              <p className="mt-2 text-sm text-slate-400">
                Energía · Manufactura
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Supply Chain
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Procurement · Operaciones
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">IA</h3>

              <p className="mt-2 text-sm text-slate-400">
                Inteligencia aplicada
              </p>
            </div>
          </div>
        </div>

        {/* MOSAICO */}

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-3xl bg-slate-800 shadow-2xl">
            <Image
              src="/images/hero/operations-hero.png"
              alt="Operaciones"
              width={1200}
              height={700}
              priority
              className="h-64 w-full object-cover sm:h-72 lg:h-80"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src="/images/hero/maintenance.png"
              alt="Mantenimiento"
              width={600}
              height={400}
              className="h-36 w-full object-cover sm:h-40"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src="/images/hero/warehouse.png"
              alt="Almacenes"
              width={600}
              height={400}
              className="h-36 w-full object-cover sm:h-40"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src="/images/hero/planning.png"
              alt="Planeamiento"
              width={600}
              height={400}
              className="h-36 w-full object-cover sm:h-40"
            />
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src="/images/hero/procurement.png"
              alt="Procurement"
              width={600}
              height={400}
              className="h-36 w-full object-cover sm:h-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}