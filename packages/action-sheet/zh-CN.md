# ActionSheet 上拉菜单

```JS
import Vue from 'vue';
import { Actionsheet } from 'f6-vue';

Vue.use(Actionsheet);
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| value | 控制显示 | Boolean | - | - |
| title | 显示标题 | String | - | - |
| show-cancel | 显示取消按钮 | Boolean | - | true |
| cancel-text | 取消按钮文字 | String | - | 取消 |
| menus | 菜单选项 | Array | - | - |
| click-menu | 点击某个选项的回调 | Function | - | - |
| close-on-click-backdrop | 点击幕布时关闭 | Boolean | - | true |

menus 数据格式：

```JS
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
| click-menu | 点击某个选项时触发 | index: 选项的索引，点击取消按钮时index=-1 |
| click-backdrop | 点击幕布时触发 | event |