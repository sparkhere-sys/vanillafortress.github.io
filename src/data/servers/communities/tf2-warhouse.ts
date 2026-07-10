import type { CommunityDefinition } from "../core/types";

export default {
  name: "TF2 Warhouse",
  links: {
    steam: "https://steamcommunity.com/groups/thewarhousegroup",
    discord: "https://discord.gg/eWnbVvYGM9",
  },
  servers: [
    {
      name: "TF2 Warhouse",
      region: "na",
      ip: "warhouse.gamergod.net:22247",
    },
  ],
} satisfies CommunityDefinition;
