module.exports = {
  devtool: 'cheap-module-eval-source-map'
}

/**
 * 注释：
 *
 * devtool: 'cheap-module-eval-source-map':官方推荐使用的配置
 *
 * cheap：忽略文件的列信息
 * module：定位到tsc源码，而不是经过loader转义过的js源码
 * eval-source-map：会将SourceMap以DataUrl的形式打包到文件中，它的重编译速度很快，不用担心性能问题
 */
