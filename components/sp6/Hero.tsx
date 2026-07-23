"use client";

import Image from "next/image";

const items = [
  {
    label: "Procurement",
    target: "procurement",
  },
  {
    label: "SP Knowledge",
    target: "sp-knowledge",
  },
  {
    label: "Auditoría Logística",
    target: "auditoria-logistica",
  },
  {
    label: "Talento",
    target: "desarrollo-talento",
  },
  {
    label: "Almacenes e Inventarios",
    target: "almacenes-inventarios",
  },
  {
    label: "Operaciones y Distribución",
    target: "operaciones-distribucion",
  },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,#030712_45%,#000000_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-8 pt-10 lg:px-10 lg:pb-10 lg:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-sky-400">
            Services Procurement
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            MODELO SP6
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Integramos seis capacidades estratégicas para transformar la cadena
            de suministro en una fuente sostenible de ventaja competitiva.
          </p>
        </div>

        <div className="mt-8 flex justify-center lg:mt-10">
          <div className="w-full max-w-6xl transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-110 hover:saturate-110">
            <Image
              src="/images/sp6/sp-framework-dark.png"
              alt="Modelo SP6"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full select-none object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 w-full max-w-5xl rounded-2xl border border-slate-800 bg-white/5 p-2 backdrop-blur-md lg:mt-8">
          <div className="flex flex-col gap-2 md:flex-row">
            {items.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="flex h-12 flex-1 items-center justify-center rounded-xl border border-transparent px-4 text-[15px] font-semibold text-slate-300 transition-all duration-300 hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}