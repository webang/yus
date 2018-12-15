<template>
  <div class="ym-navbar">
    <div class="ym-navbar-left">
      <slot name="left">
        <div class="ym-navbar-button" @click="handleClickLeft">
          <i class="ym-navbar-button__icon iconfont icon-left" v-if="leftArrow"></i>
          <span class="ym-navbar-button__text" v-text="leftText"></span>
        </div>
      </slot>
    </div>
    <div class="ym-navbar-title">
      <slot>{{ title }}</slot>
    </div>
    <div class="ym-navbar-right">
      <slot name="right">
        <div class="ym-navbar__right-button" @click="handleClickRight">{{ rightText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Button from '../button'
export default {
  name: 'ym-navbar',
  components: {
    Button
  },
  props: {
    title: String,
    leftText: {
      type: String,
      default: '返回'
    },
    rightText: String,
    leftArrow: {
      type: Boolean,
      default: true
    },
    fixed: Boolean,
    goBack: {
      Boolean: Boolean,
      default: true
    }
  },
  methods: {
    handleClickLeft () {
      this.$emit('on-click-left')
      if (this.goBack) {
        this.$router.back()
      }
    },
    handleClickRight () {
      this.$emit('on-click-right')
    }
  }
}
</script>

<style src="./index.scss" lang="scss"></style>
