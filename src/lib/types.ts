export type LinkItem = {
  label: string;
  url: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCategory =
  | "AI / ML"
  | "Deep Learning"
  | "Software Systems"
  | "Data Analytics"
  | "Full Stack"
  | "Quantitative"
  | "Engineering";

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  description: string[];
  categories: ProjectCategory[];
  technologies: string[];
  featured?: boolean;
  priority?: number;
  outcome?: string;
  image?: MediaItem;
  links?: LinkItem[];
};

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  highlight?: string;
  description: string;
  group: "Major" | "Certification" | "Academic";
  image?: MediaItem;
  links?: LinkItem[];
};

export type ExperienceItem = {
  title: string;
  organisation: string;
  period: string;
  type: "Professional" | "POR" | "Campus";
  description: string[];
  tags?: string[];
  image?: MediaItem;
  links?: LinkItem[];
};

export type ResearchItem = {
  title: string;
  status: string;
  date: string;
  kind: "Patent" | "Publication" | "Article";
  description: string;
  contributors?: string;
  image?: MediaItem;
  links?: LinkItem[];
};

export type PostItem = {
  title: string;
  date: string;
  category: string;
  summary: string;
  url?: string;
  image?: MediaItem;
};
