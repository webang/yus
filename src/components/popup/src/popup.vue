<template>
  <div class="ym-popup">
    <Backdrop v-model="value" @click="handleClickBackdrop"></Backdrop>
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
import Backdrop from '../../backdrop'
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
    }
  },
  computed: {
    transition () {
      return 'ym-popup--' + this.position
    }
  },
  methods: {
    handleClickBackdrop () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" src="./popup.scss"></style>
