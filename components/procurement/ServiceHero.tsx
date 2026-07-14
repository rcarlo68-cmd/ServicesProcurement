type Props = {
  section: string;
  title: string;
  subtitle: string;
};

export default function ServiceHero({
  section,
  title,
  subtitle,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {section}
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-10 max-w-4xl text-xl leading-9 text-slate-600">
          {subtitle}
        </p>

      </div>

    </section>
  );
}