# Radio 单选框

```JS
import Vue from 'vue'
import { Radio } from 'yum'

Vue.use(Radio)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| label | value值 | String, Number, Boolean | - | - |
| value | 绑定 v-model | String |- | - |
| name | input原生name | String | - | - |
| disabled | 是否为禁用状态 | Boolean | - | - |
| checked-color | 选中状态icon颜色 | String | - | - |
| checked-label-style | 选中状态label样式 | Object | - |

## Slots

| 名字 | 说明 |
| :-: | :-: |
| default | 选项文字 |
| icon | icon 插槽，方便自定义icon |

## Events

| 名称 | 描述 |
| :-: | :-: |
| input | - |

## Sass vars

```sass
$radio-default-icon-color: #969799;
$radio-checked-icon-color: $color-primary;
$radio-disabled-opacity: 0.5;
$radio-label-font-size: 16px;
$radio-label-line-height: 24px;
$radio-label-margin-left: 8px;
$radio-icon-font-size: 22px;
```