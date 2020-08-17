/*
 * @Author: your name
 * @Date: 2020-08-05 14:16:49
 * @LastEditTime: 2020-08-07 23:30:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\config\webpack.dev.js
 */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    publicPath: './',
  },
  mode: 'development',
});
