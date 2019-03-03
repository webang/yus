# CountdownDate 日期倒计时

```JS
import Vue from 'vue'
import CountdownDate from 'ymu'

Vue.use(CountdownDate)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| current-time | 当前的时间(从服务端获取数据会有用) | String, Number | - | 当前时间 | - |
| start-time | 开始时间(不传表示已经开始) | String, Number | - | - | - |
| start-time | 结束时间(必须) | String, Number | - | - | - |

## Slots

| 名字 | 说明 |
| :- | :- |
| - | - |

## Events

| 名称 | 描述 |
| :-: | :-: |
| on-change | 时间发生变化 |
| on-end | 时间已结束 |

## Sass vars

无