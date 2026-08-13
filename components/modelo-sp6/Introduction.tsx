"use client";

export default function Introduction() {
  return (
    <section
      id="introduccion"
      className="relative overflow-hidden bg-[#05070B] py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:px-10 xl:px-12">
        {/* Left */}
        <div className="lg:col-span-4">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              INTRODUCCIÓN
            </span>
          </div>

          <h2 className="text-[clamp(2.3rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.04em] text-white">
            ¿Por qué nace
            <br />
            el Modelo SP6?
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-8 lg:col-span-8">
          <p className="text-[1.2rem] leading-9 text-slate-200">
            Durante décadas, las organizaciones han intentado mejorar su cadena
            de suministro optimizando procesos individuales. Se implementan
            iniciativas para fortalecer compras, reorganizar almacenes,
            modernizar inventarios o incorporar nuevas tecnologías, esperando
            que cada mejora produzca resultados sostenibles.
          </p>

          <p className="text-[1.2rem] leading-9 text-slate-300">
            Sin embargo, las pérdidas operativas continúan apareciendo porque el
            verdadero problema rara vez reside en un proceso aislado. Surge en
            la interacción entre personas, decisiones, información y operaciones
            que funcionan de manera independiente.
          </p>

          <p className="text-[1.2rem] leading-9 text-slate-300">
            El Modelo SP6 fue desarrollado para abordar esa realidad. Su
            propósito es integrar las capacidades críticas de la cadena de
            suministro dentro de un único marco de gestión que permita generar
            valor de forma consistente, fortalecer la ejecución y reducir las
            pérdidas invisibles que afectan el desempeño de las organizaciones.
          </p>
        </div>
      </div>
    </section>
  );
}