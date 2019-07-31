# Button 按钮

```JS
import Vue from 'vue';
import { Button } from 'yus';

Vue.use(Button);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| text | 按钮文本 | String | - |
| type | 按钮类型，可选值为 `light/primary/info/danger/warn` | String | `light` |
| size | 按钮大小，可选值为 `normal/large/small/mini` | String | `normal` |
| disabled | 是否为禁用状态 | Boolean | `false` |
| block | 是否为块级按钮 | Boolean | `false` |
| plain | 是否为朴素按钮 | Boolean | `false` |
| round | 是否为圆形按钮 | Boolean | `false` |
| radius | 是否为圆角按钮 | Boolean | `true` |
| loading | 是否为加载状态 | Boolean | `false` |
| loadingColor | 加载图标颜色，可选值为 `white` | String | `white` |
| loadingSize | 加载图标大小 | String | `20px` |
| loadingType | 加载动画，可选值为 `crescent` | String | `crescent` |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击按钮触发 |