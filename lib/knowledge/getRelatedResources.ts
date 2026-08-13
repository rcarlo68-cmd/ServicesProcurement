import { knowledge } from "@/data/knowledge";
import type { KnowledgeResource } from "@/types";

export function getRelatedResources(
  pillar: string,
  currentId: string,
  limit = 3
): KnowledgeResource[] {
  return knowledge
    .filter(
      (resource) =>
        resource.pillar === pillar &&
        resource.id !== currentId
    )
    .slice(0, limit);
}