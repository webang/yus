<template>
  <div class="ymu-navbar">
    <div class="ymu-navbar-left">
      <slot name="left">
        <div class="ymu-navbar-button" @click="handleClickLeft">
          <i class="ymu-navbar-button__icon iconfont icon-left" v-if="leftArrow"></i>
          <span class="ymu-navbar-button__text" v-text="leftText"></span>
        </div>
      </slot>
    </div>
    <div class="ymu-navbar-title">
      <slot>{{ title }}</slot>
    </div>
    <div class="ymu-navbar-right">
      <slot name="right">
        <div class="ymu-navbar__right-button" @click="handleClickRight">{{ rightText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Button from '../../button'
export default {
  name: 'ymu-navbar',
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

<style src="./navbar.scss" lang="scss"></style>
