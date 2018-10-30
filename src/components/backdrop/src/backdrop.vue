<template>
  <transition :name="transition">
   <div
    class="ymu-backdrop"
    @click="handleClick"
    v-show="value"></div>
 </transition>
</template>

<script>
export default {
  name: 'ymu-backdrop',
  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'ymu-backdrop'
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
