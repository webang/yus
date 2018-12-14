<template>
  <transition :name="transition">
    <div
      v-show="visible"
      class="ym-toast"
      :class="[
        'ym-toast--'+type,
        'ym-toast--'+position
      ]"
    >
      <slot name="icon">
        <i class="ym-toast__icon ymuicon" :class="iconName" v-if="hasIcon"></i>
      </slot>
      <slot name="message">
        <div class="ym-toast__text">{{ message }}</div>
      </slot>
    </div>
  </transition>
</template>

<script>

const iconTypeMap = {
  success: 'ios-checkmark',
  warn: 'ios-warning',
  alert: 'ios-alert',
  fail: 'ios-close',
  error: 'ios-close'
}

export default {
  name: 'ym-toast',
  props: {
    value: Boolean,
    message: String,
    type: {
      type: String,
      default: 'text'
    },
    duration: {
      type: Number,
      default: 2000
    },
    position: {
      type: String,
      default: 'middle'
    },
    speed: {
      type: Number,
      default: 400
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    transition () {
      return 'ym-toast--' + this.position
    },
    hasIcon () {
      return this.type !== 'text'
    },
    iconName () {
      return iconTypeMap[this.type]
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
