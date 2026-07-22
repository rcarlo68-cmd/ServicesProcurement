import { origin } from "@/data/sp6";

export default function Origin() {
  return (
    <section
      id="origin"
      className="border-b border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Contexto
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {origin.title}
          </h2>
        </div>

        <div className="space-y-8">
          {origin.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-8 text-slate-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}