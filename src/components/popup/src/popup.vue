<template>
  <div class="ymu-popup">
    <Backdrop v-model="value" @click="handleClickBackdrop"></Backdrop>
    <transition :name="transition">
      <div
        class="ymu-popup-content"
        v-show="value"
        :class="['ymu-popup--' + position]"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
export default {
  name: 'ymu-popup',
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
      return 'ymu-popup--' + this.position
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
