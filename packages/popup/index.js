import { use } from '../utils/use';
import Backdrop from '../backdrop';

const [useName, bem] = use('popup');

export default useName({
  components: {
    Backdrop
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      show: this.value
    };
  },

  computed: {
    transition() {
      return bem() + '--' + this.position;
    }
  },

  watch: {
    value(val) {
      this.show = val;
    },

    show(val) {
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
        <Backdrop vModel={this.show} vOn:click={this.onClickBackdrop} />
        <transition name={this.transition}>
          <div class={bem([this.position])} vShow={this.show}>
            {this.$slots.default}
          </div>
        </transition>
      </div>
    );
  }
});
