<template>
  <div
    class="ymu-flow"
    :class="flowCls"
  >
    <div class="ymu-flow-head">
      <div class="ymu-flow__icon">
        <slot name="icon">
          <Icon v-if="isFinish" name="ios-checkmark-circle"/>
          <Icon v-else="isProcess" name="ios-radio-button-off"/>
        </slot>
      </div>
      <div class="ymu-flow__line"></div>
    </div>
    <div class="ymu-flow-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import use from '../../src/utils/use'
const [useName, useBem] = use('flow-item')

export default useName({
  components: {
    Icon
  },
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
    isFinish () {
      return this.currentIndex < this.activeIndex
    },
    isProcess () {
      return this.currentIndex === this.activeIndex
    },
    isWaiting () {
      return this.currentIndex > this.activeIndex
    },
    status () {
      if (this.currentIndex < this.activeIndex) {
        return 'finish'
      } else if (this.currentIndex === this.activeIndex) {
        return 'process'
      } else {
        return 'waiting'
      }
    },
    flowCls () {
      return [
        'ymu-flow--' + this.direction,
        'ymu-flow--' + this.status
      ]
    }
  }
})
</script>

<style src="./index.scss" lang="scss"></style>
