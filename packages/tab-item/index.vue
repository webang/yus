<template>
  <div :class="curCls" @click="onClick">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import use from '../../src/utils/use'
const [useName, useBem] = use('tab-item')

export default useName({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    curCls () {
      return {
        'ymu-tab-item': true,
        'ymu-tab-item--active': this.isActive,
        'ymu-tab-item--disabled': this.disabled
      }
    },
    isActive () {
      return this.$parent.$children.indexOf(this) === this.$parent.value
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        const index = this.$parent.$children.indexOf(this)
        this.$parent.$emit('input', index)
        this.$emit('click')
      }
    }
  }
})
</script>
