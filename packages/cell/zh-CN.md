# Cell 单元格

```JS
import Vue from 'vue';
import { Cell } from 'yus';

Vue.use(Cell);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | :- | :- | :- | :- |
| title | 左边标题文字 | String | - |
| icon | 左侧图标 | String | - |
| value | 右侧内容，复杂的样式布局请使用slot | String | - |
| label | 副标题内容 | String | - |
| url | 设置a标签链接地址，此时会渲染为a标签 | String | - |
| isLink| 是否为链接 | Boolean | `false` |
| disabled | 禁止点击状态，为 true 时点击不会触发 click 事件 | Boolean | `false` |
| border | 是否底部有边框 | Boolean | `false` |
| arrowDirection | 设置箭头方向，可选值为 `right up down` | String | `right` |

## Slots

| 名称 | 描述 |
| - | - |
| title | 左边标题 |
| value | 右侧内容 |
| icon | 左侧图标 |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击时触发 |