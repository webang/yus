# ymu

mobile components based on vue.js

## Installation

```shell
npm install ymu -S
```

## 自定义主题

由于在sass中没有类似 less modifyVars 功能。所以实现方式比较曲折：在使用sass-loader之前添加一个loader, 匹配相关字符串，添加你自己的sass变量路径。好处是每次更次sass变量不需要重新启动webpack。
