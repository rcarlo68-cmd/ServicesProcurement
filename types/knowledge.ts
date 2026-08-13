export type ResourceType =
  | "newsletter"
  | "case"
  | "research"
  | "whitepaper";

export interface KnowledgeResource {
  id: string;

  slug: string;

  pillar: string;

  type: ResourceType;

  title: string;

  excerpt: string;

  content?: string;

  readingTime: number;

  publishedAt: string;

  author: string;

  image: string;

  featured: boolean;

  linkedinUrl?: string;

  tags: string[];
}