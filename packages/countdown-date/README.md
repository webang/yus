# CountdownDate 日期倒计时

```JS
import Vue from 'vue'
import CountdownDate from 'ymu'
Vue.use(CountdownDate)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| current-time | 非必选; 当前的时间(当需要从服务端获取数据时，这会很有用) | `String` / `Number` | - | 当前时间 | - |
| start-time | 非必选; 开始时间; 不传表示已经开始 | 同上 | - | - | - |
| end-time | 必选; 结束时间 | 同上 | - | - | - |

当时间为 String 类型时，需满足：

```js
const reg = /^(\d{4})-(\d{1,2})-(\d{1,2})((\s)(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/
```

## 