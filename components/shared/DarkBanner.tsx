type DarkBannerProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function DarkBanner({
  eyebrow,
  title,
  subtitle,
}: DarkBannerProps) {
  return (
    <section className="mt-28 rounded-3xl bg-slate-900 px-10 py-20 text-white">

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          {eyebrow}
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {subtitle}
        </p>

      </div>

    </section>
  );
}