/*
 * @Author: your name
 * @Date: 2020-08-03 10:58:34
 * @LastEditTime: 2020-08-17 20:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var config = require('../config/index.js');

var dirPages = config.dirPages;

// entries
var entries = {}
entries.animate = './src/animate.ts'
entries.common = './src/common.ts'
dirPages.forEach(item=>{
  entries[`${item}/index`] = `./src/${item}/index.ts`
})

webpackConfig = {
  entry: entries,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '../',
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/footer.html',
      filename: 'footer.html',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/wx.html',
      filename: 'wx.html',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: 'src/header.html',
      filename: 'header.html',
      minify: false,
    }),
  ],
  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    modules: [
      'node_modules',
      path.resolve(__dirname, '../'),
    ],
    // 用于查找模块的目录

    extensions: ['.js', '.json', '.jsx', '.css'],

    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve('src/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader', // 将 Sass 编译成 CSS
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [

          {
            loader: 'url-loader',
            options: {
              context: 'src',
              name: '[path][name].[hash].[ext]',
              limit: 8192,
              fallback: require.resolve('file-loader'),
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
          esModule: true,
          attributes: {
            root: '.',
          },
        },

      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  // 使用的扩展名
  externals: {
    jquery: 'jQuery',
  },
};
dirPages.forEach(item=>{
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: `src/${item}/index.html`,
    filename: `${item}/index.html`,
    chunks: [`${item}/index`, 'animate', 'common'],
    minify: false,
  }))
})
module.exports = webpackConfig