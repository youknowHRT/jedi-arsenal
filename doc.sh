# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm dumi:build

# 进入生成的文件夹
cd dumi/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# https://gitee.com/youknowhrt/jedi-arsenal.git
# https://github.com/youknowHRT/jedi-arsenal.git

# git push -f git@github.com:youknowHRT/jedi-arsenal.git master:gh-pages
git push -f git@gitee.com:youknowhrt/jedi-arsenal.git master:gh-pages
cd -