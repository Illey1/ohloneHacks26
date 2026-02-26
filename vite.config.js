import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Serve assets from the site root — required when using a custom domain
  base: "/",
  plugins: [react()],
});
