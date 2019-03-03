<template>
  <div>
    <Backdrop :transition="backdropTransition" @click="onClickBackdrop" :value="value"></Backdrop>
    <transition :name="dialogTransition">
      <div class="ymu-dialog" v-show="value">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Backdrop from '../backdrop'
import use from '../../src/utils/use'
const [useName, useBem] = use('dialog')

export default useName({
  components: {
    Backdrop
  },
  props: {
    value: Boolean,
    backdropTransition: {
      type: String,
      default: 'ymu-backdrop'
    },
    dialogTransition: {
      type: String,
      default: 'ymu-dialog'
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
})
</script>

index.scss
