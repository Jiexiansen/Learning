const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts', // 入口文件
  output: {
    filename: 'app.js' // 输出文件名
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'] // 扩展名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader' // loader
          }
        ],
        exclude: /node_modules/ // 排除
      }
    ]
  },
  plugins: [
    // 插件
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html' // 通过一个模板帮助生成网站首页，把输出文件自动嵌入到这个页面中
    })
  ]
}
