// node内置的模块用来去设置路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除之前打包的文件

module.exports = { // commonJS规范
  entry: './src/js/entry.js', // 入口，当前项目的入口文件的配置
  output: {   // 出口/输出的配置
    filename: 'bundle.js', // 输出的文件名
    // publicPath: 'js/',  // 但在设置为index.html提供资源服务的时候带有强制性
    path: path.resolve(__dirname, 'dist/js') // resolve() 方法调用就是去设置路径。__dirname在nodejs里表示根目录，两个参数拼接而成
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // 一旦匹配就使用下面的loader
        use: [
          'style-loader', // 把css-loader加载的样式动态得添加到页面中
          'css-loader' // 负责加载css模块
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 单位：kb，
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'dist/'  // webpack-dev-server 默认服务于根路径下index.html。所以contentBase用来设置哪个根目录下
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new CleanWebpackPlugin(['dist'])
  ]
}