# 确认框 Confirm

Confirm 通常和 Dialog 搭配使用，Dialog 通常他包含了3个部分：

- ymu-dialog__hd
- ymu-dialog__bd
- ymu-dialog__ft

```JS
import Vue from 'vue'
import Confirm from 'ymu'

Vue.use(Confirm)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| v-model | 是否显示 | Boolean | - | - | - |
| title | 标题 | String | - | - | - |
| content | 内容 | String | - | - | - |
| confirmText | 确认按钮文字 | String | - | 确定 | - |
| cancelText | 取消按钮文字 | String | - | 取消 | - |
| closeOnClickBackdrop | 点击幕布时关闭弹窗 | Boolean | - | true | - |
| dialogTransition | 弹窗动画效果 | String | - | ymu-dialog | - |
| backdropTransition | 幕布动画效果 | String | - | ymu-backdrop | - |
| showInput | 显示输入框 | Boolean | - | - | - |
| placeholder | 输入框提示 | String | - | - | - |
| showCancel | 显示取消按钮 | Boolean | - | true | - |
| showConfirm | 显示确认按钮 | Boolean | - | true | - |
| inputValue | 输入框绑定 | String, Number | - | - | - |


## Slots

| 名字 | 说明 |
| - | - |
| title | title 插槽 |
| default | content 插槽 |
| footer | footer 插槽 |


## Events

| 名称 | 描述 |
| :-: | :-: |
| input | 切换显示 |
| on-cancel | 取消 |
| on-confirm | 确认 |
| on-click-backdrop | 点击幕布 |


## Sass vars

无
