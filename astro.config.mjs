import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";

export default defineConfig({
  site: "https://sparkhere-sys.github.io",
  base: "/vftf/",

  vite: {
    plugins: [
      yaml()
    ]
  }
});