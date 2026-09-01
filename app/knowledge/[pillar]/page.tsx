import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { pillars } from "@/data/pillars";
import { getResourcesByPillar } from "@/lib/knowledge";

export default async function PillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar } = await params;

  const currentPillar = pillars.find(
    (item) => item.id === pillar
  );

  if (!currentPillar) {
    notFound();
  }

  const resources = getResourcesByPillar(pillar);
  console.log(
  "PILAR:",
  pillar,
  "RECURSOS:",
  resources.length,
  resources.map((r) => ({
    title: r.title,
    pillar: r.pillar,
    publishedAt: r.publishedAt,
  }))
);

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden">

        <Image
          src={currentPillar.image}
          alt={currentPillar.title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 to-[#05070B]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-6 pb-20">

          <div className="max-w-3xl">

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              SP KNOWLEDGE
            </span>

            <h1 className="mt-7 text-[clamp(3.5rem,7vw,6.5rem)] font-light leading-none tracking-[-0.05em]">
              {currentPillar.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              {currentPillar.description}
            </p>

            <div className="mt-10 inline-flex rounded-full border border-[#D4AF37]/40 bg-black/20 px-6 py-3 text-sm text-[#D4AF37] backdrop-blur-sm">
              {resources.length}{" "}
              {resources.length === 1
                ? "recurso publicado"
                : "recursos publicados"}
            </div>

          </div>

        </div>

      </section>

      {/* RECURSOS */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">

          {resources.map((resource) => (

            <article
              key={resource.id}
              className="
                group
                flex
                h-full
                min-h-[395px]
                flex-col
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                transition-all
                duration-300
                hover:border-[#D4AF37]/30
                hover:bg-white/[0.05]
              "
            >

              {/* Tipo + tiempo */}

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
                  {
                    {
                      newsletter: "NEWSLETTER",
                      case: "CASO REAL",
                      research: "INVESTIGACIÓN",
                      whitepaper: "WHITE PAPER",
                    }[resource.type]
                  }
                </span>

                <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  {resource.readingTime} MIN
                </span>

              </div>

              {/* Título */}

              <h2 className="mt-5 text-2xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                {resource.title}
              </h2>

              {/* Extracto */}

              <p className="mt-4 line-clamp-4 flex-1 text-sm leading-6 text-slate-300">
                {resource.excerpt}
              </p>

              {/* Información + enlace */}

              <div className="mt-5 border-t border-white/10 pt-4">

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{resource.author}</span>
                  <span>{resource.publishedAt}</span>
                </div>

                {resource.linkedinUrl ? (
                  <a
                    href={resource.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Leer artículo
                    <span className="ml-2">→</span>
                  </a>
                ) : (
                  <Link
                    href={`/knowledge/${resource.pillar}/${resource.slug}`}
                    className="mt-4 inline-flex text-sm font-medium text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Leer artículo
                    <span className="ml-2">→</span>
                  </Link>
                )}

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}