const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin() // 作用：每次成功构建之后，清空 dist 目录, 因为有时候为了避免缓存需要在文件后加入hash，在多次构建之后就会产生很多无用文件
  ]
}
