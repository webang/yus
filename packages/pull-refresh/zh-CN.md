# PullToRefresh 下拉刷新

```JS
import Vue from 'vue'
import { PullToRefresh } from 'yum'

Vue.use(PullToRefresh)
```

## Props

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| - | :-: | :- | :-: | :-: |
| on-refresh | 拉到阈值的回调函数 | Function | - | - |
| topPullDistance | 阈值大小 | Number | - | 50 |
| loadingText | 加载状态提示文字 | String | - | 加载中... |
| pullText | 下拉状态提示文字 | String | - | 下拉刷新 |
| looseText | 释放刷新提示文字 | String | - | 释放刷新 |

## Slots

| 名字 | 说明 |
| :-: | :-: |
| default | 选项文字 |
| indicator | 顶部指示器 |

## Events

| 名称 | 描述 |
| :-: | :-: |
| on-translate-change | 偏移大小translate发生变化 |