# InfinitePicker 无限层级选择器

```JS
import Vue from 'vue';
import { InfinitePicker } from 'yus';

Vue.use(InfinitePicker);
```

## Marquee Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| delay | 启动轮播的延时时间 | Number | `1000` |
| interval | 轮播间隔时间 | Number | `2000` |
| duration | 一次轮播消耗的时间(ms) | Number | `300` |
| direction | 轮播方向，可选值为 ` down up` | String | `down` |
| showHeader | 是否显示左侧图标 | Boolean | `false` |
| itemHeight | 轮播子项高度 | Number | - |

## Marquee Slots

| 名称 | 描述 |
| - | - |
| default | MarqueeItem元素 |