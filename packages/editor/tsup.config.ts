import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/advance-editor.tsx",
  },
  banner: {
    js: "'use client'",
  },
  minify: true,

  format: ["cjs", "esm"],
  dts: true,
  clean: true,

  external: ["react", "react-dom"],
  ...options,
}));
