# Progress 进度条

```JS
import Vue from 'vue';
import { Progress } from 'yus';

Vue.use(Progress);
```

## Props

| 属性 | 描述 | 类型 | 可选值 |
| - | - | - | - | - | - |
| percent | 百分比 | Number | `0` |
| barHeight | 线条高度 | String | `4px` |
| barColor | 线条背景色 | String | - |
| trackColor | 高亮颜色 | String | - |

## Slots

| 名称 | 描述 |
| - | - |
| start | start 插槽 |
| end | end 插槽 |