<template>
  <div
    class="ymu-collapse-item"
    :class="{
      'ymu-collapse-item--active': currentValue,
      'ymu-collapse-item--border': border
    }"
    @click="handleClick"
  >
    <div class="ymu-collapse-item__hd">
      <div class="ymu-collapse-item__title">
        <slot name="title">
          <p v-text="title"></p>
        </slot>
      </div>
      <Icon
        name="ios-arrow-up"
        class="ymu-collapse-item__right-icon"
        :class="{'is-active': currentValue}"
      />
    </div>
    <div
      class="ymu-collapse-item__wrap"
      ref="wrapper"
      v-show="currentValue"
      @transitionend="handleTransitionend"
    >
      <div class="ymu-collapse-item__content">
        <slot>
          <p v-if="content" v-text="content"></p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'
import use from '../../src/utils/use'
const [useName, useBem] = use('collapse-item')

export default useName({
  components: {
    Icon
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
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
      if (this.disabled) return
      const nextValue = !this.currentValue
      if (this.$parent.accordion) {
        this.$parent.$children.forEach((child) => {
          if (child !== this) child.toggleValue(false)
        })
      }
      this.toggleValue(nextValue)
    },
    toggleValue (nextValue) {
      if (nextValue) {
        this.currentValue = nextValue
        setTimeout(() => {
          this.updateWrapperHeight(this.height)
        }, 17)
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
})
</script>

<style lang="scss" src="./index.scss"></style>
