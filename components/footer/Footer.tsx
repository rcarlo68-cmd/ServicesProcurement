"use client";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070b] px-6">
      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)]" />

      <div className="relative flex h-full w-full max-w-7xl flex-col justify-between py-16">
        {/* Declaración institucional */}
        <section className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-light leading-tight text-white md:text-5xl">
              El propósito marca el rumbo.
            </p>

            <div className="mt-10 flex justify-center">
              <span
                className="
                  text-5xl
                  font-bold
                  tracking-[0.18em]
                  text-[#D4AF37]
                  md:text-7xl
                  drop-shadow-[0_0_18px_rgba(212,175,55,0.18)]
                  transition-all
                  duration-500
                "
              >
                SP6
              </span>
            </div>

            <p className="mt-12 text-3xl font-light leading-tight text-white md:text-5xl">
              lo hace posible.
            </p>
          </div>
        </section>

        {/* Pie */}
        <section className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 Services Procurement E.I.R.L.</p>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            <ChevronUp
              size={18}
              className="text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[#D4AF37]"
            />
          </button>
        </section>
      </div>
    </footer>
  );
}