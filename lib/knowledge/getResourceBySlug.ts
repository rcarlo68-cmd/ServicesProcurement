import { knowledge } from "@/data/knowledge";
import type { KnowledgeResource } from "@/types";

export function getResourceBySlug(
  slug: string
): KnowledgeResource | undefined {
  return knowledge.find(
    (resource) => resource.slug === slug
  );
}