<template>
  <transition :name="transition">
    <div
      class="ymu-backdrop"
      @click="handleClick"
      @touchmove="onTouchMove"
      v-show="value"
    >
      <slot></slot>
    </div>
 </transition>
</template>

<script>
import use from '../../src/utils/use'
const [useName, useBem] = use('backdrop')

export default useName({
  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'ymu-backdrop'
    },
    'prevent-on-touchmove': {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('click');
      if (!this.disabled) {
        this.$emit('input', false);
      }
    },
    onTouchMove (event) {
      if (this.preventOnTouchmove) {
        event.preventDefault();
      }
      this.$emit('touchmove');
    }
  }
});
</script>
