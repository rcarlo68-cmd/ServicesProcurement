interface PillarHeroProps {
  title: string;
  description: string;
  totalResources: number;
}

export default function PillarHero({
  title,
  description,
  totalResources,
}: PillarHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">

      <div className="max-w-4xl">

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          SP KNOWLEDGE
        </span>

        <h1 className="mt-8 text-[clamp(3rem,6vw,5.5rem)] font-light leading-none tracking-[-0.05em] text-white">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>

        <div className="mt-10 inline-flex items-center rounded-full border border-[#D4AF37]/30 px-6 py-3 text-[#D4AF37]">

          {totalResources}

          <span className="ml-2">
            {totalResources === 1
              ? "recurso publicado"
              : "recursos publicados"}
          </span>

        </div>

      </div>

    </section>
  );
}