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
      <div class="ym-toast-content">
        <slot>
          <slot name="icon">
            <div class="ym-toast__icon-wrap" v-if="hasIcon">
              <i class="iconfont ym-toast__icon" :class="['icon-'+type]"></i>
            </div>
          </slot>
          <span class="ym-toast__text">{{ message }}</span>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
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
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  }
}
</script>

<style lang="scss" src="./toast.scss"></style>
