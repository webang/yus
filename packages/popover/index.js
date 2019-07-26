import { use } from '../utils/use';
import Backdrop from '../backdrop';

const [useName, bem] = use('popover');

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
      default: 'bottom-right' // bottom-right bottom-left
    },
    gutter: {
      type: Number,
      default: 5
    },
    value: {
      type: Boolean,
      default: false
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      position: {
        top: 0,
        left: 0
      },
      popoverStyle: {}
    };
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
      this.$nextTick(() => {
        this.init();
      });
    }
  },
  mounted() {
    this.visible = this.value;
    this.$nextTick(() => {
      this.init();
      window.addEventListener('resize', this.reset);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reset);
  },
  methods: {
    toggle($event) {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
    handleClickBackdrop() {
      if (this.closeOnClickBackdrop) {
        this.$emit('input', false);
      }
      this.$emit('click-backdrop');
    },
    init() {
      const popover = this.$refs.popover;
      const trigger = this.$refs.trigger.children[0];

      switch (this.placement) {
        case 'top':
          this.position.left =
            trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
          this.position.top =
            trigger.getBoundingClientRect().top - popover.offsetHeight - this.gutter;
          break;
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth - this.gutter;
          this.position.top =
            trigger.getBoundingClientRect().top +
            trigger.offsetHeight / 2 -
            popover.offsetHeight / 2;
          break;
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth + this.gutter;
          this.position.top =
            trigger.getBoundingClientRect().top +
            trigger.offsetHeight / 2 -
            popover.offsetHeight / 2;
          break;
        case 'bottom':
          // 底部中间位置对齐
          this.position.left =
            trigger.getBoundingClientRect().left +
            trigger.offsetWidth / 2 -
            popover.offsetWidth / 2;
          this.position.top =
            trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter;
          break;
        case 'bottom-left':
          // 底部左对齐
          this.position.left = trigger.getBoundingClientRect().left;
          this.position.top =
            trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter;
          break;
        case 'bottom-right':
          // 底部右对齐
          this.position.left =
            trigger.getBoundingClientRect().left +
            trigger.offsetWidth -
            popover.offsetWidth;
          this.position.top =
            trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter;
          break;
        default:
          console.warn('Wrong placement prop');
      }
      this.popoverStyle = {
        top: this.position.top + 'px',
        left: this.position.left + 'px'
      };
    },
    reset() {
      this.init();
    }
  },
  render() {
    return (
      <div class={bem() + '-wrapper'}>
        <span ref="trigger" onClick={this.toggle}>
          {this.$slots.default}
        </span>
        <Backdrop vModel={this.visible} vOn:click={this.handleClickBackdrop} />
        <div
          vShow={this.visible}
          ref="popover"
          class={bem([this.placement])}
          style={this.popoverStyle}
        >
          <div class={bem('content')}>
            <div class={bem('arrow')} />
            <div class={bem('inner')}>{this.$slots.content}</div>
          </div>
        </div>
      </div>
    );
  }
});
