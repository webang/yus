# Flow 步骤条

```JS
import Vue from 'vue';
import { Flow, FlowItem } from 'yus';

Vue.use(Flow).use(FlowItem);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| direction | 排列方向，可选值为 `horizontal vertical` | String | `horizontal` |
| activeIndex | 当前值 | Number | 0 |
| finishIcon | 已完成状态图标 | String | - |
| processIcon | 处理中状态图标 | String | - |
| waitingIcon | 等待处理状态图标 | String | - |

## Slots

| 名称 | 描述 |
| - | - |
| default | FlowItem元素 |

## Events

| 名称 | 描述 |
| - | - |
| input | 与 v-model 绑定 |