import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["node_modules", "vite.config.ts"],
      entryRoot: "./src",
      // tsconfigPath: "./tsconfig.prod.json",
      insertTypesEntry: true,
      outDir: "./dist/types",
      // insertTypesEntry: false, // 插入TS 入口
      // copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      // entry: "index.ts",
      entry: resolvePath("src/index.ts"), // 配置库入口
      name: "JediArsenalHooks",
      fileName: format => `jedi-arsenal-hooks.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react","react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
      // output: [
      //   {
      //     format: "es",
      //     entryFileNames: "[name].js",
      //     exports: "named",
      //     name: "JediArsenalUI",
      //     dir: "./build/dist",
      //   },
      //   {
      //     format: "es",
      //     entryFileNames: "[name].js",
      //     exports: "named",
      //     preserveModules: true,
      //     preserveModulesRoot: "./",
      //     dir: "./build/es",
      //   },
      //   {
      //     format: "cjs",
      //     entryFileNames: "[name].js",
      //     exports: "named",
      //     preserveModules: true,
      //     preserveModulesRoot: "packages/components",
      //     dir: "./build/lib",
      //   },
      // ],
    },
  },
});
