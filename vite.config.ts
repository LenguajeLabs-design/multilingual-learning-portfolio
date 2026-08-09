import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/multilingual-learning-portfolio/",
  plugins: [react()],
});
