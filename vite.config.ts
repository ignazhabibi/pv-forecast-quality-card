import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  esbuild: {
    legalComments: "eof",
  },
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "pv-forecast-quality-card.js",
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
