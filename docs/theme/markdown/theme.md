# 自定义主题

yus-vue 选择 sass 编写样式，sass 与 less 有着很大的区别，在less中主要依靠 modifyVars 方法全局修改变量，在 sass 中没有该方法的对等实现。

## 全部加载模式

```scss
$color-primary: #001938;
$color-info: #1989fa;
$color-danger: #f44;
$color-warn: #ff976a;

@import '../../packages/style/variable.scss'; // yus-vue scss变量文件
@import '../../packages/index.scss'; // yus-vue 组件所有组件css文件
```

## 按需加载模式

当您选择按需加载时，由于 sass 变量作用域的原因，上面的方法行不通，但是在 yus-vue 的scss变量文件中有预定义的插槽 yus_css_user_vars，您可以在使用 sass-loader 处理 sass 文件之前，对该变量文件进行修改，将 yus_css_user_vars 修改为您的变量路径。