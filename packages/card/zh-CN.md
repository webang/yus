# Card 卡片

```JS
import Vue from 'vue';
import { Card } from 'yus';

Vue.use(Card);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| title | 卡片标题 | String | - |
| footer | 卡片页脚 | String | - |
| shadow | 是否设置阴影 | Boolean | `false` |

## Slots

| 名称 | 描述 |
| - | - |
| header | 标题  |
| body | 内容 |
| footer | 页脚 |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击卡片时触发 |