import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolvePath = (str: string) => path.resolve(__dirname, str)
export default defineConfig({
  plugins: [
    react(),
  ],
  build:{
    sourcemap: true,
    lib: {
      // entry: "index.tsx",
      entry: resolvePath('packages/index.tsx'), // 配置库入口
      name: "JediArsenalUI",
      fileName: "jedi-arsenal-ui",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  }
})