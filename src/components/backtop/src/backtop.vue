<template>
  <div class="ym-backtop" @click="handleClick">
    <i class="ym-icon icon-backtop"></i>
    <span class="ym-backtop__text">顶部</span>
  </div>
</template>

<script>
/*
 * t: current time（当前时间）；
 * b: beginning value（初始值）；
 * c: change in value（变化量）；
 * d: duration（持续时间
*/
const moveJS = {
  linear: function (t, b, c, d) {
    return c * t / d + b
  }
}

export default {
  name: 'ym-backtop',
  methods: {
    handleClick () {
      // 此处还缺算法哦，要先去复习动画相关的算法了
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" src="./backtop.scss"></style>
