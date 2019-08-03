# Swiper 轮播

```
import Vue from 'vue';
import { Swiper, SwiperItem } from 'yus';

Vue.use(Swiper).use(SwiperItem);
```

## Props

| 属性 | 描述 | 类型 | 可选值 |
| - | - | - | - |
| width | 容器宽度 | String | - |
| height | 容器高度 | String | - |
| direction | 轮播方向，可选值为 `horizontal/vertical`  | String | `horizontal` |
| duration | 动画时长(ms) | Number | `300` |
| interval | 自动轮播间隔 | Number | `4000` |
| autoplay | 是否自动播放 | Boolean | `false` |
| loop | 是否无间隔模式 | Boolean | `false` |
| activeIndex | 初始位置索引值 | Number | `0` |
| longTouch | 长按时间(ms) | Number | `300` |

## Slots

| 名字 | 说明 |
| - | - |
| default | - |

## Events

| 名字 | 说明 | 参数 |
| - | - | - |
| index-change | - | 当前索引 |

## Methods

| 名字 | 说明 | 参数 |
| - | - | - |
| slideTo(index) | 滚动到目标位置 | 索引 |
| slideNext() | 向右滑动 | - |
| slidePrev() | 向左滑动 | - |