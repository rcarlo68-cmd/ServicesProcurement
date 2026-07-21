import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <a href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/services-procurement-logo.png"
            alt="Services Procurement"
            width={220}
            height={64}
            priority
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </a>

        {/* Menú */}

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          <a
            href="/operations"
            className="transition hover:text-blue-700"
          >
            Operations
          </a>

          <a
            href="/procurement"
            className="transition hover:text-blue-700"
          >
            Procurement
          </a>

          <a
            href="/warehousing"
            className="transition hover:text-blue-700"
          >
            Warehousing
          </a>

          <a
            href="/knowledge"
            className="transition hover:text-blue-700"
          >
            SP Knowledge
          </a>

          <a
            href="/book"
            className="transition hover:text-blue-700"
          >
            Libro
          </a>

          <a
            href="/contact"
            className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}