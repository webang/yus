# Alert 弹窗

```JS
import Vue from 'vue'
import { Alert } from 'yum'

Vue.use(Alert)
```


## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| value | 控制显示 | Boolean | - | - |
| title | 显示标题 | String | - | - |
| content | 显示内容 | String | - | - |
| close-on-click-backdrop | 点击幕布时关闭弹窗 | Boolean | - | true |
| button-text | 确认按钮文字 | String | - | 确定 |


## Slots

| 名称 | 描述 |
| :-: | :-: |
| title | - |
| content | - |
| footer | - |


## Events

| 名称 | 描述 |
| :-: | :-: |
| on-click-backdrop | 点击幕布 |


## Sass vars

无
