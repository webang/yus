<template>
  <div :class="loadingCls" :style="loadingStyle">
    <template v-if="type==='circle'">
      <div class="ymu-loading__spinner ymu-loading__spinner--circle">
        <svg viewBox="25 25 50 50" class="ymu-loading__circle">
          <circle cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
    </template>
    <template v-else-if="type==='triple-bounce'">
      <div class="ymu-loading__spinner ymu-loading__spinner--triple-bounce">
        <div class="ymu-spinner-triple-bounce-item"></div>
        <div class="ymu-spinner-triple-bounce-item"></div>
        <div class="ymu-spinner-triple-bounce-item"></div>
      </div>
    </template>
    <template v-else>
      <div class="ymu-loading__spinner ymu-loading__spinner--spinner ymu-spinner--spinner">
        <i class="ymu-spinner-spinner-item" v-for="(item, index) in 12" :key="index"></i>
      </div>
    </template>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('loading')

export default useName({
  props: {
    color: {
      type: String,
      default: '#c9c9c9'
    },
    type: {
      type: String, // circle triple-bounce spinner
      default: 'circle'
    }
  },
  computed: {
    loadingCls () {
      return [
        'ymu-loading',
        `ymu-loading--${this.type}`,
        {
          'ymu-loading--white': this.color === 'white'
        }
      ]
    },
    loadingStyle () {
      return {
        color: this.color
      }
    }
  }
})
</script>
