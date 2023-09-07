#!/bin/bash

# 如果第一个参数是"dev"，则执行下面的语句
if [ "$1" = "dev" ]; then
  # 检测当前目录是否存在node_modules文件夹
  if [ ! -d "node_modules" ]; then
    # 如果不存在，则安装依赖
    npm install
  fi

  npm run start
fi

