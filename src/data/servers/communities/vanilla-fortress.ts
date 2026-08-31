import type { CommunityDefinition } from "../core/types";

export default {
  name: "Vanilla Fortress",
  servers: [
    {
      name: "Vanilla Fortress TF2C (NYC)",
      slug: "vftf-tf2c",
      region: "na",
      ip: "209.222.101.211:5688",
      country: "us",
      is_tf2c: true,
    }
  ],
} satisfies CommunityDefinition;
