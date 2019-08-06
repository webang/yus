# ActionSheet 上拉菜单

```JS
import Vue from 'vue';
import { Actionsheet } from 'yus';

Vue.use(Actionsheet);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - |
| value | 控制显示 | Boolean | `false` |
| title | 显示标题 | String | - |
| show-cancel | 显示取消按钮 | Boolean | `true` |
| cancel-text | 取消按钮文字 | String | `取消` |
| menus | 菜单选项 | Array | - | - |
| close-on-click-backdrop | 点击幕布时关闭 | Boolean | `true` |

```JS
// menus 数据格式
[{
  text: '从相册中选择',
  disabled: true
}, {
  text: '从相机中选择'
}]
```

## Slots

| 名称 | 描述 |
| - | - |
| title | 自定义标题 |

## Events

| 名称 | 描述 | 回调参数 |
| - | - | - |
| input | 控制是否显示 | value: 控制是否显示 |
| click-menu | 点击某个选项时触发 | index: 选项索引 |
| click-backdrop | 点击幕布时触发 | event: 事件对象 |