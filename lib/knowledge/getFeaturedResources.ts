import type { KnowledgeResource } from "@/types";
import { knowledge } from "@/data/knowledge";

export function getFeaturedResources(): KnowledgeResource[] {
  return knowledge.filter((resource) => resource.featured);
}