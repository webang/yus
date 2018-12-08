# Checkbox 复选框

```JS
import { Checkbox } from 'yum';
Vue.use(Checkbox);
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

无
