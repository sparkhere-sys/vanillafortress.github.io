import type { CommunityDefinition } from "../core/types";

export default {
  name: "Zesty's",
  links: {
    website: "https://zestyjesus.com",
    discord: "https://discord.gg/CEKfaV66YH",
  },
  servers: [
    {
      name: "Zesty's (EU)",
      slug: "zesty-eu",
      region: "eu",
      ip: "185.107.96.14:27015",
      country: "de",
    },
    {
      name: "Zesty's (NA)", 
      slug: "zesty-na",
      region: "na",
      ip: "74.91.122.3:27015",
      country: "us",
    },
  ],
} satisfies CommunityDefinition;
