# 对话框 Dialog

Dialog 组合了 Backdrop Component，通常他包含了3个部分：

- ym-dialog__hd
- ym-dialog__bd
- ym-dialog__ft

当然你也可以不使用这个布局

```JS
import Vue from 'vue'
import Dialog from 'ymu'

Vue.use(Dialog)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| v-model | 是否显示 | Boolean | - | ym-backdrop | - |
| dialogTransition | 弹窗动画效果 | String | - | ym-dialog | - |
| backdropTransition | 幕布动画效果 | String | - | ym-backdrop | - |


## Slots

| 名字 | 说明 |
| - | - |
| default | label 插槽 |


## Events

| 名称 | 描述 |
| :-: | :-: |
| on-click-backdrop | 点击幕布 |


## Sass vars

```sass
$dialog-width: 80%;
$dialog-max-width: 300px;
$dialog-border-radius: 3px;

$dialog-head-font-size: 16px;
$dialog-head-font-weigth: 600;
$dialog-head-vertical-padding: 15px;
$dialog-head-horizontal-padding: 15px;

$dialog-body-min-height: 40px;
$dialog-body-padding-top: 0;
$dialog-body-padding-bottom: 12px;
$dialog-body-horizontal-padding: 24px;
$dialog-body-font-size: 15px;
$dialog-body-line-height: 1.5;
$dialog-body-font-color: #999;

$dialog-button-text-primary-color: #f90;
$dialog-button-text-default-color: #353535;
$dialog-button-text-warn-color: #E64340;
$dialog-button-text-error-color: #E64340;
$dialog-button-text-font-size: 16px;

$dialog-foot-font-size: 16px;
$dialog-foot-line-height: 48px;
```