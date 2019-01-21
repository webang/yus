# 输入框 Field

```JS
import Vue from 'vue'
import { Field } from 'ymu'

Vue.use(Field)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| v-model | 绑定值 | String, Number | - | - | - |
| label | 左侧提示文字 | String | - | - | - |
| type | 原生type | String | - | text | - |
| placeholder | 原生placeholder | String | - | - | - |
| disabled | 原生disabled | Boolean | - | - | - |
| readonly | 原生readonly | Boolean | - | - | - |
| max | 最大长度限制 | Number | - | - | - |
| isLink | 展示右侧箭头符号 | Boolean |  - | - | - |
| clearable | 展示清除按钮 | Boolean | - | true | - |
| autosize | type=textarea时自适应高度 | Boolean | - | - | - |
| errMsg | 错误提示 | String | - | - | - |

## Slots

| 名字 | 说明 |
| - | - |
| label | - |
| footer | - |


## Events

| 名称 | 描述 |
| :-: | :-: |
| input | - |
| on-change | - |
| on-blur | - |
| on-keypress | - |
| on-focus | - |

## Sass vars

无
