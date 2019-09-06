import Icon from '../icon';
import Spinner from '../spinner';
import Backdrop from '../backdrop';
import { use } from '../utils/use';

const [useName, bem] = use('toast');

export default useName({
  components: {
    Icon,
    Spinner,
    Backdrop
  },

  props: {
    // 控制是否显示
    value: {
      type: Boolean,
      default: false
    },
    // 显示类型
    type: {
      type: String,
      default: 'text' // text, loading, success, fail, warn
    },
    // 是否有幕布
    backdrop: {
      type: Boolean,
      default: false
    },
    // 幕布是否透明
    transparent: {
      type: Boolean,
      default: false
    },
    // 提示文案
    message: {
      type: String,
      default: ''
    },
    // 显示位置
    position: {
      type: String,
      default: 'middle'
    },
    // 自定义图标
    icon: {
      type: String,
      default: ''
    },
    // 自定义类名
    className: {
      type: String,
      default: ''
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
    value(nVal) {
      this.visible = nVal;
    },
    visible(nVal) {
      this.$emit('input', nVal);
    }
  },

  methods: {
    clear() {
      this.visible = false;
    }
  },

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
    const failIcon = <Icon class={bem('icon')} name="information" />;
    const warnIcon = <Icon class={bem('icon')} name="information" />;
    const successIcon = <Icon class={bem('icon')} name="success3" />;
    const textEl = <span>{this.message}</span>;
    const propIcon = <img src={this.icon} />;

    if (this.$slots.icon) {
      content.push(this.$slots.icon);
    } else if (this.icon) {
      content.push(propIcon);
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
          <div class={[cls, this.className]} vShow={this.visible}>
            {content}
          </div>
        </transition>
      </div>
    );
  }
});
