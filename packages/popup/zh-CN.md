# Popup 弹出层

```JS
import Vue from 'vue';
import { Popup } from 'f6-vue';

Vue.use(Popup);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| position | 弹出位置 | String | - | bottom |
| v-model | 是否显示 | Boolean | - | - |
| closeOnClickBackdrop | 点击幕布时关闭 | Boolean | - | true |

## Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击时触发 |