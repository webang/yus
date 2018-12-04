<template>
  <div class="ym-backtop" @click="handleClick">
    <i class="ym-icon ym-icon-backtop"></i>
    <span class="ym-backtop__text" v-text="text"></span>
  </div>
</template>

<script>
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间
*/
// const moveJS = {
//   linear: function (t, b, c, d) {
//     return c * t / d + b
//   }
// }

export default {
  name: 'ym-backtop',
  props: {
    text: {
      type: String,
      default: '顶部'
    }
  },
  methods: {
    handleClick () {
      // 此处还缺一些动画的算法
      document.documentElement.scrollTop = 0
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" src="./backtop.scss"></style>
