# Switch 开关

```
import Vue from 'vue';
import { Swiper, SwiperItem } from 'f6-vue';

Vue.use(Swiper).use(SwiperItem);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| width| 宽度 | Number | - | - | - |
| width| 高度 | Number | - | - | - |
| direction | 轮播方向 | String | horizontal/vertical | - | - |
| duration | 动画时长 | Number | - | 300 | - |
| interval | 自动轮播间隔 | Number | - | 4000 | - |
| autoPlay | 是否自动播放 | Boolean | - | false | - |
| loop | 是否无间隔模式 | Boolean | - | false | - |
| active | 初始位置索引值 | Number | - | 0 | - |
| longTouch | 长按时间 | Number | - | 300 | - |

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
| slideTo(index) | - | 索引 |
| slideNext() | - | - |
| slidePrev() | - | - |