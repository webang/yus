# Popup 弹出层

```JS
import Vue from 'vue'
import { Popup } from 'ymu'

Vue.use(Popup)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| value | 显示或隐藏 | Boolean | - | - | - |
| position | 弹出的位置 | String | bottom top left right | bottom | - |
| closeOnClickBackdrop | 点击幕布关闭popup | Boolean | - | true | - |
| useHeader | 使用 header | Boolean | - | - | - |
| title | header 标题 | String | - | - | - |
| leftText | header 左侧文案 | String | - | - | - |
| rightText | header 右侧文案 | String | - | - | - |

## Slots

| 名称 | 描述 |
| :-: | :-: |
| defualt | - |
| header | - |

## Events

| 名称 | 描述 |
| :-: | :-: |
| input | - |
| on-click-backdrop | 点击幕布 |
| on-click-left | 点击标题左侧按钮 |
| on-click-right | 点击标题右侧按钮 |

## Sass vars

```
```