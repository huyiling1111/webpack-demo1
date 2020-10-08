# webpack-demo1

# 配置两种模式需求

- development 开发模式
  1. 执行命令 yarn start 和配置默认文件 webpack.config.js
  2. 把 css 生成为 style 标签， webpack-dev-server 运行在本地服务器模拟
- production 生产模式
  1. 执行命令 yarn build 和配置文件 webpack.config.prod.js
  2. 生成 dist 文件和把 css 单独抽成文件，丢给服务器
