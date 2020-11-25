# DEMO

1. `tsc --init` 初始化配置
2. `npm i webpack webpack-cli webpack-dev-server -D` 安装 webpack
3. `npm i ts-loader typescript -D` 安装 ts-loader
4. `npm i html-webpack-plugin -D` 安装插件（作用：通过一个模板帮助生成网站首页，把输出文件自动嵌入到这个页面中）
5. `npm i clean-webpack-plugin -D` 生产环境安装插件（作用：每次成功构建之后，清空 dist 目录, 因为有时候为了避免缓存需要在文件后加入 hash，在多次构建之后就会产生很多无用文件）
6. `npm i webpack-merge -D` 安装插件（将两个配置文件合并）
7. 如下

```JSON
"scripts": {
  "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js"
}
/**
 * "start"
 * 启用命令需要用到 webpack-dev-server
 * --mode：指定一个 mode 参数（将当前的环境变量设置为development）
 * --config：指定配置文件

 * "build"
 * 构建生产环境的脚本
 */
```
