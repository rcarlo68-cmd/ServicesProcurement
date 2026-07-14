type HeroLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  primaryButton?: string;
  secondaryButton?: string;
};

export default function HeroLayout({
  eyebrow,
  title,
  description,
  image,
  primaryButton = "Hablemos",
  secondaryButton = "Conozca el Modelo SP6",
}: HeroLayoutProps) {
  return (
    <section className="grid items-center gap-12 rounded-3xl bg-slate-900 px-8 py-14 text-white lg:grid-cols-2 lg:px-14 lg:py-20">

      {/* TEXTO */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          {eyebrow}
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-200">
          {description}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            {primaryButton}
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900">
            {secondaryButton}
          </button>

        </div>

      </div>

      {/* IMAGEN */}

      <div className="flex justify-center">

        <div className="flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">

          {image ? (

            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />

          ) : (

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              HERO IMAGE
            </span>

          )}

        </div>

      </div>

    </section>
  );
}