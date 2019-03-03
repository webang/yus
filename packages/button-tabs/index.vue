<template>
	<div class="ymu-button-tabs">
    <slot></slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('button-tabs')

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
    findChildList () {
      this.childList = this.$children.filter(VueComponent => {
        return VueComponent.$vnode.componentOptions.Ctor.options.name === 'ymu-button-tab'
      })
    },
    toggleValue (activeIndex) {
      this.$emit('input', activeIndex)
    }
  },
  mounted () {
    this.findChildList()
  }
})
</script>

index.scss
