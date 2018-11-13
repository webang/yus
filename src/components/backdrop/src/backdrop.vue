<template>
  <transition :name="transition">
   <div
    class="ym-backdrop"
    @click="handleClick"
    v-show="value"></div>
 </transition>
</template>

<script>
export default {
  name: 'ym-backdrop',
  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'ym-backdrop'
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" src="./backdrop.scss"></style>
