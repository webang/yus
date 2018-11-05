<template>
  <div
    class="ymu-tabbar-item"
    :class="{'ymu-tabbar-item--active': isActive}"
    @click="handleClick"
    :style="itemStyle"
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
      <div class="ymu-tabbar-item__text">{{ title }}</div>
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
  name: 'ymu-tabbar-item',
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
