import Link from "next/link";

import { cta } from "@/data/sp6";

export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
          Services Procurement
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {cta.title}
        </h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          {cta.description.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-8 text-slate-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100"
          >
            {cta.button}
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-slate-400 hover:bg-slate-800"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}