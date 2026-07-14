type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-6 text-lg leading-8 text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}