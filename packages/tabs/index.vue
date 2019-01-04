<template>
  <div class="ymu-tabs">
    <div class="ymu-tabs-wrap">
      <!-- <slot></slot> -->
      <div class="ymu-tab" v-for="(item, index) in tabList" :key="index">
        <span v-text="item.title"></span>
      </div>
    </div>
    <div class="ymu-tabs-content-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-tabs',
  props: {
    value: Number,
    disabled: Boolean,
    sticky: Boolean,
    swipeable: Boolean,
    animate: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      tabList: []
    }
  },
  mounted () {
    console.log(this.$children)
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
