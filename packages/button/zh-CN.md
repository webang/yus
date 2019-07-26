# Button 按钮

```JS
import Vue from 'vue';
import { Button } from 'f6-vue';

Vue.use(Button);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| text | 按钮文本 | String | - | - |
| type | 按钮类型 | String | `light/primary/danger/warn` | light |
| size | 按钮大小 | String | `normal/large/small/mini` | normal |
| block | 块级按钮 | Boolean | - | - |
| disabled | 禁用按钮 | Boolean | - | - |
| plain | 幽灵按钮 | Boolean | - | - |
| round | 圆角按钮 | Boolean | - | - |
| loading | 加载状态 | Boolean | - | - |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击按钮触发 |