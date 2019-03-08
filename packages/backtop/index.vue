<template>
  <div class="ymu-backtop" @click="handleClick">
    <i class="ymuicon ios-backtop-outline ymu-backtop__icon"></i>
    <span class="ymu-backtop__text" v-text="text" v-if="text"></span>
  </div>
</template>

<script>
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间
*/

// 此处还缺一些动画的算法
// const moveJS = {
//   linear: function (t, b, c, d) {
//     return c * t / d + b
//   }
// }

import use from '../../src/utils/use'
const [useName, useBem] = use('backtop')

export default useName({
  props: {
    text: String
  },
  methods: {
    handleClick () {
      // 兼容写法
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.$emit('click')
    }
  }
})
</script>
