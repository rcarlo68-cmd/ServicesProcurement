"use client";

const items = [
  { label: "Procurement", target: "procurement" },
  { label: "Auditoría", target: "auditoria-logistica" },
  { label: "Operaciones", target: "operaciones-distribucion" },
  { label: "Almacenes", target: "almacenes-inventarios" },
  { label: "Talento", target: "desarrollo-talento" },
  { label: "SP Knowledge", target: "sp-knowledge" },
];

export default function PillarsNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    document.getElementById("sp6-hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-20 z-40 mb-10 rounded-2xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-center gap-2 p-3">

        <button
          onClick={scrollToTop}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          ← Modelo SP6
        </button>

        {items.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
          >
            {item.label}
          </button>
        ))}

      </div>
    </div>
  );
}