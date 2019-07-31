/**
 * @documention 获取组件入口
 * @note 部分代码参考有赞
 */
const fs = require('fs');
const path = require('path');
const excludes = [
  'index.js',
  'index.less',
  'font',
  'style',
  'mixins',
  'utils',
  '.DS_Store',
  'fonts'
];

module.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
};
