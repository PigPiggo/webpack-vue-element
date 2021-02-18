const {  HotModuleReplacementPlugin } = require ('webpack'); 
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require ('chalk'); 

const developmentConfig = {
  module: {
    rules: [
      {
        test: /.css$/, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true, 
            }
          }
        ]
      }, 
      {
        test: /\.s[ac]ss$/i,
        loader: "sass-loader",
        options: {
          sourceMap: true, 
        }
      }
    ]
  }, 
  devServer: {
    port: process.env.PORT, 
    host: process.env.HOST, 
    overlay: {
      errors: true, 
    }, 
    hot: true, 
    inline: true,
    noInfo: true,
    open: true, 
    openPage: 'http://localhost:8080/', 
    stats: {
      all:false, 
      colors: true,
      errors: true,
      logging: 'warn',
    }, 
    clientLogLevel: 'warn', 
  }, 
  plugins: [
    new HotModuleReplacementPlugin (), 
    new ProgressBarPlugin ({
      complete: chalk.bgCyan (' '),
      incomplete: chalk.bgMagenta (' '), 
      summary: false,
      width: 40, 
      format: chalk.yellow.bold ('编译中，请稍等... ') + ':bar ' + chalk.green.bold(':percent ') + ' (:elapsed seconds)', 
      customSummary (time) {
        console.info ('\n' + chalk.green.bold ("项目启动成功... "))
        console.info ('\n' + chalk.green.bold ("本机地址: ") + chalk.green.cyan.underline (`http://localhost:${process.env.PORT}`))
        console.info ('\n' + chalk.green.bold ("监听地址: ") + chalk.green.cyan.underline (`http://${process.env.HOST}:${process.env.PORT}`))
      }
    }), 
  ]
}
module.exports = developmentConfig; 