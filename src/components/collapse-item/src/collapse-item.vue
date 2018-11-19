<template>
  <div
    class="ym-collapse-item"
    :class="{
      'ym-collapse-item--active': currentValue,
      'ym-collapse-item--without-border': !border
    }"
    @click="handleClick"
  >
    <div class="ym-collapse-item__hd">
      <div class="ym-collapse-item__hd__title">
        <slot name="title">
          <p v-text="title"></p>
        </slot>
      </div>
      <i class="ym-collapse-item__hd__right-icon ym-icon icon-arrow_up"></i>
    </div>
    <div
      class="ym-collapse-item__bd"
      :class="{'ym-collapse-item__bd--active': currentValue}"
      ref="wrapper"
      v-show="currentValue"
      @transitionend="handleTransitionend"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { raf } from '../../../utils/utils'
export default {
  name: 'ym-collapse-item',
  props: {
    value: Boolean,
    title: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentValue: true,
      currentHeight: 0,
      height: 0
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {
        return
      }
      const nextValue = !this.currentValue
      if (this.$parent.accordion) {
        this.$parent.$children.forEach((child) => {
          if (child !== this) {
            child.toggleValue(false)
          }
        })
      }
      this.toggleValue(nextValue)
    },
    toggleValue (nextValue) {
      if (nextValue) {
        this.currentValue = nextValue
        raf(() => {
          this.updateWrapperHeight(this.height)
        })
      } else {
        this.updateWrapperHeight(0)
      }
    },
    handleTransitionend (event) {
      const currentHeight = this.$refs.wrapper.clientHeight
      if (currentHeight !== 0) {
        this.currentValue = true
      } else {
        this.currentValue = false
      }
    },
    updateWrapperHeight (height) {
      this.$refs.wrapper.style.height = `${height}px`
    }
  },
  mounted () {
    const height = this.$refs.wrapper.clientHeight
    this.height = height
    if (this.value) {
      this.updateWrapperHeight(height)
      this.currentValue = true
    } else {
      this.updateWrapperHeight(0)
      this.currentValue = false
    }
  }
}
</script>

<style lang="scss" src="./collapse-item.scss"></style>
