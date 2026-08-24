"use client";

const capabilities = [
  {
    title: "Procurement",
    href: "/knowledge/procurement",
  },
  {
    title: "Almacenes e Inventarios",
    href: "/knowledge/inventory",
  },
  {
    title: "Operaciones y Distribución",
    href: "/knowledge/operations",
  },
  {
    title: "Auditoría Logística",
    href: "/knowledge/audit",
  },
  {
    title: "Talento",
    href: "/knowledge/talent",
  },
  {
    title: "Tecnología",
    href: "/knowledge/digital",
  },
];

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <div className="mb-14 max-w-5xl">
          <div className="mb-7 flex items-center gap-4">
            <div className="h-px w-12 bg-[#D4AF37]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              CAPACIDADES
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.045em] text-white">
            Seis capacidades.
            <br />
            <span className="text-slate-300">
              Una sola dirección: la operación.
            </span>
          </h2>
        </div>

        {/* Capabilities */}
        <div className="grid border-y border-white/10 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <a
              key={capability.title}
              href={capability.href}
              className={`
                group
                flex
                min-h-[88px]
                items-center
                justify-between
                gap-6
                border-white/10
                px-6
                py-6
                transition-all
                duration-300
                hover:bg-white/[0.025]
                md:min-h-[96px]
                md:px-7
                ${
                  index < 3
                    ? "md:border-b"
                    : ""
                }
                ${
                  index % 3 !== 2
                    ? "md:border-r"
                    : ""
                }
                ${
                  index < 4
                    ? "border-b md:border-b"
                    : ""
                }
              `}
            >
              <span className="text-sm font-light text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                {capability.title}
              </span>

              <span
                className="
                  text-sm
                  text-slate-500
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#D4AF37]
                "
              >
                →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}