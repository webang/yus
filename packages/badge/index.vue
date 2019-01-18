<template>
  <span class="ymu-badge" :class="{'ymu-badge--single': isSingle, 'ymu-badge--dot': isDot }" v-text="text"></span>
</template>

<script>
export default {
  props: {
    text: [String]
  },
  computed: {
    isSingle () {
      return this.text && this.text.length === 1
    },
    isDot () {
      return (this.text && this.text.length === 0) || typeof this.text === 'undefined'
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
