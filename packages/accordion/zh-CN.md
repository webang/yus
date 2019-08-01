# Accordion 手风琴

```JS
import Vue from 'vue';
import { Accordion, AccordionItem } from 'yus';

Vue.use(Accordion);
Vue.use(AccordionItem);
```

## Accordion Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| value | 当前激活面板 | String Number Array | - |
| accordion | 手风琴模式 | Boolean | `false` |

## Accordion Slots

| 名称 | 描述 |
| - | - |
| default | - |

## AccordionItem Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| name | 唯一标识符，默认为索引值 | String Number | 节点索引 |
| header | 标题栏左侧内容 | String | - |
| arrow-color | 左侧箭头颜色 | String | - |
| disabled | 是否禁用面板 | Boolean | `false` |
| duration | 动画持续时长(ms) | Number | 300 |

## AccordionItem Slots

| 名称 | 描述 |
| - | - |
| header | - |
| default | - |