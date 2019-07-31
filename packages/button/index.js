import { use } from '../utils/use';
import spinner from '../spinner';

const [useName, bem] = use('button');

export default useName({
  components: {
    spinner
  },
  props: {
    // 文本内容
    text: {
      type: String,
      default: ''
    },
    // 按钮类型
    type: {
      type: String,
      default: 'light' // light primary info warn error
    },
    // 按钮大小
    size: {
      type: String,
      default: 'normal' // large normal small mini
    },
    // 是否为禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否为块级按钮
    block: {
      type: Boolean,
      default: false
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 是否为圆形按钮
    round: {
      type: Boolean,
      default: false
    },
    // 是否为圆角按钮
    radius: {
      type: Boolean,
      default: true
    },
    // 是否为加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 加载图标颜色
    loadingColor: {
      type: String,
      default: 'white'
    },
    // 加载图标大小
    loadingSize: {
      type: String,
      default: '20px'
    },
    // 加载图标类型
    loadingType: {
      type: String,
      default: 'crescent'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  },
  render() {
    const cls = bem([
      this.size,
      this.type,
      {
        block: this.block,
        plain: this.plain,
        round: this.round,
        radius: this.radius,
        disabled: this.disabled
      }
    ]);

    const text = (
      <span class={bem('text')}>
        {this.$slots.default ? this.$slots.default : this.text}
      </span>
    );
    const loadingStl = {
      width: this.loadingSize,
      height: this.loadingSize
    };
    const loading = (
      <spinner
        class={bem('loading')}
        color={this.loadingColor}
        style={loadingStl}
        type={this.loadingType}
      />
    );

    const content = [text];
    if (this.loading) {
      content.unshift(loading);
    }

    return (
      <button class={cls} disabled={this.disabled} onClick={this.handleClick}>
        {content}
      </button>
    );
  }
});
