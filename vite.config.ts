import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "RpgDataTools",
      fileName: (format) => `rpgdatatools.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [], // 必要に応じて外部モジュールを指定
    },
  },
});
