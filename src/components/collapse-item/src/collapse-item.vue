<template>
  <div
    class="ym-collapse-item"
    :class="{'ym-collapse-item--active': isActive}"
    @click="handleClick"
  >
    <div class="ym-collapse-item__hd">
      <div class="ym-collapse-item__hd__title">
        <slot name="title">
          <p v-text="title"></p>
        </slot>
      </div>
      <i class="ym-collapse-item__hd__right-icon ym-icon icon-arrow_up"></i>
    </div>
    <div
      class="ym-collapse-item__bd"
      style="height: 0px"
      :class="{'ym-collapse-item__bd--active': isActive}"
      v-show="isActive"
      ref="content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-collapse-item',
  props: {
    accordion: Boolean,
    title: String,
    name: String
  },
  data () {
    return {
      isActive: false
    }
  },
  watch: {
    isActive (val) {
      if (val) {
        setTimeout(() => {
          this.$refs.content.style.height = `44px`
        })
      } else {
        this.$refs.content.style.height = `0px`
      }
    }
  },
  methods: {
    handleClick () {
      this.$parent.$children.forEach(item => {
        item.isActive = false
      })
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" src="./collapse-item.scss"></style>
