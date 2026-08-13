import { knowledge } from "@/data/knowledge";
import type { KnowledgeResource } from "@/types";

export function searchResources(
  query: string
): KnowledgeResource[] {
  const search = query.toLowerCase();

  return knowledge.filter((resource) => {
    return (
      resource.title.toLowerCase().includes(search) ||
      resource.excerpt.toLowerCase().includes(search) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      )
    );
  });
}