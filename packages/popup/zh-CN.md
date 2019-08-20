# Popup 弹出层

```JS
import Vue from 'vue';
import { Popup } from 'yus';

Vue.use(Popup);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| v-model | 是否显示 | Boolean | `false` |
| position | 弹出方向，可选值为 `bottom/top/left/righgt` | String | `bottom` |
| closeOnClickBackdrop | 点击幕布时是否触发关闭 | Boolean | `true` |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击时触发 |