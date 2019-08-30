/**
 * @documention 为按需加载模式创建css入口文件
 * @note 部分代码参考有赞
 */
const fs = require('fs-extra');
const path = require('path');

const components = require('./get-components')();
const dependencyTree = require('dependency-tree');
const dir = path.join(__dirname, '../es');

const whiteList = require('../config').baseComponent;

const delimiterize = str => str.replace(/\\/g, '/');

function destEntryFile(component, filename, ext = '') {
  const deps = analyzeDependencies(component).map(dep =>
    getStyleRelativePath(component, dep, ext)
  );

  const esEntry = path.join(dir, component, `style/${filename}`);
  const libEntry = path.join(__dirname, '../lib', component, `style/${filename}`);

  const esContent = deps.map(dep => delimiterize(`import '${dep}';`)).join('\n');
  const libContent = deps.map(dep => delimiterize(`require('${dep}');`)).join('\n');

  fs.outputFileSync(esEntry, esContent);
  fs.outputFileSync(libEntry, libContent);
}

// analyze component dependencies
function analyzeDependencies(component) {
  const checkList = ['base'];
  const dt = dependencyTree({
    directory: dir,
    filename: path.join(dir, component, 'index.js'),
    filter: path => !~path.indexOf('node_modules')
  });
  search(dt, component, checkList);
  if (!whiteList.includes(component)) {
    checkList.push(component);
  }
  return checkList.filter(item => checkComponentHasStyle(item));
}

function search(tree, component, checkList) {
  Object.keys(tree).forEach(key => {
    search(tree[key], component, checkList);
    components
      .filter(item => {
        const ret = key
          .replace(dir, '')
          .split('/')
          .includes(item);
        return ret;
      })
      .forEach(item => {
        if (
          !checkList.includes(item) &&
          !whiteList.includes(item) &&
          item !== component
        ) {
          checkList.push(item);
        }
      });
  });
}

function getStylePath(component, ext = '.css') {
  if (component === 'base') {
    return path.join(__dirname, `../es/style/base${ext}`);
  }
  return path.join(__dirname, `../es/${component}/index${ext}`);
}

function getStyleRelativePath(component, style, ext) {
  return path.relative(
    path.join(__dirname, `../es/${component}/style`),
    getStylePath(style, ext)
  );
}

function checkComponentHasStyle(component) {
  return fs.existsSync(getStylePath(component));
}

components.forEach(component => {
  // css entry
  destEntryFile(component, 'index.js', '.css');
  // less entry
  destEntryFile(component, 'less.js', '.less');
});
