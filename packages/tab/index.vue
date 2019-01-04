<template>
  <div class="ymu-tab">
    <slot name="title">
      <span v-text="title"></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ymu-tab',
  props: {
    title: String
  },
  mounted () {
    const { tabList } = this.$parent
    const index = this.$parent.$slots.default.indexOf(this.$vnode)
    tabList.splice(index === -1 ? tabList.length : index, 0, this);
    console.log(tabList)
  }
}
</script>
