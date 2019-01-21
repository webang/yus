# Button 按钮

```JS
import Vue from 'vue'
import { Cell } from 'yum'

Vue.use(Cell)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| label | 左测文字，复杂布局请使用slot | String | - | - |
| value | 右侧文字，复杂布局请使用slot | String |- | - |
| to | 点击链接(vue-router) | String | - | - |
| url | 点击链接(location.href) | String | - | - |
| is-link | 是否为链接, 当有to或url时可不用 | Boolean | - | - |
| clickable | 显示点击效果 | Boolean | - | true |


## Slots

| 名字 | 说明 |
| :-: | :-: |
| media | media 插槽 |
| label | title 插槽，方便自定义样式 |
| value | value 插槽，方便自定义样式 |


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
