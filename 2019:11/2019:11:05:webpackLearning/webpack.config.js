module.export = {
  entry: __dirname + '/app/main.js', //入口文件
  output: {
    path: __dirname + '/public', //打包后的文件存放的位置
    filename: "bundle.js" //打包后输出文件的文件名
  }
}