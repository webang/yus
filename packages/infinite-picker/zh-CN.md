# InfinitePicker 无限层级选择器

```JS
import Vue from 'vue';
import { InfinitePicker } from 'yus';

Vue.use(InfinitePicker);
```

## Props

| 属性 | 描述 | 类型 | 默认值 |
| - | - | - | - | - |
| list | 数据源 | Array | `[]` |
| value | 是否显示 | Boolean | `false` |
| defaultValue | 初始值 | Array | `[]` |
| showHeader | 是否显示标题 | Boolean | `true` |

list 数据格式为:

```js
[{
  "id": "110000",
  "name": "北京",
  "children": []
}]
```

## Events

| 名称 | 描述 |
| - | - |
| input | - |
| confirm | - |