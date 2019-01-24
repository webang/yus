<template>
  <Clickable class="doc-button">
    <span>点击我会有反馈</span>
  </Clickable>
</template>

<script>
import { Clickable } from 'ymu'
export default {
  components: {
    Clickable
  }
}
</script>

<style lang="scss" scoped>
.doc-button {
  padding: 20px;
  margin-top: 20px;
}
</style>