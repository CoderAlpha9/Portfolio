import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://coderalpha9.github.io",
  base: "/Portfolio",
  output: "static",
  outDir: "./docs",
  trailingSlash: "always"
});
