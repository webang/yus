<template>
  <div
    class="ym-tabbar-item"
    :class="{'ym-tabbar-item--active': isActive}"
    @click="handleClick"
    :style="itemStyle"
  >
    <slot>
      <div
        class="ym-tabbar-item__icon"
        :class="{'ym-tabbar-item__icon--dot': dot}"
        v-if="$slots.icon || icon"
      >
        <span class="ym-tabbar-item__badge" v-if="badge">
          <slot name="badge">{{ badge }}</slot>
        </span>
        <slot name="icon">
          <img class="ym-tabbar-icon" v-if="isActive" :src="selectedIcon">
          <img class="ym-tabbar-icon" v-else :src="icon">
        </slot>
      </div>
      <div class="ym-tabbar-item__text">
        <slot name="title">{{ title }}</slot>
      </div>
    </slot>
  </div>
</template>

<script>
import findParentMixin from '../../src/mixins/findParent'
export default {
  name: 'ym-tabbar-item',
  mixins: [findParentMixin],
  props: {
    title: String,
    icon: String,
    dot: Boolean,
    color: String,
    selectedIcon: String,
    selectedColor: String,
    badge: [Number, String]
  },
  computed: {
    activeIndex () {
      return this.parent.value
    },
    currentIndex () {
      return this.parent.$children.indexOf(this)
    },
    isActive () {
      return this.activeIndex === this.currentIndex
    },
    itemStyle () {
      return {
        color: this.isActive ? this.selectedColor : this.color
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
      this.$parent.$emit('on-click-item', this.currentIndex)
    }
  },
  created () {
    this.findParent('ym-tabbar')
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
