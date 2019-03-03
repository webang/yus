<template>
  <div class="ymu-toolbar">
    <slot>
      <template v-if="leftText">
        <div class="ymu-toolbar-left" @click="$emit('on-click-left')">{{ leftText }}</div>
      </template>
      <template v-if="title">
        <div class="ymu-toolbar-title">{{ title }}</div>
      </template>
      <template v-if="rightText">
        <div class="ymu-toolbar-right" @click="$emit('on-click-right')">{{ rightText }}</div>
      </template>
    </slot>
  </div>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('toolbar')

export default useName({
  props: {
    title: String,
    leftText: String,
    rightText: String,
    showBottomBorder: false
  }
})
</script>

index.scss