# Slider 滑块

```js
import Vue from 'vue'
import { Slider } from 'ymu'

Vue.use(Slider)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| v-model | 当前数值 | Number | - | 0 | - |
| min | 最小可选 | Number | - | - | 0 |
| max | 最大可选 | Number | - | 100 | - |
| runwayHeight | 轨道高度  | Number | - | 2 | - |
| runwayColor | 轨道默认背景颜色 | String | - | - | - |
| trackColor | 轨道高亮背景颜色 | Number | - | - | - |
| thumbColor | 手柄背景颜色 | String | - | - | - |
| step | 滑动倍数 | Number | - | 1 | - |
| disabled | 禁用状态 | Boolean | - | - | - |

## Slots

| 名字 | 说明 |
| - | - |
| start | start 插槽 |
| end | end 插槽 |

## Events

| 名字 | 说明 |
| - | - |
| input | - |

## Sass vars

```sass
$slider-height: 24px;
$slider-runway-height: 2px;
$slider-runway-bg-color: #EBEBEB;
$slider-track-bg-color: $color-primary;
$slider-thumb-width: 24px;
$slider-thumb-height: 24px;
$slider-thumb-bg-color: #fff;
$slider-disabled-opacity: .6;
```