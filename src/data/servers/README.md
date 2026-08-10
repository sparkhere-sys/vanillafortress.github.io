# Adding servers and communities

The server directory is defined in TypeScript under [`communities`](./communities). 
Community files are loaded automatically and displayed alphabetically by community name.

## Assisted workflow

Run the helper to add a community or append servers to an existing community:

```sh
npm run add:server
```

The helper validates the community name, links, region, country, address format,
and port range before writing changes. After it updates the server directory,
verify the site:

```sh
npm run check
npm run build
```

## Add a server to an existing community

You can also edit the TypeScript files manually.

1. Open the community's file in [`communities`](./communities).
2. Add the server to its `servers` array:

   ```ts
   {
     name: "Example Server",
     region: "eu",
     ip: "server.example.com:27015",
     country: "de",
   }
   ```

3. Run the checks and commit the community file.

## Add a community

Create a `kebab-case` TypeScript file in [`communities`](./communities), such as
`example-community.ts`:

```ts
import type { CommunityDefinition } from "../core/types";

export default {
  name: "Example Community",
  links: {
    website: "https://example.com",
    steam: "https://steamcommunity.com/groups/example",
    discord: "https://discord.gg/example",
  },
  servers: [
    {
      name: "Example Community EU",
      region: "eu",
      ip: "server.example.com:27015",
      country: "de",
    },
  ],
} satisfies CommunityDefinition;
```

All links are optional. Remove the `links` object or any unused entries rather
than leaving empty strings.

Then run:

```sh
npm run check
npm run build
```

## Server fields

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Display name with no leading or trailing whitespace. |
| `region` | Yes | One of `eu`, `na`, `sa`, `asia`, `oce`, `af`, or `me`. |
| `ip` | Yes | Unique address in `host:port` format. Bracketed IPv6 is supported. |
| `country` | Yes | Lowercase two-letter country code used for the server flag. |

Community names and server addresses must be unique across the directory. Each
community must contain at least one server. Community links must use HTTP or
HTTPS.
