# ymu

mobile components based on vue.js

## Installation

```shell
npm install ymu -S
```

现在只支持 esModule

## 自定义主题

由于在sass中没有类似 less modifyVars 功能。所以实现方式比较曲折：在使用sass-loader之前添加一个loader, 匹配相关字符串，添加你自己的sass变量路径。好处是每次更次sass变量不需要重新启动webpack，使用非常的方便。

```js
// ymu-sass-loader
const fs = require('fs');
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  const options = loaderUtils.getOptions(this) || {};

  if (content.indexOf('// $YMU_CUSTOM_VARS') !== -1) {
    const str = `@import '${options.customVars}';`.replace(/\\/g, '/');
    content = content.replace('// $YMU_CUSTOM_VARS', str);
  }
  return content;
}
```

```js
// 在这里使用自定义主题
if (loader === 'sass') {
  loaders.push({
    loader: path.resolve(__dirname, '../ymu-sass-loader'),
    options: {
      // 自定义sass变量路径
      customVars: path.resolve(__dirname, '../examples/theme/vars.scss')
    }
  });
}
```