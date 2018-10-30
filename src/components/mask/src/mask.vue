<template>
  <transition name="ymu-mask">
   <div
    class="ymu-mask"
    @click="handleClick"
    v-show="value"></div>
 </transition>
</template>

<script>
export default {
  name: 'ymu-mask',
  props: {
    value: Boolean
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" src="./mask.scss"></style>
