import Icon from '../icon';
import { use } from '../utils/use';
const [useName, bem] = use('notice-bar');

export default useName({
  components: {
    Icon
  },
  data () {
    return {
      offset: 0,
      currentOffset: 0,
      timeId: null
    }
  },
  props: {
    wait: {
      type: Number,
      default: 2000
    },
    frequence: {
      type: Number,
      default: 40
    },
    loop: {
      type: Boolean,
      default: true
    },
    'show-footer': {
      type: Boolean,
      default: true
    },
    'show-header': {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    style() {
      return {
        left: this.currentOffset + 'px'
      }
    }
  },
  methods: {
    caclSize () {
      const barContent = this.$refs.barContent
      const marqueeWrap = this.$refs.marqueeWrap
      const pWidth = barContent.clientWidth
      const cWidth = marqueeWrap.offsetWidth
      this.offset = pWidth - cWidth
    },
    play () {
      this.currentOffset--
      if (this.currentOffset < this.offset) {
        if (this.loop) {
          this.timeId = setTimeout(() => {
            this.currentOffset = 0
            this.play()
          }, this.wait)
        }
      } else {
        this.timeId = setTimeout(() => {
          this.play()
        }, this.frequence)
      }      
    }
  },
  mounted () {
    this.caclSize()
    setTimeout(this.play, this.delay)
  },
  beforeDestroy () {
    clearTimeout(this.timeId)
  },
  render() {
    return (
      <div class={bem()}>
        {
          this.showHeader ? (
            <div class={bem('hd')} onClick={() => this.$emit('click-header')}>
            {
              this.$slots.header ? this.$slots.header : <Icon class={bem('icon-left')} name="ios-megaphone"></Icon>
            }
          </div>
          ) : null
        }
      <div class={bem('bd')} ref="barContent">
        <div class={bem('marquee-wrap')} ref="marqueeWrap" style={this.style}>
          { this.$slots.default }
        </div>
      </div>
      {
        this.showFooter ? (
          <div class={bem('ft')}onClick={() => this.$emit('click-footer')}>
          { this.$slots.footer ? this.$slots.footer : <Icon class={bem('icon-right')} name="ios-close"></Icon> }
        </div>
        ) : null
      }
    </div>
    );
  }
});
