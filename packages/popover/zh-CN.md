# Popover 气泡

```JS
import Vue from 'vue';
import { Popover } from 'yus';

Vue.use(Popover);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placement | 弹出位置 | String | bottom/bottom-left/bottom-right | bottom |
| value | 是否显示 | Boolean | - | - |
| closeOnClickBackdrop | 点击幕布时关闭 | Boolean | - | true |
| showBackdrop | 是否展示幕布 | - | - | - |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |
| content | - |

## Events

| 名称 | 描述 |
| - | - |
| click-backdrop | 点击时触发 |