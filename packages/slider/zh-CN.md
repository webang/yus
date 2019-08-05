# Slider 滑块

```js
import Vue from 'vue'
import { Slider } from 'yus'

Vue.use(Slider)
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| v-model | 当前数值 | Number | `0` |
| min | 最小可选 | Number | `0` |
| max | 最大可选 | Number | `100` |
| runwayHeight | 轨道高度  | Number | `2` |
| runwayColor | 轨道默认背景颜色 | String | - |
| trackColor | 轨道高亮背景颜色 | Number | - |
| thumbColor | 手柄背景颜色 | String | - |
| step | 滑动倍数 | Number | `1` |
| disabled | 禁用状态 | Boolean | `false` |

## Slots

| 名字 | 说明 |
| - | - |
| start | start 插槽 |
| end | end 插槽 |

## Events

| 名字 | 说明 |
| - | - |
| input | - |