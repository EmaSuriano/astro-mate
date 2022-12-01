import type { Config, Link } from "../types";

export const SECTIONS = {
  about: "About me",
  projects: "Projects",
  writing: "Writing",
};

export type Section = keyof typeof SECTIONS;

export const getSectionLink = (key: Section): Link => ({
  href: `#${key}`,
  label: SECTIONS[key],
});

export const getSections = ({ projects, devToUser }: Config) => {
  const sections: Section[] = ["about"];

  if (projects.length > 0) {
    sections.push("projects");
  }

  if (devToUser) {
    sections.push("writing");
  }

  return sections;
};
