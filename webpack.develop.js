const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    open: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
 
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
