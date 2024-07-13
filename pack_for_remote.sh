time=$(date +'%Y%m%d-%H%M%S')
ip=root@39.99.237.46
fileName=jedi-arsenal-$time.tag.gz
detailPath=/www/jedi-arsenal
function title {
  echo
  echo "###############################################################################"
  echo "##🎈 $1"
  echo "###############################################################################"
  echo
}

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm dumi:build

# 进入生成的文件夹
cd dumi/dist

title '压缩文件'
tar -czvf $fileName --exclude=$fileName .

title '清空远程文件夹'
ssh $ip "rm -rf $detailPath/*"

title '上传文件'
scp $fileName $ip:$detailPath

title '上传中...'
# 等待文件上传并检查文件存在性
while true; do
  if ssh $ip "[ -f $detailPath/$fileName ]"; then
    break
  else
    sleep 1
  fi
done
title '上传完成'

title '解压文件...'
ssh $ip "cd $detailPath; tar -xzf $fileName"

while true; do
  if ssh $ip "[ -f $detailPath/index.html ]"; then
    break
  else
    sleep 1
  fi
done
title '解压完毕'






