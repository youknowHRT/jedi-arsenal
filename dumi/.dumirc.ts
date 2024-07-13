import { defineConfig } from "dumi";
import path from 'path';
export default defineConfig({
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  base: '/jedi-arsenal/', // 后续部署到gh-pages如果不配置路径会找不到资源
  publicPath: '/jedi-arsenal/',

  // base: process.env.NODE_ENV === 'production' ? `/jedi-arsenal-doc/` : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? `/jedi-arsenal-doc/` : '/',

  //服务器部署80端口
  // base: '/',
  // publicPath: '/',
  title: "Jedi Arsenal", // 站点名称
  resolve: {
    docDirs: ["docs"],
    atomDirs: [
      { type: "hooks", dir: "../packages/hooks/src" },
      { type: "components", dir: "../packages/components/src" },
    ],
    // 配置入口文件路径，API 解析将从这里开始,注释掉，待完善
    // entryFile: '../packages/components/src/index.ts',
  },
  // apiParser: {},
  themeConfig: {
    name: "Jedi Arsenal",
    apiHeader: false,
    description: 'React 组件和hooks库',
    sidebarGroupModePath: ['/hooks', '/guide', '/components'],
    features: [
      {
        title: '支持 Typescript',
        details:
          '使用 Typescript 构建，提供良好的类型支持'
      },
      {
        title: '按需引入',
        details:
          '支持直接按需引入无需配置插件'
      },
      {
        title: '仅供学习使用',
        details:
          '倾向于React库的学习，请勿用于实际生产项目'
      },
    ]
  },
  alias: {
    '@jedi-arsenal/hooks': path.join(__dirname, '../packages/hooks/src/index.ts'),
    '@jedi-arsenal/components': path.join(__dirname, '../packages/components/src/index.ts'),
    // 'dayjs': path.join(__dirname, '../node_modules/dayjs'), //如果mfsu为默认值时需要添加
  },
  mfsu: false,
});
