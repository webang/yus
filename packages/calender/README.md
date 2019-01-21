# Calender 日期选择器

```JS
import Vue from 'vue'
import { Calender } from 'yum'

Vue.use(Calender)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本 |
| :- | :- | :- | :- | :- | :- |
| v-model | 字符串为标准时间(2018-12-12) | String, Array | - | - | - |
| visible | 显示或关闭 | Boolean | - | - | - |
| useFormatNum | 是否不足10补0 | Boolean | - | - | - |
| disabledFn | 禁用选项判断 | Function | - | - | - |
| closeOnClickBackdrop | 点击幕布关闭 | Boolean | - | true | - |
| currentDate | 设置当前的时间 | String, Number | - | - | - |


## Slots

| 名称 | 描述 |
| :-: | :-: |
| - | - |


## Events

| 名称 | 描述 |
| :-: | :-: |
| input | - |


## Sass vars

暂无