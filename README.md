# Vanilla Fortress

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/vanillafortress/vanillafortress.github.io/deploy.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=%23fdf9cd&labelColor=%23f5722c&color=%23fdf9cd)

The official website for Vanilla Fortress, a community hub for finding and
seeding vanilla Team Fortress 2 servers running the classic Quickplay ruleset.

[Visit Vanilla Fortress](https://vanillafortress.github.io)

## Development

The project requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Astro will print the local development URL when the server starts.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run build` | Build the production site. |
| `npm run preview` | Preview the production build locally. |
| `npm run add:server` | Add a server to the server directory. |

## Contributing

See [Adding servers and communities](src/data/servers/README.md) for the server
directory workflow.

## Licensing

All source code files in the `src/` and `scripts/` directories are licensed under the MIT License.

See the [LICENSE](LICENSE) for details.

> [!IMPORTANT]
>
> **The TF2 Fonts are owned by the TF Team and Valve Corporation.**
>
> **VFTF does not own them.**