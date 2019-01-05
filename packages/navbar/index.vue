<template>
  <div class="ym-navbar">
    <div class="ym-navbar-left">
      <slot name="left">
        <div
          class="ym-navbar-button"
          :class="{'ym-navbar-button--has-arrow': leftArrow}"
          @click="handleClickLeft"
        >
          <Icon class="ym-navbar-button__icon" v-if="leftArrow" name="ios-arrow-back"></Icon>
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
import Icon from '../icon'

export default {
  name: 'ym-navbar',
  components: {
    Icon,
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
