<template>
  <div :class="switchCls" @click="handleClick">
    <div :class="nodeCls"></div>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('switch')

export default useName({
  props: {
    value: Boolean,
    disabled: Boolean
  },
  computed: {
    switchCls () {
      return [
        'ymu-switch',
        {
          'ymu-switch--on': this.value,
          'ymu-switch--disabled': this.disabled
        }
      ]
    },
    nodeCls () {
      return 'ymu-switch__node'
    }
  },
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  }
})
</script>

index.scss