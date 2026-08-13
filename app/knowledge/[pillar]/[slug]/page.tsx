import Image from "next/image";
import { notFound } from "next/navigation";

import { knowledge } from "@/data/knowledge";
import { pillars } from "@/data/pillars";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{
    pillar: string;
    slug: string;
  }>;
}) {
  const { pillar, slug } = await params;

  const resource = knowledge.find(
    (item) =>
      item.pillar === pillar &&
      item.slug === slug
  );

  if (!resource) {
    notFound();
  }

  const currentPillar = pillars.find(
    (item) => item.id === pillar
  );

  if (!currentPillar) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* HERO DEL ARTÍCULO */}
      <section className="relative overflow-hidden">

        <div className="relative h-[540px] w-full">

          <Image
            src={currentPillar.image}
            alt={currentPillar.title}
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-[#05070B]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/30" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end px-6 pb-14 lg:px-10 xl:px-12">

            <div className="max-w-3xl">

              <div className="flex flex-wrap items-center gap-4">

                <span className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  {
                    {
                      newsletter: "NEWSLETTER",
                      case: "CASO REAL",
                      research: "INVESTIGACIÓN",
                      whitepaper: "WHITE PAPER",
                    }[resource.type]
                  }
                </span>

                <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  {currentPillar.shortTitle}
                </span>

              </div>

              <h1 className="mt-6 text-[clamp(2.6rem,4.5vw,4.2rem)] font-light leading-[1.04] tracking-[-0.04em]">
                {resource.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                {resource.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">

                <span>{resource.author}</span>

                <span>
                  {resource.readingTime} MIN
                </span>

                <span>
                  {resource.publishedAt}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Fade */}
<div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

      </section>

      {/* CONTENIDO */}
      <article className="mx-auto max-w-[1200px] px-6 pb-24">

        <div className="border-t border-white/10 pt-12">

          {resource.content && (
            <div className="whitespace-pre-line text-lg leading-9 text-slate-300">
              {resource.content}
            </div>
          )}

        </div>

        {/* TAGS */}
        {resource.tags.length > 0 && (
          <div className="mt-14 flex flex-wrap gap-2 border-t border-white/10 pt-8">

            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500"
              >
                {tag}
              </span>
            ))}

          </div>
        )}

      </article>

    </main>
  );
}