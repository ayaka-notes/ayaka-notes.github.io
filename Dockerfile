# 使用 Dockerfile 构建 React 项目
# 命令：docker build -t musicminion/e5-frontend:next .
# Base image
FROM node:18.17.0 as build

# Set the working directory
WORKDIR /app

# 拷贝 React 项目文件到工作目录中
COPY . .

# GENERATE_SOURCEMAP 环境变量设置为 false，不生成 source map 文件
ENV GENERATE_SOURCEMAP=false

# 安装依赖
RUN npm install

# 构建 Angular 项目
RUN npm run build

# 用Nginx镜像作为基础镜像
FROM nginx:1.21.3-alpine

COPY --from=build /app/build /usr/share/nginx/html

# 拷贝 Nginx 配置文件
COPY e5-frontend.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]


