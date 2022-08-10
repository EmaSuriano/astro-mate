import { Config, Link } from "../types";

export const getHeaderSections = ({ projects, devToUser }: Config): Link[] => {
  const sections = [
    {
      label: "About me",
      href: "#about",
    },
  ];

  if (projects.length > 0) {
    sections.push({
      label: "Projects",
      href: "#projects",
    });
  }

  if (Boolean(devToUser)) {
    sections.push({
      label: "Writing",
      href: "#writing",
    });
  }

  return sections;
};
