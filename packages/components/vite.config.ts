import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
// import { libInjectCss } from 'vite-plugin-lib-inject-css';
const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts({
      exclude: ["node_modules", "vite.config.ts", "src/**/*.stories.@(js|jsx|mjs|ts|tsx)","src/**/demo"],
      entryRoot: "src",
      // tsconfigPath: "./tsconfig.prod.json",
      insertTypesEntry: true,
      // outDir: "dist/types",
      outDir: ["build/es", "build/lib"],
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: false,
    // cssCodeSplit: true,
    lib: {
      // entry: "index.ts",
      entry: resolvePath("src/index.ts"), // 配置库入口
      // name: "JediArsenalUI",
      // fileName: format => `jedi-arsenal-ui.${format}.js`,
      // formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react","react-dom","dayjs", "classnames","react-transition-group","@jedi-arsenal/icons"],
      // output: {
      //   globals: {
      //     react: "react",
      //     "react-dom": "react-dom",
      //   },
      // },
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          name: "JediArsenalUI",
          dir: "build/dist",
        },
        {
          format: "es",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "build/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "build/lib",
        },
      ],
    }
  },
});
