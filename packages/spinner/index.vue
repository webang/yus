<template>
  <div :class="spinnerCls" :style="spinnerStyle">
    <template v-if="type==='android'">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </template>
    <template v-if="type==='ios'">
      <i class="ymu-spinner-item" v-for="(item, index) in 12" :key="index"></i>
    </template>
    <template v-if="type==='triple-bounce'">
      <i class="ymu-spinner-item" v-for="(item, index) in 3" :key="index"></i>
    </template>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('spinner')

export default useName({
  props: {
    color: {
      type: String,
      default: '#c9c9c9'
    },
    type: {
      type: String, // circle triple-bounce spinner
      default: 'android'
    }
  },
  computed: {
    spinnerCls () {
      return [
        'ymu-spinner',
        `ymu-spinner--${this.type}`
      ]
    },
    spinnerStyle () {
      return {
        // color: this.color
      }
    }
  }
})
</script>
