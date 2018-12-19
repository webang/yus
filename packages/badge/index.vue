<template>
  <span class="ym-badge" :class="{'ym-badge--single': isSingle, 'ym-badge--dot': isDot }" v-text="text"></span>
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
