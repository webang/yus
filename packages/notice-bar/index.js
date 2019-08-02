import Icon from '../icon';
import { use } from '../utils/use';

const [useName, bem] = use('notice-bar');

export default useName({
  components: {
    Icon
  },

  data() {
    return {
      offset: 0,
      curOffset: 0,
      timeId: null
    };
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

    showFooter: {
      type: Boolean,
      default: false
    },

    showHeader: {
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
        left: this.curOffset + 'px'
      };
    }
  },

  methods: {
    caclSize() {
      const { body, content } = this.$refs;
      this.offset = body.clientWidth - content.offsetWidth;
    },

    play() {
      this.curOffset--;
      if (this.curOffset < this.offset) {
        if (!this.loop) {
          return;
        }
        this.timeId = setTimeout(() => {
          this.curOffset = 0;
          this.play();
        }, this.wait);
      } else {
        this.timeId = setTimeout(this.play, this.frequence);
      }
    }
  },

  mounted() {
    this.caclSize();
    setTimeout(this.play, this.delay);
  },

  beforeDestroy() {
    clearTimeout(this.timeId);
  },

  render() {
    return (
      <div class={bem()}>
        {this.showHeader ? (
          <div class={bem('hd')} v-on:click={() => this.$emit('click-header')}>
            {this.$slots.header ? (
              this.$slots.header
            ) : (
              <Icon class={bem('icon-left')} name="ios-megaphone" />
            )}
          </div>
        ) : null}
        <div class={bem('bd')} ref="body" v-on:click={() => this.$emit('click-body')}>
          <div class={bem('content')} ref="content" style={this.style}>
            {this.$slots.default}
          </div>
        </div>
        {this.showFooter ? (
          <div class={bem('ft')} v-on:click={() => this.$emit('click-footer')}>
            {this.$slots.footer ? (
              this.$slots.footer
            ) : (
              <Icon class={bem('icon-right')} name="ios-close" />
            )}
          </div>
        ) : null}
      </div>
    );
  }
});
