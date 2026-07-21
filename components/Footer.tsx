import Image from "next/image";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-16 border-t border-slate-800 bg-slate-950 text-white lg:mt-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-4 lg:gap-14 lg:px-8">
        {/* Empresa */}

        <div>
          <Image
            src="/images/logo/services-procurement-logo-white.png"
            alt="Services Procurement"
            width={220}
            height={70}
            className="h-auto w-40 sm:w-44"
            priority
          />

          <p className="mt-6 text-base leading-8 text-slate-300">
            Ayudamos a las organizaciones a mejorar el desempeño de su cadena
            de suministro mediante experiencia operativa, conocimiento aplicado
            e inteligencia artificial.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/company/services-procurement/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-cyan-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://wa.me/51953449850?text=Hola%2C%20Services%20Procurement.%0A%0AQuisiera%20conversar%20sobre%20los%20desaf%C3%ADos%20log%C3%ADsticos%20de%20nuestra%20organizaci%C3%B3n%20y%20conocer%20c%C3%B3mo%20sus%20servicios%20podr%C3%ADan%20ayudarnos%20a%20mejorar%20nuestros%20procesos.%0A%0AQuedo%20atento%20a%20su%20respuesta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 transition hover:bg-green-700"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Soluciones */}

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            SOLUCIONES
          </h4>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>Strategic Procurement</li>
            <li>Warehousing &amp; Inventory</li>
            <li>Supply Chain Operations</li>
            <li>Logistics Audit</li>
            <li>Operational Excellence</li>
            <li translate="no">SP Knowledge</li>
          </ul>
        </div>

        {/* Empresa */}

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            SERVICES PROCUREMENT
          </h4>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>
              <a href="#approach" className="transition hover:text-cyan-400">
                Nuestra propuesta
              </a>
            </li>

            <li>
              <a href="#knowledge" className="transition hover:text-cyan-400">
                SP Knowledge
              </a>
            </li>

            <li>
              <a href="#book" className="transition hover:text-cyan-400">
                Libro
              </a>
            </li>

            <li>
              <a href="#contacto" className="transition hover:text-cyan-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}

        <div>
          <h4 className="text-lg font-semibold text-cyan-400">
            ¿Listo para conversar?
          </h4>

          <p className="mt-6 text-base leading-8 text-slate-300">
            Cada organización enfrenta desafíos distintos. Conversemos sobre su
            operación y exploremos oportunidades para mejorar el desempeño de
            su cadena de suministro.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <a
              href="mailto:contacto@servicesprocurementpe.com"
              className="flex items-start gap-3 break-all transition hover:text-cyan-400"
            >
              <FaEnvelope className="mt-1 shrink-0" />
              contacto@servicesprocurementpe.com
            </a>

            <a
              href="mailto:rcabrera@servicesprocurementpe.com"
              className="flex items-start gap-3 break-all transition hover:text-cyan-400"
            >
              <FaEnvelope className="mt-1 shrink-0" />
              rcabrera@servicesprocurementpe.com
            </a>

            <a
              href="tel:+51953449850"
              className="flex items-center gap-3 transition hover:text-cyan-400"
            >
              <FaPhoneAlt className="shrink-0" />
              +51 953 449 850
            </a>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="shrink-0" />
              Lima, Perú
            </div>
          </div>

          <a
            href="https://wa.me/51953449850?text=Hola%2C%20Services%20Procurement.%0A%0AQuisiera%20conversar%20sobre%20los%20desaf%C3%ADos%20log%C3%ADsticos%20de%20nuestra%20organizaci%C3%B3n%20y%20conocer%20c%C3%B3mo%20sus%20servicios%20podr%C3%ADan%20ayudarnos%20a%20mejorar%20nuestros%20procesos.%0A%0AQuedo%20atento%20a%20su%20respuesta."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-center font-semibold text-white transition-all hover:bg-green-700 hover:shadow-xl sm:w-auto"
          >
            <FaWhatsapp size={22} />
            Hablemos por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm text-slate-500 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>
            © 2026 Services Procurement. Todos los derechos reservados.
          </p>

          <p>
            Diseñado para transformar conocimiento operativo en mejores
            decisiones.
          </p>
        </div>
      </div>
    </footer>
  );
}