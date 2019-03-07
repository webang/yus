<template>
  <span class="ymu-badge" :class="curCls" v-text="text"></span>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('badge')

export default useName({
  props: {
    text: [String]
  },
  computed: {
    isSingle () {
      return this.text && this.text.length === 1
    },
    isDot () {
      return (this.text && this.text.length === 0) || typeof this.text === 'undefined'
    },
    curCls () {
      return {
        'ymu-badge--dot': this.isDot,
        'ymu-badge--single': this.isSingle
      }
    }
  }
})
</script>
