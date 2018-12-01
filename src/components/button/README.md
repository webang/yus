# Button

```JS
import { Button } from 'yum';
Vue.use(Button);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 
| - | :-: | :- | :-: | :-: |
| text | 显示文本 | String | - | - |
| type | 按钮类型 | String | `light` / `primary` / `danger` / `warn` | `light` |
| size | 大小 | String | `normal` /  `large` / `small` / `mini` |  `normal` |
| block | 块级按钮 | Boolean | - | - |
| disabled | 禁用按钮 | Boolean | - | - |
| plain | 幽灵按钮 | Boolean | - | - |
| clear | 无背景颜色和边框 | Boolean | - | - |
| round | 圆角按钮 | Boolean | - | - |
| clickEffect | 显示反馈 | Boolean | - | true |

## Slots

| 名称 | 描述 |
| :-: | :-: |
| default | - |

## Events

| 名称 | 描述 |
| :-: | :-: |
| click | - |