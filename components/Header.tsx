export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:h-24 lg:px-8">

        {/* Logo */}

        <a href="/" className="flex flex-col">

          <span
            translate="no"
            className="text-2xl font-black tracking-tight text-slate-900 lg:text-4xl"
          >
            SERVICES PROCUREMENT
          </span>

          <span className="mt-1 text-xs text-slate-500 lg:text-sm">
            Mejorando el desempeño de la cadena de suministro
          </span>

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