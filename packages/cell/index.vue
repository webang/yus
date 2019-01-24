<template>
  <Clickable
    class="ymu-cell"
    @click="handleClick"
    :disabled="!(clickable || to || url)"
  >
    <template v-if="$slots.media">
      <div class="ymu-cell__media">
        <slot name="media"></slot>
      </div>
    </template>
    <div class="ymu-cell__label">
      <slot name="label">
        <span v-if="label">{{ label }}</span>
      </slot>
    </div>
    <div class="ymu-cell__value">
      <slot name="value">{{ value }}</slot>
    </div>
    <Icon class="icon" v-if="isLink" name="ios-arrow-forward"></Icon>
  </Clickable>
</template>

<script>
import Icon from '../icon'
import Clickable from '../clickable'
import use from '../../src/utils/use'
const [useName, useBem] = use('cell')
// :class="{'ymu-cell--clickable': clickable || to || url}"

export default useName({
  components: {
    Icon,
    Clickable
  },
  props: {
    isLink: Boolean,
    label: String,
    value: String,
    to: String,
    url: String,
    clickable: Boolean
  },
  methods: {
    handleClick () {
      this.$emit('click')
      if (this.to) {
        this.$router.push(this.to)
      } else if (this.url) {
        window.location.href = this.url
      }
    }
  }
})
</script>

<style lang="scss" src="./index.scss"></style>
