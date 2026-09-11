import type { CommunityDefinition } from "../core/types";

export default {
  name: "arctic.tf",
  links: {
    website: "https://beta.arctic.tf",
    steam: "https://steamcommunity.com/groups/arctic-tf",
    discord: "https://discord.gg/wVfbNvqRKA",
  },
  servers: [
    {
      name: "arctic.tf - Vanilla+ (Singapore)",
      slug: "arctic-vp-sg",
      ip: "202.1.31.153:27016",
      region: "asia",
      country: "sg",
    },
    {
      name: "arctic.tf - Reverts (Singapore)",
      slug: "arctic-r-sg",
      ip: "202.1.31.153:27015",
      region: "asia",
      country: "sg",
    },
  ]
} satisfies CommunityDefinition;
