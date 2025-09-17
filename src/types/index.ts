export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageHint: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageHint: string;
};
