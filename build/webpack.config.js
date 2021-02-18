const path = require ('path'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
const HTMLWebpackPlugin  = require ('html-webpack-plugin'); 
const { merge } = require("webpack-merge");
const developmentConfig = require ('./webpack.dev.config.js'); 

const commonConfig = {
  entry: path.join (__dirname, '../src/main.js'), 
  output: {
    filename: 'bundle.js', 
    path: path.join (__dirname, '../dist')
  }, 
  module: {
    rules: [
      {
        test: /.vue$/, 
        loader: 'vue-loader', 
      }, 
      {
        test: /.css$/, 
        use: [
          'style-loader', 
          'css-loader'
        ]
      }, 
      // 图片，字体
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/, 
        use: [
          {
            loader: 'url-loader', 
            options: {
              limit: 1024, 
              fallback: {
                loader: 'file-loader', 
                options: {
                  name: '[name].[hash].[ext]'
                }
              }
            }
          }
        ]
      }, 
      //scss、sass
      {
        test: /\.(scss|sass)$/, 
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader', 
        ]
      }
    ]
  }, 
  plugins: [
    new VueLoaderPlugin (), 
    new HTMLWebpackPlugin (), 
    /* new ProgressBarPlugin ({
      clear: true, 
      complete: '>',
      incomplete: "=", 
    }),  */
  ], 
  /* stats: {
    preset: "errors-only",
  } */
}
module.exports = env => {
  switch (env.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    default:
      return commonConfig
  }
}