# Navbar 导航

```JS
import Vue from 'vue'
import MarqueeItem from 'ymu'

Marquee .use(MarqueeItem)
```


## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| title | 显示标题 | String | - | - | - |
| leftText | 左侧按钮文字 | String | - | 返回 | - |
| rightText | 右侧按钮文字 | String | - | - | - |
| leftArrow | 显示左侧返回icon | Boolean | - | true | - |
| fixed | 是否顶部固定 | Boolean | - | - | - |
| goBack | 点击左侧按钮是否返回 | Boolean | - | true | - |


## Slots

| 名称 | 描述 |
| :-: | :-: |
| defualt | title 插槽 |
| left | left 插槽 |
| right | right 插槽 |


## Events

| 名称 | 描述 |
| :-: | :-: |
| on-click-left | 点击左侧事件 |
| on-click-right | 点击右侧事件 |


## Sass vars

无
