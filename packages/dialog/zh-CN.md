# 对话框 Dialog

```js
import { Dialog } from 'yus'

Dialog({
  message: '请勿重复提交订单'
})
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| value | 是否显示 | Boolean | - | - | - |
| type | 对话框类型 | String | alert/confirm/prompt | alert | - |
| title | 标题 | String | - | - | - |
| content | 内容 | String | - | - | - |
| showConfirmButton | 显示确认按钮 | Boolean | - | - |
| showCancelButton | 显示取消按钮 | Boolean | - | - |
| inputValue | type 为 prompt 的 input 初始值 | Number/String | - | - |

## Slots

| 名字 | 说明 |
| - | - |
| title | title 插槽 |
| content | content 插槽 |

## Events

无

## Sass vars

暂无说明