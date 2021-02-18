const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /.css$/, 
        use: [
          'style-loader', 'css-loader'
        ]
      }, 
      {
        test: /\.s[ac]ss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            loader: 'sass-loader', 
            
          }, 
          {
            resourceQuery: /\?vue/,
            loader: 'sass-loader', 
          }, 
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              }, 
              "css-loader", 
              "sass-loader",
            ]
          }, 
          {
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              }, 
              "css-loader", 
              "sass-loader",
            ]
          }
        ]
      }
    ]
  }, 
  plugins: [
    new MiniCssExtractPlugin ({
      filename: '[name].[contenthash].css'
    }), 
    new CleanWebpackPlugin (), 
  ]
}