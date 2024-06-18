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
    description: 'React 组件和钩子合集',
    sidebarGroupModePath: ['/hooks', '/guide', '/components'],
    features: [
      {
        title: '内置全文搜索',
        details:
          '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。'
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
