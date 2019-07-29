<template>
  <div
    class="yus-tabbar-item"
    :class="{'yus-tabbar-item--active': isActive}"
    @click="handleClick"
    :style="curStyle"
  >
    <slot>
      <div
        class="yus-tabbar-item__icon"
        :class="{'yus-tabbar-item__icon--dot': dot}"
        v-if="$slots.icon || icon"
      >
        <span class="yus-tabbar-item__badge" v-if="badge">
          <slot name="badge">{{ badge }}</slot>
        </span>
        <slot name="icon">
          <img class="yus-tabbar-icon" v-if="isActive" :src="activeIcon">
          <img class="yus-tabbar-icon" v-else :src="icon">
        </slot>
      </div>
      <div class="yus-tabbar-item__text">
        <slot name="title">{{ title }}</slot>
      </div>
    </slot>
  </div>
</template>

<script>
import Tabbar from '../tabbar'
import use from '../utils/use'
import findParentMixin from '../mixins/findParent'

const [useName, useBem] = use('tabbar-item')

export default useName({
  mixins: [findParentMixin],
  props: {
    title: String,
    icon: String,
    dot: Boolean,
    color: String,
    activeIcon: String,
    activeColor: String,
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
        color: this.isActive ? this.activeColor : this.color
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