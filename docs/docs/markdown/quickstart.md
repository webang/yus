# 快速上手

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world

# 安装 yus-vue
npm i yus-vue -S
```

## 引入组件

yus-vue 支持多种引入方式。

### 按需导入

安装插件:

```bash
npm i babel-plugin-import -D
```

babel 配置:

```js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'yus-vue',
      libraryDirectory: 'es',
      style: true
    }, 'yus-vue']
  ]
};

// 接着你可以在代码中直接引入 yus-vue 组件
import { Button } from 'yus-vue';
```

### 手动按需导入

```js
import Button from 'yus-vue/lib/button';
import 'yus-vue/lib/button/style';
```

### 导入所有组件

yus-vue 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```js
import Vue from 'vue';
import yus from 'yus-vue';
import 'yus-vue/lib/index.css';

Vue.use(yus);
```
