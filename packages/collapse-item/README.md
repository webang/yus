# CollapseItem

```JS
import Vue from 'vue'
import { CollapseItem } from 'yum'

Vue.use(CollapseItem)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| value | 打开或折叠 | Boolean | - | - |
| title | 显示标题 | String | - | - |
| content | 显示内容 | String | - | - |
| border | 底部是否显示border | Boolean | - | true |

## Slots

| 名字 | 说明 |
| :-: | :-: |
| title | title 插槽 |
| default | content 插槽 |

## Events

| 名字 | 说明 |
| :-: | :-: |
| - | - |

## Sass vars

```sass
$collapse-item-herizontal-padding: $layout-herizontal-padding;
$collapse-item-vertical-padding: 10px;
$collapse-item-line-height: 24px;
$collapse-item-content-padding-bottom: 16px;
$collapse-item-transition-duration: 300ms;
$collapse-item-bottom-border-color: $border-color;
```