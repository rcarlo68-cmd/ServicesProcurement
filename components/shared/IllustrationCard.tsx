type IllustrationCardProps = {
  title: string;
  description: string;
  image?: string;
};

export default function IllustrationCard({
  title,
  description,
  image,
}: IllustrationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Imagen */}

      <div className="h-44 overflow-hidden bg-slate-100">

        {image ? (

          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />

        ) : (

          <div className="flex h-full items-center justify-center bg-slate-100">

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              ILUSTRACIÓN
            </span>

          </div>

        )}

      </div>

      {/* Contenido */}

      <div className="p-8">

        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

      </div>

    </article>
  );
}