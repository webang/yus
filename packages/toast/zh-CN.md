# 轻提示 Toast

```js
import { Toast } from 'yus'

Toast({
  message: '请勿重复提交订单'
})
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| value | 是否显示 | Boolean | - | - | - |
| message | 提示文案 | String | - | - | - |
| type | 类型 | String | - | text | - |
| duration | 持续时间(当duration=0时表示不会自动关闭) | Number | - | 0 | - |
| position | 显示位置 | String | - | middle | - |
| speed | 动画时间 | Number | - | 400 | - |
| backdrop | 是否带有幕布 | Boolean | - | false | - |
| transparent | 幕布是否透明 | Boolean | - | false | - |

## Slots

| 名字 | 说明 |
| - | - |
| icon | icon 插槽 |

## Events

无

## Sass vars

暂无说明