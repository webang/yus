<template>
  <div :class="clickCls" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <Cell label="回收宝"></Cell>
  </div>
</template>

<script>
import { Cell } from 'ymu'
export default {
  components: {
    Cell
  },
  data () {
    return {
      clickCls: ['ymu-clickable']
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleTouchStart() {
      console.log(1)
      if (!this.disabled) {
        this.clickCls = ['ymu-clickable', 'ymu-clickable--active']
      }
      this.$emit('touchstart')
    },
    handleTouchEnd () {
      this.clickCls = ['ymu-clickable']
      this.$emit('touchend')
    }
  }
}
</script>

<style lang="scss" scoped>
.ymu-clickable {
  margin-top: 20px;
}

.ymu-clickable--active {
  background: #e8e8e8;
}
</style>