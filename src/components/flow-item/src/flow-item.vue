<template>
  <div
    class="ym-flow"
    :class="[
      'ym-flow--'+direction,
      {
        ['ym-flow--'+status]: status
      }
    ]"
  >
    <div class="ym-flow-head">
      <div class="ym-flow__icon"></div>
      <div class="ym-flow__line"></div>
    </div>
    <div class="ym-flow-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-flow-item',
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
