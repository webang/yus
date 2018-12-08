<template>
  <i class="ymuicon" :class="name"></i>
</template>

<script>
export default {
  props: {
    name: String,
    useDevice: Boolean
  }
}
</script>
