# 自定义主题

yus 选择 less 编写样式，在less中主要依靠 modifyVars 方法全局修改变量，在 sass 中没有该方法的对等实现，所以放弃了sass。

## 默认变量

```less
@color-primary: #001938;
@color-info: #1989fa;
@color-danger: #f44;
@color-warn: #ff976a;
// ...
```

## 定制方法

定制主题分为两步：引入样式源文件和修改样式变量

步骤一. 引入样式源文件

yus 支持通过 babel 插件按需引入和手动引入两种方式，推荐使用按需引入的方式。

```js
// 在 babel.config.js 中配置按需引入样式源文件
// 注意：babel6 不支持按需引入样式，请手动引入
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
};
```

下面是手动引入的方法：

```js
// 手动引入组件的样式源文件
import Button from 'yus/lib/button';
import 'yus/lib/button/style/less';
```

步骤二. 修改样式变量

使用 less 提供的 modifyVars 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...other loaders
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              red: '#03a9f4',
              blue: '#3eaf7c',
              orange: '#f08d49',
              'text-color': '#111'
            }
          }
        }
      ]
    }
  ]
};
```