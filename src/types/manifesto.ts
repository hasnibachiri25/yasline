export interface CycleStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  examples: string[];
}

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  quote: string;
  points: string[];
  image: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ReflectionOption {
  id: string;
  title: string;
  category: string;
  description: string;
}
