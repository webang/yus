<template>
  <i class="ymuicon" :class="name" @click="$emit('click')"></i>
</template>

<script>
export default {
  props: {
    name: String,
    useDevice: Boolean
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
