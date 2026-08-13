"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipo de organizaciones pueden beneficiarse de Services Procurement?",
    answer:
      "Trabajamos con organizaciones que buscan fortalecer su cadena de suministro mediante mejores prácticas en procurement, logística, almacenes, auditoría logística, transformación digital y desarrollo del talento. Nuestra experiencia proviene principalmente del sector minero e industrial, aunque la metodología puede adaptarse a otros sectores.",
  },
  {
    question: "¿La primera conversación tiene algún costo?",
    answer:
      "No. La primera reunión tiene como objetivo comprender el contexto de la organización, identificar los principales desafíos y evaluar si existe una oportunidad real para generar valor mediante nuestra intervención.",
  },
  {
    question: "¿Los proyectos pueden desarrollarse de manera remota?",
    answer:
      "Sí. Dependiendo del alcance, los proyectos pueden ejecutarse de manera presencial, remota o mediante un modelo híbrido, manteniendo el mismo nivel de acompañamiento y seguimiento.",
  },
  {
    question: "¿El Modelo SP6 puede aplicarse parcialmente?",
    answer:
      "Sí. Aunque el Modelo SP6 fue diseñado como un marco integral, también puede implementarse sobre capacidades específicas como procurement, almacenes, auditoría logística o transformación digital, según las necesidades de cada organización.",
  },
  {
    question: "¿También realizan capacitación y mentoring?",
    answer:
      "Sí. Además de consultoría, desarrollamos programas de capacitación, mentoring ejecutivo, conferencias y acompañamiento especializado para fortalecer las capacidades de los equipos de trabajo.",
  },
  {
    question: "¿Cómo inicia un proyecto?",
    answer:
      "Todo proyecto comienza con un diagnóstico inicial que permite comprender la situación actual, definir prioridades y establecer una hoja de ruta alineada con los objetivos estratégicos de la organización.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28 lg:py-36">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 lg:px-10">

        {/* Header */}

        <div className="text-center">

          <div className="mb-8 flex items-center justify-center gap-4">

            <div className="h-px w-16 bg-[#D4AF37]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              PREGUNTAS FRECUENTES
            </span>

            <div className="h-px w-16 bg-[#D4AF37]" />

          </div>

          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight tracking-[-0.04em] text-white">
            Antes de conversar,
            <br />
            quizá quiera saber esto.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Estas son algunas de las consultas que recibimos con mayor
            frecuencia antes de iniciar una conversación con nuestros clientes.
          </p>

        </div>

        <div className="mt-20 space-y-5">
                      {faqs.map((faq, index) => {
            const expanded = open === index;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(expanded ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <span className="pr-6 text-xl font-light text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={[
                      "h-6 w-6 shrink-0 text-[#D4AF37] transition-transform duration-300",
                      expanded ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  className={[
                    "grid transition-all duration-300",
                    expanded
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 leading-8 text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
              {/* Final CTA */}

      <div className="mt-28 text-center">

        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <h3 className="mt-12 text-4xl font-light text-white">
          ¿Prefiere conversar directamente?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Si ya conoce el desafío que desea abordar, estaremos encantados de
          escucharle y explorar juntos la mejor forma de generar valor para su
          organización.
        </p>

        <a
          href="https://wa.me/51953449850?text=Hola%20Ricardo,%20quisiera%20coordinar%20una%20reunión."
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            h-14
            items-center
            justify-center
            rounded-full
            bg-[#D4AF37]
            px-10
            text-[15px]
            font-semibold
            text-[#111111]
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:brightness-110
          "
        >
          Hablar por WhatsApp
        </a>

      </div>

      </div>

    </section>
  );
}