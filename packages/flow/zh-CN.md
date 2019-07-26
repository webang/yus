# Flow 步骤条

```JS
import Vue from 'vue';
import { Flow, FlowItem } from 'f6-vue';

Vue.use(Flow).use(FlowItem);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| direction | 方向 | String | horizontal, vertical | horizontal | - |
| active-index | 当前值 | Number | - | 0 | - |
| finish-icon | 已完成状态图标 | String | - | - | - |
| process-icon | 处理中状态图标 | String | - | - | - |
| waiting-icon | 等待处理状态图标 | String | - | - | - |

## Slots

| 名称 | 描述 |
| - | - |
| default | FlowItem |

## Events

| 名称 | 描述 |
| - | - |
| - | - |