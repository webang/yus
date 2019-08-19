# NavBar 导航栏

```JS
import Vue from 'vue';
import { NavBar } from 'yus';

Vue.use(NavBar);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :- | :- | :- | :- |
| mode | 模式 | String | `light/dark` | `light` |
| title | 标题 | String | - | - |
| left-text | 左侧文字 | String | - | - |
| right-text | 右侧文字 | String | - | - |
| left-arrow | 左侧返回图标 | Boolean | - | - |
| border | 底部边框 | Boolean | - | - |

## Slots

| 名称 | 描述 |
| - | - |
| left | - |
| title | - |
| right | - |

## Events

| 名称 | 描述 |
| - | - |
| click-left | - |
| click-right | - |