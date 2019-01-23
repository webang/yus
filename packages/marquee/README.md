# Marquee 跑马灯

```JS
import Vue from 'vue'
import { Marquee } from 'ymu'

Vue.use(Marquee)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| interval | 间隔时间 | Number | - | 2000 | - |
| duration | 动画持续时间 | Number | - | 300 | - |
| direction | 方向 | String | - | `up` / `down` | - |

## Slots

| 名称 | 描述 |
| :-: | :-: |
| default | - |

## Events

| 名称 | 描述 |
| :-: | :-: |
| on-index-change | 轮播索引变化 |

## Sass vars

无