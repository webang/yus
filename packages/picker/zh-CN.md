# Picker 选择器

```JS
import Vue from 'vue';
import { Picker, PickerColumn } from 'f6-vue';

Vue.use(Picker).use(PickerColumn);
```

## Picker Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :- | :- | :- | :- |
| column-list | picker每一项配置列表 | Array | - | - |
| popup | 使用弹出模式 | Boolean | - | - |
| value | 使用弹出模式是否显示 | Boolean | - | - |
| header | 是否展示 header | Boolean | - | - |
| title | 标题 | String | - | - |
| cancel-text | 取消文字 | String | - | 取消 |
| confirm-text | 确认文字 | String | - | 确认 |

## Picker Slots

| 名称 | 描述 |
| - | - |
| default | - |

## Picker Events

| 名称 | 描述 |
| - | - |
| on-cancel | 取消 |
| on-confirm | 确认 |

## Picker Apis

| 名称 | 描述 |
| - | - |
| getValues() | 获取所有列选中的值 |
| setValues(values: Array) | 设置所有列的值 |
| getIndexs() | 获取所有列选中值对应的索引 |
| setIndexs(indexs: Array) | 设置所有列选中值对应的索引 |
| getColumnValue(columnIndex) | 获取对应列选中的值 |
| setColumnValue(columnIndex, columnValue) | 设置对应列选中的值 |
| getColumnIndex(columnIndex) | 设置对应列选中项的索引 |
| setColumnIndex(columnIndex, valueIndex) | 设置对应列选中项的索引 |
| getColumnValues(columnIndex) | 获取对应列的选项 |
| setColumnValues(columnIndex, columnValues) | 设置对应列的选项 |