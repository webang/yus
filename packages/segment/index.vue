<template>
	<div class="ymu-segment">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('segment')

export default useName({
  props: {
    value: Number
  },
  data () {
    return {
      childList: [],
      currentIndex: this.value
    }
  },
  watch: {
    value (val) {
      this.currentIndex = val
    }
  },
  methods: {
    toggleValue (activeIndex) {
      this.$emit('input', activeIndex)
    }
  }
})
</script>

index.scss
