<template>
  <div>
    <Backdrop @click="onBackdropClick"></Backdrop>
    <div class="ymu-dialog">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
export default {
  name: 'ymu-dialog',
  components: {
    Backdrop
  },
  props: {
    value: Boolean
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
    onBackdropClick () {
      console.log(1)
    }
  },
  created () {
    this.visible = !!this.value
  }
}
</script>

<style lang="scss" src="./dialog.scss"></style>
