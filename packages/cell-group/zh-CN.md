# CellGroup

```JS
import Vue from 'vue'
import { CellGroup } from 'yum'

Vue.use(CellGroup)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| title | 顶部文字，复杂布局请使用slot | String | - | - |

## Slots

| 名字 | 说明 |
| :-: | :-: |
| default | - |
| title | title 插槽 |

## Events

| 名字 | 说明 |
| :-: | :-: |
| - | - |

## Sass vars

```sass
$cell-group-herizontal-padding: $layout-herizontal-padding;
$cell-group-title-font-size: 16px;
$cell-group-title-color: inherit;
```