import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RpgDataTools",
      formats: ["es", "cjs"],
      fileName: (format) => `rpgdatatools.${format}.js`,
    },
    rollupOptions: {
      external: ["@sigureya/rpgtypes"],
      output: {
        globals: {
          "@sigureya/rpgtypes": "RpgTypes",
        },
      },
    },
  },
});
