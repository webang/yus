<template>
  <div class="ymu-tab" :class="tabCls" @click="onClick">
    <slot name="title">
      <span v-text="title"></span>
    </slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('tab')

export default useName({
  props: {
    title: String,
    disabled: Boolean
  },
  computed: {
    parentValue () {
      return this.$parent.value
    },
    index () {
      return this.$parent.$children.indexOf(this)
    },
    isActive () {
      return this.index === this.parentValue
    },
    tabCls () {
      return {
        'ymu-tab--active': this.isActive,
        'ymu-tab--disabled': this.disabled
      }
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$parent.toggleValue(this.index)
      }
    }
  }
})
</script>

index.scss