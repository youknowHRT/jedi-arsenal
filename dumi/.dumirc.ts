import { defineConfig } from "dumi";
export default defineConfig({
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  base: '/jedi-arsenal/', // 后续部署到gh-pages如果不配置路径会找不到资源
  publicPath: '/jedi-arsenal/',
  // base: process.env.NODE_ENV === 'production' ? `/jedi-arsenal-doc/` : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? `/jedi-arsenal-doc/` : '/',
  title: "Jedi Arsenal", // 站点名称
  resolve: {
    docDirs: ["docs"],
    atomDirs: [
      // 在这里修改components的匹配路径
      { type: "hooks", dir: "../packages/hooks/src" },
      { type: "components", dir: "../packages/components/src" },
    ],
    // codeBlockMode: 'passive'
  },
  themeConfig: {
    name: "Jedi Arsenal",
    // nav: [
    //   // dumi的菜单路由
    //   {
    //     title: "指南",
    //     link: "/guide",
    //   },
    //   {
    //     title: "组件",
    //     link: "/hooks/use-latest",
    //   },
    // ],
  },
});
