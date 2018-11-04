<template>
  <div
    class="ymu-flow"
    :class="[
      'ymu-flow--'+direction,
      {
        ['ymu-flow--'+status]: status
      }
    ]"
  >
    <div class="ymu-flow-head">
      <div class="ymu-flow__icon"></div>
      <div class="ymu-flow__line"></div>
    </div>
    <div class="ymu-flow-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-flow-item',
  computed: {
    currentIndex () {
      return this.$parent.$children.indexOf(this)
    },
    activeIndex () {
      return this.$parent.activeIndex
    },
    direction () {
      return this.$parent.direction
    },
    status () {
      if (this.currentIndex < this.activeIndex) {
        return 'finish'
      } else if (this.currentIndex === this.activeIndex) {
        return 'process'
      }
    }
  }
}
</script>

<style src="./flow-item.scss" lang="scss"></style>
