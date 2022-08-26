export type Link = {
  label: string;
  /**
   * @format url
   */
  href: string;
};

export type SocialLink = Link & {
  icon: string;
};

export type Project = {
  name: string;
  yearReleased: number;
  description: string;
  /**
   * @format url
   */
  cover: string;
  /**
   * @format url
   */
  href: string;
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
  social: SocialLink[];
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
