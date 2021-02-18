const path = require ('path'); 
// const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
const VueLoaderPlugin = require('vue-loader-plugin'); 
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin  = require ('html-webpack-plugin'); 

const developmentConfig = require ('./webpack.dev.config.js'); 
const productionConfig = require ('./webpack.prod.config'); 

const commonConfig = (env) => {
  return {
    mode: env.NODE_ENV, 
    entry: path.join (__dirname, '../src/main.js'), 
    output: {
      filename: '[name].[contenthash].js', 
      path: path.join (__dirname, '../dist')
    }, 
    module: {
      rules: [
        {
          test: /.vue$/, 
          loader: 'vue-loader', 
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
      ]
    }, 
    plugins: [
      new VueLoaderPlugin (), 
      new HTMLWebpackPlugin (), 
    ], 
  }
}

module.exports = env => {
  switch (env.NODE_ENV) {
    case 'development': {
      return merge(commonConfig (env), developmentConfig);
    }
    default:
      return merge(commonConfig (env), productionConfig)
  }
}