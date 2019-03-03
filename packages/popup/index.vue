<template>
  <div class="ymu-popup">
    <Backdrop v-model="value" @click="onClickBackdrop"></Backdrop>
    <transition :name="transition">
      <div
        class="ymu-popup-content"
        v-show="value"
        :class="['ymu-popup--' + position]"
      >
        <slot name="header" v-if="useHeader || $slots.header">
          <Toolbar
            :title="title"
            :leftText="leftText"
            :rightText="rightText"
            @on-click-left="$emit('on-click-left')"
            @on-click-right="$emit('on-click-right')"
          />
        </slot>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
/**
 * @props value 显示或隐藏
 * @props position 弹出的位置 bottom top left right
 * @props closeOnClickBackdrop 点击幕布关闭popup
 */
import Toolbar from '../toolbar'
import Backdrop from '../backdrop'
import use from '../../src/utils/use'
const [useName, useBem] = use('popup')

export default useName({
  components: {
    Toolbar,
    Backdrop
  },
  props: {
    value: Boolean,
    useHeader: Boolean,
    title: String,
    leftText: String,
    rightText: String,
    position: {
      type: String,
      default: 'bottom'
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    transition () {
      return 'ymu-popup--' + this.position
    }
  },
  methods: {
    onClickBackdrop () {
      this.$emit('on-click-backdrop')
      if (this.closeOnClickBackdrop) {
        this.$emit('input', false)
      }
    }
  }
})
</script>

index.scss
