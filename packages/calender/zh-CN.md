# Calender 日期选择器

```JS
import Vue from 'vue'
import { Calender } from 'yus'

Vue.use(Calender)
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| :- | :- | :- | :- | :- | :- |
| value | 字符串为标准时间(xxxx-xx-xx)，数值为时间戳(s) | String, Array | - |
| visible | 显示或关闭 | Boolean | - |
| disabledFn | 禁用选项判断 | Function | - |
| closeOnClickBackdrop | 点击幕布关闭 | Boolean | - |
| currentDate | 设置当前的时间 | String, Number | - |

## Events

| 名称 | 描述 |
| - | - |
| input | - |