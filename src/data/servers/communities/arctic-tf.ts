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
      name: "Vanilla Hong Kong",
      region: "asia",
      ip: "169.254.11.190:38048",
      country: "hk",
    },
    {
      name: "Vanilla Singapore",
      region: "asia",
      ip: "169.254.73.74:46048",
      country: "sg",
    },
    {
      name: "VanillaPlus Singapore",
      region: "asia",
      ip: "51.79.134.205:27015",
      country: "sg",
    },
    {
      name: "VanillaPlus Singapore 2",
      region: "asia",
      ip: "169.254.105.114:49208",
      country: "sg",
    },
    {
      name: "Reverts Hong Kong",
      region: "asia",
      ip: "169.254.39.124:57576",
      country: "hk",
    },
    {
      name: "Reverts Seoul",
      region: "asia",
      ip: "169.254.216.183:55944",
      country: "kr",
    },
    {
      name: "Reverts Singapore",
      region: "asia",
      ip: "157.254.235.34:27015",
      country: "sg",
    },
    {
      name: "Reverts Tokyo",
      region: "asia",
      ip: "169.254.114.71:31368",
      country: "jp",
    },
    {
      name: "Reverts Singapore 2",
      region: "asia",
      ip: "169.254.93.206:46256",
      country: "sg",
    },
  ],
} satisfies CommunityDefinition;
