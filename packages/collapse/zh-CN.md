# Collapse 折叠面板

```JS
import Vue from 'vue';
import { Collapse, CollapseItem } from 'yus';

Vue.use(Collapse);
Vue.use(CollapseItem);
```

## Collapse Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| accordion | 手风琴模式 | Boolean | `false` |

## Collapse Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Collapse Events

| 名称 | 描述 |
| - | - |
| click | - |

## CollapseItem Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :- | :- | :- | :- |
| name | 唯一标识符，默认为索引值 | String|Number | - | 节点索引 |
| header | 标题栏左侧内容 | String | - | - |
| arrow-color | 左侧箭头颜色 | String | - | - |
| disabled | 是否禁用面板 | Boolean | - | - |
| duration | 动画持续时长(ms) | Number | - | 300 |

## CollapseItem Slots

| 名称 | 描述 |
| - | - |
| header | - |
| default | - |