"use client";

const items = [
  { label: "Introducción", target: "introduction" },
  { label: "Capacidades", target: "pillars" },
  { label: "Metodología", target: "methodology" },
  { label: "Beneficios", target: "benefits" },
  { label: "Aplicación", target: "industries" },
  { label: "Origen", target: "origin" },
  { label: "Contacto", target: "cta" },
];

export default function Sticky() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 145;

    const y =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-16 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-3">
        <span className="mr-3 shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Navegación
        </span>

        {items.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            className="shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}