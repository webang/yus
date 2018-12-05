# Radio 单选框

```JS
import { Radio } from 'yum';
Vue.use(Radio);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| label | value值 | String, Number, Boolean | - | - |
| value | 右侧文字，复杂布局请使用slot | String |- | - |
| name | 右侧显示的文字 | String | - | - |
| disabled | 是否为禁用状态 | Boolean | - | - |


## Slots

| 名字 | 说明 |
| :-: | :-: |
| default | name 插槽 |
| icon | icon 插槽，方便自定义icon |


## Events

| 名称 | 描述 |
| :-: | :-: |
| input | - |


## Sass vars

```sass
$radio-default-color: #969799;
$radio-checked-color: $color-primary;
$radio-disabled-opacity: 0.5;
$radio-label-font-size: 16px;
$radio-label-line-height: 24px;
$radio-label-margin-left: 8px;
$radio-icon-font-size: 22px;
```
