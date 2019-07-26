/**
 * 自动生成入口文件
 * ../package/index.js
 * ../package/index.scss
 */

const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;

function buildEntry() {
  const importList = Components.map(
    name => `import ${uppercamelize(name)} from './${name}';`
  );
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const intallList = exportList;
  const content = `${tips}
${importList.join('\n')}

const version = '${version}';
const components = [
  ${intallList.join(',\n  ')}
];

const install = (Vue) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

function buildStyleEntry() {
  const list = [`@import './style/base.less';`];
  const importList = Components.map(name => `@import './${name}/index.less';`);
  fs.writeFileSync(
    path.join(__dirname, '../packages/index.less'),
    list.concat(importList).join('\n')
  );
}

buildEntry();
buildStyleEntry();
