# NoticeBar 通告栏

```JS
import Vue from 'vue';
import { NoticeBar } from 'yus';

Vue.use(NoticeBar);
```

## Props

| 属性 | 描述 | 类型 | 可选值 |
| - | - | - | - |
| delay | 首次移动等待时长(ms) | Number | `1000` |
| wait | 循环间隔时间(ms) | Number | `2000` |
| loop | 是否循环模式 | Boolean | `true` |
| frequence | 动画间隔时长(ms) | Number | `40` |
| showHeader | 是否显示header | Boolean | `false` |
| showFooter | 是否显示footer | Boolean | `false` |

## Slots

| 名称 | 描述 |
| - | - |
| defualt | - |
| header | - |
| footer | - |

## Events

| 名称 | 描述 |
| - | - |
| click-header | - |
| click-body | - |
| click-footer | - |