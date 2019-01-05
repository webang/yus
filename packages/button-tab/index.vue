<template>
	<div class="ymu-button-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-button-tab',
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
        return VueComponent.$vnode.componentOptions.Ctor.options.name === 'ymu-button-tab-item'
      })
    },
    toggleValue (activeIndex) {
      this.$emit('input', activeIndex)
    }
  },
  mounted () {
    this.findChildList()
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
