export type Link = {
  label: string;
  /**
   * @format url
   */
  href: string;
};

export type Project = {
  name: string;
  yearReleased: number;
  description: string;
  cover: string;
  links: Link[];
};

export type Article = {
  title: string;
  description: string;
  /**
   * @format url
   */
  url: string;
  /**
   * @format url
   */
  social_image: string;
};

export type ArticleList = Article[];

export type Config = {
  name: string;
  roles: string[];
  social: Link[];
  /**
   * @format url
   */
  aboutMe: string;
  /**
   * @format url
   */
  avatar: string;
  projects: Project[];
  devToUser?: string;
};
