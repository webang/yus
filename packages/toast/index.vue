<template>
  <transition :name="transition">
    <div :class="toastCls" v-show="visible">
      <slot name="icon">
        <i class="ymu-toast__icon ymuicon" :class="iconName" v-if="hasIcon"></i>
      </slot>
      <slot name="message">
        <div class="ymu-toast__text">{{ message }}</div>
      </slot>
    </div>
  </transition>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('toast')
const iconTypeMap = {
  success: 'ios-checkmark',
  warn: 'ios-warning',
  alert: 'ios-alert',
  fail: 'ios-close',
  error: 'ios-close'
}

export default useName({
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
    toastCls () {
      return [
        'ymu-toast',
        'ymu-toast--' + this.type,
        'ymu-toast--' + this.position
      ]
    },
    transition () {
      return 'ymu-toast--' + this.position
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
})
</script>
