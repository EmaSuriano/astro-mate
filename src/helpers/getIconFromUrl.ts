// Map all the icons for your link for dynamic icons
const SITE_ICON_MAP = [
  { domain: "github.com", icon: "ri:github-line" },
  { domain: "gitlab.com", icon: "ri:gitlab-line" },
  { domain: "bitbucket.com", icon: "tabler:brand-bitbucket" },
  { domain: "twitter.com", icon: "ri:twitter-line" },
];

const DEFAULT_ICON = "ri:earth-line";

export const getIconFromUrl = (url: string) => {
  const found = SITE_ICON_MAP.find((site) => url.includes(site.domain));
  return found ? found.icon : DEFAULT_ICON;
};
