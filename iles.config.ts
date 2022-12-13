import { defineConfig } from "iles";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  svelte: true,
  siteUrl: "https://madebyzen.js.org",
  vite: {
    optimizeDeps: {
      include: ["svelte"],
    },
    plugins: [WindiCSS()],
  },
});
