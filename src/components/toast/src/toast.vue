<template>
  <transition :name="transition">
    <div
      v-show="visible"
      class="ymu-toast"
      :class="[
        'ymu-toast--'+type,
        'ymu-toast--'+position
      ]"
    >
      <div class="ymu-toast-content">
        <slot>
          <slot name="icon">
            <div class="ymu-toast__icon-wrap" v-if="hasIcon">
              <i class="iconfont ymu-toast__icon" :class="['icon-'+type]"></i>
            </div>
          </slot>
          <span class="ymu-toast__text">{{ message }}</span>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ymu-toast',
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
      return 'ymu-toast--' + this.position
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
