# Checkbox 复选框

```JS
import Vue from 'vue'
import { Checkbox } from 'yum'

Vue.use(Checkbox)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| label | 标识符 | String/Object/Number | - | - | - |
| v-model | 是否选中（非必填） | Boolean | - | - | - |
| checkedColor | 选中时的图标颜色 | String | - | - | - |
| disabled | 禁用状态 | Boolean | - | - | - |
| checkedLabelStyle | 选中时的 label 样式 | Object | - | - | - |
| labelLeft | label 文字的位置 | String | left/right | right | - |
| useCell | 使用Cell风格样式 | Boolean | - | - | - |
| clickable | 点击效果 | Boolean | - | - | - |


## Slots

| 名字 | 说明 |
| - | - |
| default | label 插槽 |
| icon | icon 插槽 |


## Events

| 名称 | 描述 |
| :-: | :-: |
| click | click点击 |


## Sass vars

```sass
$checkbox-default-icon-color: #969799;
$checkbox-checked-icon-color: $color-primary;
$checkbox-disabled-opacity: 0.5;
$checkbox-label-font-size: 16px;
$checkbox-label-line-height: 24px;
$checkbox-label-margin-left: 8px;
$checkbox-icon-font-size: 22px;
$checkbox-cell-bg-color: #fff;
$checkbox-cell-line-height: 24px;
$checkbox-cell-vertical-padding: 10px;
$checkbox-cell-horizontal-padding: 12px;
```