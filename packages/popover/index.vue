<template>
  <div>
    <span ref="trigger" @click="toggle">
      <slot></slot>
    </span>
    <Backdrop class="ymu-popover-mask" v-model="visible"/>
    <div
      class="ymu-popover"
      v-show="visible"
      ref="popover"
      :style="popoverStyle"
    >
      <div class="ymu-popover-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Backdrop from '../backdrop';
import use from '../../src/utils/use';
const [useName, useBem] = use('popover');

export default useName({
  components: {
    Backdrop
  },
  props: {
    showBackdrop: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom' // top left right bottom
    },
    gutter: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      visible: false,
      position: {
        top: 0,
        left: 0
      },
      popoverStyle: {}
    };
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
      window.addEventListener('resize', this.reset)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.reset)
  },
  methods: {
    toggle () {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          this.init(true);
        })
      }
    },
    init () {
      const trigger = this.$refs.trigger.children[0]
      const popover = this.$refs.popover
      switch (this.placement) {
        case 'top' :
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.getBoundingClientRect().top - popover.offsetHeight - this.gutter
          break
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth - this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth + this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'bottom':
          console.log(trigger.offsetLeft, trigger.offsetWidth, popover.offsetWidth)
          const left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
          this.position.left = left
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter
          break
        default:
          console.warn('Wrong placement prop')
      }
      this.popoverStyle = {
        top: this.position.top + 'px',
        left: this.position.left + 'px'
        // display: isReset ? this.popoverStyle.display : 'none'
      }
      // console.log(popoverStyle);
    }
  }
});
</script>
