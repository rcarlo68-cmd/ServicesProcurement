import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/logo/services-procurement-logo.png"
            alt="Services Procurement"
            width={220}
            height={64}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        {/* Navegación */}

        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center gap-10 text-[15px] font-medium text-slate-700">
            <li>
              <Link
                href="/operations"
                className="transition-colors duration-200 hover:text-slate-900"
              >
                Operations
              </Link>
            </li>

            <li>
              <Link
                href="/procurement"
                className="transition-colors duration-200 hover:text-slate-900"
              >
                Procurement
              </Link>
            </li>

            <li>
              <Link
                href="/warehousing"
                className="transition-colors duration-200 hover:text-slate-900"
              >
                Warehousing
              </Link>
            </li>

            <li>
              <Link
                href="/knowledge"
                className="transition-colors duration-200 hover:text-slate-900"
              >
                SP Knowledge
              </Link>
            </li>

            <li>
              <Link
                href="/sp6"
                className="font-semibold text-slate-900 transition-colors duration-200 hover:text-blue-700"
              >
                Modelo SP6
              </Link>
            </li>

            <li>
              <Link
                href="/book"
                className="transition-colors duration-200 hover:text-slate-900"
              >
                Libro
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}