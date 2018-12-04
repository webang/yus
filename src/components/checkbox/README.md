# Button 按钮

```JS
import { Checkbox } from 'yum';
Vue.use(Checkbox);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| name | 标识符 | any | - | - |
| v-model | 当前的值 | Array |- | - |
| title | 显示的文字 | String | - | - |
| disabled | 禁用状态 | Boolean | - | - |


## Slots

| 名字 | 说明 |
| :-: | :-: |
| title | title 插槽 |
| icon | icon 插槽 |


## Events

| 名称 | 描述 |
| :-: | :-: |
| click | click点击 |


## Sass vars

```sass
$cell-media-margin-right: 8px;
$cell-label-color: inherit;
$cell-value-color: inherit;
$cell-placeholder-color: inherit;
$cell-font-size: 14px;
$cell-herizontal-padding: $layout-herizontal-padding;
$cell-line-height: 24px;
```
