# Cell 单元格

```JS
import Vue from 'vue';
import { Cell } from 'f6-vue';

Vue.use(Cell);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :- | :- | :- | :- |
| title | 左侧标题 | String | - | - |
| icon | 左侧图标 | String | - | - |
| value | 右侧文字 | String | - | - |
| url | a标签链接地址 | String | - | - |
| is-link | 是否为链接 | Boolean | - | - |
| border | 底部是否有边框 | Boolean | - | - |
| disabled | 禁止点击状态，为 true 时点击不会触发 click event | Boolean | - | - |

## Slots

| 名称 | 描述 |
| - | - |
| title | - |
| value | - |
| icon | - |

## Events

| 名称 | 描述 |
| - | - |
| click | 点击时触发 |