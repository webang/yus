# ActionSheet 上拉菜单

```JS
import Vue from 'vue'
import { ActionSheet } from 'yum'

Vue.use(ActionSheet)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| value | 控制显示 | Boolean | - | - |
| title | 显示标题 | String | - | - |
| show-cancel | 显示取消按钮 | Boolean | - | `true` |
| cancel-text | 取消按钮文字 | String | - | `取消` |
| button-clickable | 点击交互效果 | Boolean | - | true |
| menus | 菜单选项 | Array | - | - |
| close-on-click-backdrop | 点击幕布时关闭 | Boolean | - | `true` |
| close-on-click-menu | 点击某个菜单选项时关闭 | Boolean | - | `true` |


```JS
// menus example:

[{
  text: '从相册中选择',
  disabled: true
}, {
  text: '从相机中选择'
}]
```

## Slots

| 名称 | 描述 |
| :-: | :-: |
| header | 自定义标题 |


## Events

| 名称 | 描述 | 参数 |
| :-: | :-: | :-: |
| input | 用于 v-model | `(inputValue)` |
| on-click-backdrop | 点击幕布 | `()` |
| on-click-menu | 点击某个选项 | `(element, index)`; index: 选项索引从0开始, element===menus[index] |
| on-after-show | 显示之后 | `()` |
| on-after-hide | 关闭之后 | `()` |


## Sass vars

```sass
$actionsheet-content-bg: #efeff4;
$actionsheet-menu-font-size: 18px;
$actionsheet-menu-disabled-color: #ccc;
$actionsheet-cell-vertical-padding: 10px;
$actionsheet-cancel-margin-top: 6px;
```
