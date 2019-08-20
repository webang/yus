import { use } from '../utils/use';
import Backdrop from '../backdrop';

const [useName, bem] = use('popup');

export default useName({
  components: {
    Backdrop
  },

  props: {
    // 是否显示
    value: {
      type: Boolean,
      default: false
    },

    // 弹出方向
    position: {
      type: String,
      default: 'bottom'
    },
    
    // 点击幕布时是否触发关闭
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      visible: this.value
    };
  },

  computed: {
    transition() {
      return bem() + '--' + this.position;
    }
  },

  watch: {
    value(val) {
      this.visible = val;
    },

    visible(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    onClickBackdrop(event) {
      this.closeOnClickBackdrop && this.$emit('input', false);
      this.$emit('click-backdrop', event);
    }
  },

  render() {
    return (
      <div class={bem() + '-wrapper'}>
        <Backdrop vModel={this.visible} vOn:click={this.onClickBackdrop} />
        <transition name={this.transition}>
          <div class={bem([this.position])} vShow={this.visible}>
            {this.$slots.default}
          </div>
        </transition>
      </div>
    );
  }
});
