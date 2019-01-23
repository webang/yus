<template>
  <div :class="radioGroupCls">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('radio-group')

export default useName({
  props: {
    value: [String, Number, Boolean]
  },
  computed: {
    radioGroupCls () {
      return [
        'ymu-radio-group'
      ]
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
