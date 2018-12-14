<template>
  <div>
    <Backdrop :transition="backdropTransition" @click="onClickBackdrop" :value="value"></Backdrop>
    <transition :name="dialogTransition">
      <div class="ym-dialog" v-show="value">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
export default {
  name: 'ym-dialog',
  components: {
    Backdrop
  },
  props: {
    value: Boolean,
    backdropTransition: {
      type: String,
      default: 'ym-backdrop'
    },
    dialogTransition: {
      type: String,
      default: 'ym-dialog'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onClickBackdrop () {
      this.$emit('on-click-backdrop')
    },
    hide () {
      this.visible = false
    }
  },
  created () {
    this.visible = !!this.value
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
