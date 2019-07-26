import { use } from '../utils/use';
import Icon from '../icon';
import Backdrop from '../backdrop';
import Spinner from '../spinner';

const [useName, bem] = use('toast');

export default useName({
  components: {
    Icon,
    Spinner,
    Backdrop
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text' // text, loading, success, fail, warn
    },
    backdrop: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    transition() {
      return bem() + '--' + this.position;
    }
  },
  watch: {
    value(newValue) {
      this.visible = newValue;
    }
  },
  methods: {},
  render() {
    const cls = bem([
      this.type,
      this.position,
      {
        transparent: this.transparent
      }
    ]);

    const content = [];
    const loadingIcon = <Spinner class={bem('icon')} name="ios-checkmark" />;
    const failIcon = <Icon class={bem('icon')} name="ios-close" />;
    const warnIcon = <Icon class={bem('icon')} name="ios-alert" />;
    const successIcon = <Icon class={bem('icon')} name="ios-checkmark" />;
    const textEl = <span>{this.message}</span>;

    if (this.$slots.icon) {
      content.push(this.$slots.icon);
    } else if (this.type === 'loading') {
      content.push(loadingIcon);
    } else if (this.type === 'fail') {
      content.push(failIcon);
    } else if (this.type === 'success') {
      content.push(successIcon);
    } else if (this.type === 'warn') {
      content.push(warnIcon);
    }
    if (this.message) {
      content.push(textEl);
    }

    return (
      <div class={bem() + '-wrapper'}>
        <Backdrop
          value={this.backdrop && this.visible}
          style={{ background: this.transparent ? 'transparent' : 'auto' }}
        />
        <transition name={this.transition}>
          <div class={cls} vShow={this.visible}>
            {content}
          </div>
        </transition>
      </div>
    );
  }
});
