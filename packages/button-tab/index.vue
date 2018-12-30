<template>
	<div class="vmu-button-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vmu-button-tab',
  props: {
    value: Number
  },
  data () {
    return {
      currentIndex: this.value
    }
  },
  watch: {
    value (val) {
      this.currentIndex = val
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
