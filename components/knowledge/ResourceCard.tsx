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
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.05]">

      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
          {resource.type}
        </span>

        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
          {pillar?.shortTitle}
        </span>
      </div>

      <h3 className="mt-8 text-2xl font-light leading-snug text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
        {resource.title}
      </h3>

      <p className="mt-6 flex-1 leading-8 text-slate-300">
        {resource.excerpt}
      </p>

      <div className="mt-8 border-t border-white/10 pt-6">

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{resource.author}</span>
          <span>{resource.readingTime} MIN</span>
        </div>

        <Link
          href={`/knowledge/${resource.pillar}/${resource.slug}`}
          className="mt-6 inline-flex items-center text-sm font-medium text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1"
        >
          Leer artículo
          <span className="ml-2">→</span>
        </Link>

      </div>
    </article>
  );
}