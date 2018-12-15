<template>
  <div class="ym-popup">
    <Backdrop v-model="value" @click="onClickBackdrop"></Backdrop>
    <transition :name="transition">
      <div
        class="ym-popup-content"
        v-show="value"
        :class="['ym-popup--' + position]"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
/**
 * @props value 显示或隐藏
 * @props position 弹出的位置 bottom top left right
 * @props closeOnClickBackdrop 点击幕布关闭popup
 */
import Backdrop from '../backdrop'
export default {
  name: 'ym-popup',
  components: {
    Backdrop
  },
  props: {
    value: Boolean,
    position: {
      type: String,
      default: 'bottom'
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    transition () {
      return 'ym-popup--' + this.position
    }
  },
  methods: {
    onClickBackdrop () {
      this.$emit('on-click-backdrop')
      if (this.closeOnClickBackdrop) {
        this.$emit('input', false)
      }
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
