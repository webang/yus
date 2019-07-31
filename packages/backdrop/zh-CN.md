# Backdrop 幕布【已完成】

```JS
import Vue from 'vue';
import { Backdrop } from 'yus';

Vue.use(Backdrop);
```

## Props

| 名称 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| value | 显示幕布 | Boolean | `false` |
| stopPropagation | 阻止冒泡 |  Boolean | `true` |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Events

| 名称 | 描述 | 回调参数 |
| - | - | - |
| click | 点击幕布时触发 | event |