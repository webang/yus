<template>
  <div
    class="ymu-tabbar-item"
    :class="{'ymu-tabbar-item--active': isActive}"
    @click="handleClick"
    :style="curStyle"
  >
    <slot>
      <div
        class="ymu-tabbar-item__icon"
        :class="{'ymu-tabbar-item__icon--dot': dot}"
        v-if="$slots.icon || icon"
      >
        <span class="ymu-tabbar-item__badge" v-if="badge">
          <slot name="badge">{{ badge }}</slot>
        </span>
        <slot name="icon">
          <img class="ymu-tabbar-icon" v-if="isActive" :src="selectedIcon">
          <img class="ymu-tabbar-icon" v-else :src="icon">
        </slot>
      </div>
      <div class="ymu-tabbar-item__text">
        <slot name="title">{{ title }}</slot>
      </div>
    </slot>
  </div>
</template>

<script>
import findParentMixin from '../../src/mixins/findParent'
import Tabbar from '../tabbar'
import use from '../../src/utils/use'
const [useName, useBem] = use('tabbar-item')

export default useName({
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
    curStyle () {
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
    this.findParent(Tabbar.name)
  }
})
</script>

index.scss
