import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [sveltekit(), icons()],
  server: {
    port: 2020,
  },
});
