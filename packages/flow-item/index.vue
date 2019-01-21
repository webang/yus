<template>
  <div
    class="ymu-flow-item"
    :class="flowCls"
  >
    <div class="ymu-flow-item-head">
      <div class="ymu-flow-item__icon">
        <slot name="icon">
          <template v-if="isFinish">
            <img v-if="finishIconProp" :src="finishIconProp">
            <Icon v-else name="ios-checkmark-circle"/>
          </template>
          <template v-else-if="isProcess">
            <img v-if="processIconProp" :src="processIconProp">
            <Icon v-else name="ios-checkmark-circle"/>
          </template>
          <template v-else>
            <img v-if="waitingIconProp" :src="waitingIconProp">
            <Icon v-else name="ios-radio-button-off"/>
          </template>
        </slot>
      </div>
      <div class="ymu-flow-item__line"></div>
    </div>
    <div class="ymu-flow-item-main">
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
        'ymu-flow-item--' + this.direction,
        'ymu-flow-item--' + this.status
      ]
    },
    finishIconProp () {
      return this.$parent.finishIcon
    },
    processIconProp () {
      return this.$parent.processIcon
    },
    waitingIconProp () {
      return this.$parent.waitingIcon
    }
  }
})
</script>

<style src="./index.scss" lang="scss"></style>
