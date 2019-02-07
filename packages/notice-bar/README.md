# NoticeBar 通告栏

```JS
import Vue from 'vue'
import { NoticeBar } from 'ymu'

Vue.use(NoticeBar)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| wait | 循环间隔时间 | Number | - | 2000 | - |
| frequence | 动画间隔时间 | Number | - | 40 | - |
| loop | 是否循环 | Boolean | - | true | - |

## Slots

| 名称 | 描述 |
| :-: | :-: |
| defualt | title 插槽 |
| head | head 插槽 |
| foot | foot 插槽 |

## Events

| 名称 | 描述 |
| :-: | :-: |
| click | - |

## Sass vars

```
// 暂无
```