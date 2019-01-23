# 轻提示 Toast

```js
import { Toast } from 'ymu'

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
| duration | 持续时间 | Number | - | 2000 | - |
| position | 显示位置 | String | - | middle | - |
| speed | 动画时间 | Number | - | 400 | - |
| auto-close | 是否自动关闭 | Boolean | - | true | - |

## Slots

| 名字 | 说明 |
| - | - |
| icon | icon 插槽 |
| message | message 插槽 |

## Events

无

## Sass vars

```sass
$toast-border-radius: 3px;
$toast-line-heigth: 24px;
$toast-font-color: #fff;
$toast-bg-color: rgba(0, 0, 0, .7);
$toast-font-size: 13px;
$toast-padding: 8px 12px;
$toast-icon-font-size: 45px;
$toast-speed: 350ms;
$toast-middle-type-speed: 1000ms;
```