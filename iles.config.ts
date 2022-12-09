import { defineConfig } from "iles";
import Unocss from "unocss/vite";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  svelte: true,
  siteUrl: "https://madebyzen.js.org",
  vite: {
    optimizeDeps: {
      include: ["svelte"],
    },
    plugins: [Unocss({ transformers: [transformerDirectives()] })],
  },
});
