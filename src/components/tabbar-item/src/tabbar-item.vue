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
      <div class="ym-tabbar-item__text">{{ title }}</div>
    </slot>
  </div>
</template>

<script>
/**
 * @prop icon
 * @prop title
 * @prop selectedIcon
 * @prop badge
 */
export default {
  name: 'ym-tabbar-item',
  props: {
    title: String,
    icon: String,
    selected: {
      type: Boolean,
      default: false
    },
    selectedIcon: String,
    badge: [Number, String],
    dot: {
      type: Boolean,
      default: false
    },
    color: String,
    selectedColor: String
  },
  computed: {
    activeIndex () {
      return this.$parent.value
    },
    currentIndex () {
      return this.$parent.$children.indexOf(this)
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
      this.$parent.$emit('on-item-click', this.currentIndex)
    }
  }
}
</script>

<style lang="scss" src="./tabbar-item.scss"></style>
