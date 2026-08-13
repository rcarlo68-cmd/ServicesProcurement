import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-12">

        {/* CONTENIDO PRINCIPAL */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-10
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-12
          "
        >

          {/* MARCA */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo/logo-white.png"
                alt="Services Procurement"
                width={180}
                height={52}
                className="h-auto w-[160px] lg:w-[180px]"
              />
            </Link>

            <div className="mt-5 h-px w-10 bg-[#D4AF37]" />

            <p className="mt-4 max-w-xs text-xs leading-5 text-slate-400 lg:text-sm lg:leading-6">
              Transformamos la cadena de suministro en una ventaja competitiva
              mediante conocimiento, estrategia e innovación.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-medium text-white lg:text-base">
              Navegación
            </h3>

            <div className="mt-2 h-px w-10 bg-[#D4AF37]" />

            <nav className="mt-4 flex flex-col gap-2 text-xs text-slate-400 lg:mt-5 lg:gap-3 lg:text-sm">

              <Link href="/" className="hover:text-[#D4AF37]">
                Inicio
              </Link>

              <Link
                href="/modelo-sp6"
                className="hover:text-[#D4AF37]"
              >
                Soluciones
              </Link>

              <Link
                href="/nuestra-vision"
                className="hover:text-[#D4AF37]"
              >
                Nuestra Visión
              </Link>

              <Link
                href="/knowledge"
                className="hover:text-[#D4AF37]"
              >
                SP Knowledge
              </Link>

              <Link
                href="/book"
                className="hover:text-[#D4AF37]"
              >
                Libro
              </Link>

              <Link
                href="/contacto"
                className="hover:text-[#D4AF37]"
              >
                Contacto
              </Link>

            </nav>
          </div>

          {/* SP6 */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-sm font-medium text-white lg:text-base">
              Capacidades SP6
            </h3>

            <div className="mt-2 h-px w-10 bg-[#D4AF37]" />

            <nav className="mt-4 flex flex-col gap-2 text-xs text-slate-400 lg:mt-5 lg:gap-3 lg:text-sm">

              <Link
                href="/knowledge/procurement"
                className="hover:text-[#D4AF37]"
              >
                Procurement
              </Link>

              <Link
                href="/knowledge/inventory"
                className="hover:text-[#D4AF37]"
              >
                Almacenes e Inventarios
              </Link>

              <Link
                href="/knowledge/operations"
                className="hover:text-[#D4AF37]"
              >
                Operaciones y Distribución
              </Link>

              <Link
                href="/knowledge/audit"
                className="hover:text-[#D4AF37]"
              >
                Auditoría Logística
              </Link>

              <Link
                href="/knowledge/digital"
                className="hover:text-[#D4AF37]"
              >
                Transformación Digital
              </Link>

              <Link
                href="/knowledge/talent"
                className="hover:text-[#D4AF37]"
              >
                Desarrollo del Talento
              </Link>

            </nav>
          </div>

          {/* CONTACTO */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-medium text-white lg:text-base">
              Contacto
            </h3>

            <div className="mt-2 h-px w-10 bg-[#D4AF37]" />

            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400 lg:mt-5 lg:gap-4 lg:text-sm">

              <a
                href="mailto:rcabrera@servicesprocurementpe.com"
                className="flex items-start gap-3 break-words hover:text-[#D4AF37]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-words">
                  rcabrera@servicesprocurementpe.com
                </span>
              </a>

              <a
                href="tel:+51953449850"
                className="flex items-center gap-3 hover:text-[#D4AF37]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>+51 953 449 850</span>
              </a>

              <a
                href="https://www.servicesprocurementpe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words hover:text-[#D4AF37]"
              >
                www.servicesprocurementpe.com
              </a>

              <a
                href="https://www.linkedin.com/company/86940809/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37]"
              >
                <span className="font-bold text-[#D4AF37]">
                  in
                </span>
                <span>Services Procurement</span>
              </a>

              <span>Lima · Perú</span>

            </div>
          </div>

        </div>

        {/* PIE */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-5
            text-[10px]
            text-slate-500
            sm:text-xs
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © 2026 Services Procurement E.I.R.L. Todos los derechos reservados.
          </span>

          <div className="flex gap-5">
            <Link
              href="/privacidad"
              className="hover:text-[#D4AF37]"
            >
              Política de Privacidad
            </Link>

            <Link
              href="/terminos"
              className="hover:text-[#D4AF37]"
            >
              Términos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}