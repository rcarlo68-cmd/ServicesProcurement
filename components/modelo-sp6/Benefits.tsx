"use client";

const benefits = [
  "Control",
  "Eficiencia",
  "Anticipación",
  "Valor",
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#D4AF37]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              RESULTADOS
            </span>
          </div>

          <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Lo que cambia.
          </h2>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="border-t border-white/15 pt-5"
            >
              <div className="mb-4 h-px w-8 bg-[#D4AF37]" />

              <h3 className="text-xl font-light text-white sm:text-2xl">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}