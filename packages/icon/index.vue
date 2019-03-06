<template>
  <i class="ymuicon" :class="name" @click="$emit('click')"></i>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('icon')

export default useName({
  props: {
    name: String
  }
})
</script>