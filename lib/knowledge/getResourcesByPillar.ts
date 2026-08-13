import { knowledge } from "@/data/knowledge";
import type { KnowledgeResource } from "@/types";

export function getResourcesByPillar(
  pillar: string
): KnowledgeResource[] {
  return knowledge.filter(
    (resource) => resource.pillar === pillar
  );
}