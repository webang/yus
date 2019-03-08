# TabbarItem


## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 | 版本说明 |
| - | - | - | - | - | - |
| title | 底部显示字符 | String | - | - | - |
| icon | 顶部显示的icon | String | - | - | - |
| badge | 违章 | Number, String | - | - | - |
| dot | 小圆点 | Boolean | - | - | - |
| color | 颜色 | String | - | - | - |
| activeIcon | 选中状态时显示的icon | String | - | - | - |
| activeColor | 选中状态的颜色 | String | - | - | - |


## Slots

| 名字 | 说明 |
| - | - |
| badge | badge 插槽 |
| icon | icon 插槽 |
| title | title 插槽 |
| default | tabbarItem 插槽 |


## Events

| 名字 | 说明 |
| - | - |
| on-click-item | 点击事件 |


## Sass vars

```sass
$tabbar-height: 46px;
$tabbar-bg-color: #fff;
$tabbar-text-font-size: 12px;
$tabbar-icon-margin-top: 0;
$tabbar-icon-width: 22px;
$tabbar-icon-height: 22px;
$tabbar-dot-width: 6px;
$tabbar-dot-height: 6px;
$tabbar-dot-bg-color: #ff5b05;
$tabbar-badge-height: 18px;
$tabbar-badge-min-width: 9px;
$tabbar-badge-font-size: 10px;
$tabbar-badge-margin-left: 6px;
$tabbar-badge-horizontal-padding: 5px;
$tabbar-badge-font-color: #fff;
$tabbar-badge-border-radius: 12px;
$tabbar-badge-bg-color: #ff5b05;
```
