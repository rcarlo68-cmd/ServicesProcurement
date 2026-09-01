import Link from "next/link";

import { pillars } from "@/data/pillars";
import { KnowledgeResource } from "@/types/knowledge";

interface ResourceCardProps {
  resource: KnowledgeResource;
}

export default function ResourceCard({
  resource,
}: ResourceCardProps) {
  const pillar = pillars.find(
    (p) => p.id === resource.pillar
  );

  return (
    <article
      className="
        group
        flex
        h-[396px]
        w-full
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        transition-all
        duration-300
        hover:border-[#D4AF37]/40
        hover:bg-white/[0.05]
      "
    >
      {/* Tipo + Pilar */}

      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
          {resource.type}
        </span>

        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
          {pillar?.shortTitle}
        </span>
      </div>

      {/* Título */}

      <h3 className="mt-5 text-xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
        {resource.title}
      </h3>

      {/* Extracto */}

      <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-300">
        {resource.excerpt}
      </p>

      {/* Información + enlace */}

      <div className="mt-auto border-t border-white/10 pt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{resource.author}</span>

          <span>
            {resource.readingTime} MIN
          </span>
        </div>

        {resource.linkedinUrl ? (
          <a
            href={resource.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-medium text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1"
          >
            Leer artículo
            <span className="ml-2">→</span>
          </a>
        ) : (
          <Link
            href={`/knowledge/${resource.pillar}/${resource.slug}`}
            className="mt-4 inline-flex items-center text-sm font-medium text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1"
          >
            Leer artículo
            <span className="ml-2">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}