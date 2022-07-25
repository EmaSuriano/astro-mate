export type Link = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  date: Date;
  description: string;
  cover: string;
  links: Link[];
};
