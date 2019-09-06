# 轻提示 Toast

```js
import { Toast } from 'yus'

Toast({
  message: '请勿重复提交订单'
})
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| value | 是否显示 | Boolean | `false` |
| message | 提示文案 | String | - |
| type | 类型 | String | `text` |
| speed | 动画时间 | Number | `400` |
| position | 显示位置 | String | `middle` |
| backdrop | 是否带有幕布 | Boolean | `false` |
| transparent | 幕布是否透明 | Boolean | `false` |
| duration | 持续时间(为0时表示不会自动关闭) | Number | `1000` |
| icon | 自定义图标 | String | - |
| className | 自定义类名 | String | - |

## Slots

| 名字 | 说明 |
| - | - |
| icon | icon 插槽 |