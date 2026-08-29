import type { CommunityDefinition } from "../core/types";

export default {
  name: "Vanilla Fortress",
  servers: [
    {
      name: "TF2C NYC",
      region: "na",
      ip: "134.122.125.240:27015",
      country: "us",
      is_tf2c: true,
    }
  ],
} satisfies CommunityDefinition;
