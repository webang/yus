import Icon from '../icon';
import Backdrop from '../backdrop';
import { use } from '../utils/use';

const [useName, bem] = use('dialog');

export default useName({
  components: {
    Icon,
    Backdrop
  },
  props: {
    // 是否显示
    value: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 内容
    content: {
      type: String,
      default: ''
    },
    // 对话框类型
    type: {
      type: String,
      default: 'alert' // alert, confirm, prompt
    },
    // 显示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    // 显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: true
    },
    // type 为 prompt
    inputValue: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      visible: this.value,
      currentInputValue: this.inputValue
    };
  },
  computed: {
    transition() {
      return bem();
    }
  },
  watch: {
    value(newValue) {
      this.visible = newValue;
    },
    inputValue(val) {
      this.currentInputValue = val;
    },
    currentInputValue(val) {
      this.$emit('input-value-change', val);
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm');
    },
    handleCancel() {
      this.$emit('cancel');
    }
  },
  render() {
    const cls = bem([this.type]);

    const header = (
      <div class={bem('header')}>
        <span class={bem('title')}>
          {this.$slots.title ? this.$slots.title : this.title}
        </span>
      </div>
    );

    const input = <input vModel={this.currentInputValue} />;

    const body = (
      <div class={bem('body')}>
        {this.$slots.content ? this.$slots.content : (this.type === 'prompt' ? input : this.content)}
      </div>
    );

    const footer = (
      <div class={bem('footer')}>
        {this.showCancelButton && this.type !== 'alert' ? (
          <span class={bem('button', 'cancel')} onClick={this.handleCancel}>
            取消
          </span>
        ) : null}
        {this.showConfirmButton ? (
          <span class={bem('button', 'confirm')} onClick={this.handleConfirm}>
            确认
          </span>
        ) : null}
      </div>
    );

    return (
      <div class={bem() + '-wrapper'}>
        <Backdrop value={this.visible} />
        <transition name={this.transition}>
          <div class={cls} vShow={this.visible}>
            {[header, body, footer]}
          </div>
        </transition>
      </div>
    );
  }
});
