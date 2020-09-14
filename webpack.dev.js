const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/public/images/top-icon.png')
  ]
})
