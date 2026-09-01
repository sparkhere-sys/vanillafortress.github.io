import type { CommunityDefinition } from "../core/types";

export default {
  name: "Pipeline.tf",
  links: {
    steam: "https://steamcommunity.com/groups/plr_pipeline",
    discord: "https://discord.gg/YYU6qhkeV",
  },
  servers: [
    {
      name: "Pipeline.tf (EU)",
      slug: "pipeline-eu",
      region: "eu",
      ip: "170.23.138.191:22208",
      country: "de",
    },
    {
      name: "Pipeline.tf (NA)",
      slug: "pipeline-na",
      region: "na",
      ip: "170.23.69.133:22402",
      country: "us",
    },
  ],
} satisfies CommunityDefinition;
