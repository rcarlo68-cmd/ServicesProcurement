export interface SP6Hero {
  title: string;
  subtitle: string;
  description: string;
}

export interface SP6Section {
  title: string;
  paragraphs: string[];
}

export interface SP6Pillar {
  id: string;
  title: string;
  description: string[];
}

export interface SP6MethodologyStep {
  step: number;
  title: string;
  description: string[];
  bullets?: string[];
}

export interface SP6Benefit {
  title: string;
  description: string;
}

export interface SP6Industry {
  title: string;
  description: string;
}

export interface SP6CTA {
  title: string;
  description: string;
  button: string;
}

export interface SP6Content {
  hero: SP6Hero;
  introduction: SP6Section;
  origin: SP6Section;
  pillars: {
    title: string;
    introduction: string[];
    items: SP6Pillar[];
    conclusionTitle: string;
    conclusion: string[];
  };
  methodology: {
    title: string;
    introduction: string[];
    steps: SP6MethodologyStep[];
    conclusionTitle: string;
    conclusion: string[];
  };
  benefits: {
    title: string;
    introduction: string[];
    items: SP6Benefit[];
    conclusionTitle: string;
    conclusion: string[];
  };
  industries: {
    title: string;
    introduction: string[];
    items: SP6Industry[];
  };
  cta: SP6CTA;
}