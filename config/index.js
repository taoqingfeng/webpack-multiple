/*
 * @Author: your name
 * @Date: 2020-08-17 20:21:15
 * @LastEditTime: 2020-08-17 20:53:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\config\entries.js
 */
var path = require('path');
var fs = require('fs');
var dirSrc = path.resolve(__dirname, '../src')

var entries = {}
// 
var excludeDirs = ['css', 'images','animate.ts','common.ts','footer.html','header.html','wx.html']
var dirPages = fs.readdirSync(dirSrc).filter((dirName)=>{
  return excludeDirs.indexOf(dirName) === -1 && fs.statSync(dirSrc + '/' + dirName).isDirectory()
})

module.exports= {
  dirPages : dirPages
}