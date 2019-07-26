import { use } from '../utils/use';
import icon from '../icon';

const [useName, bem] = use('cell');

export default useName({
  comments: {
    icon
  },
  props: {
    // 左边标题文字
    title: {
      type: String,
      default: ''
    },
    // 右侧文字，复杂的样式布局请使用slot
    value: {
      type: String,
      default: ''
    },
    // a 标签链接
    url: {
      type: String,
      default: ''
    },
    // 是否为链接
    isLink: {
      type: Boolean,
      default: false
    },
    // 禁止点击状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 底部边框
    border: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
        if (this.url && typeof window !== 'undefined') {
          window.location.href = this.url;
        }
      }
    }
  },
  render() {
    const cls = bem([
      {
        link: this.isLink,
        disabled: this.disabled,
        border: this.border
      }
    ]);

    const title = [];
    if (this.$slots.title) {
      title.push(this.$slots.title);
    } else {
      title.push(
        <div class={bem('title')}>
          <div class={bem('media')}>{this.$slots.icon ? this.$slots.icon : null}</div>
          <span>{this.title}</span>
        </div>
      );
    }

    const link = <icon class={bem('icon-link')} name="ios-arrow-forward" />;

    const value = (
      <div class={bem('value')}>
        {this.$slots.value ? this.$slots.value : <span>{this.value}</span>}
        {this.isLink ? link : null}
      </div>
    );

    let content;
    if (!this.url) {
      content = (
        <div class={cls} onClick={this.handleClick}>
          {title}
          {value}
        </div>
      );
    } else {
      content = (
        <a class={cls} onClick={this.handleClick} href={this.url}>
          {title}
          {value}
        </a>
      );
    }
    return content;
  }
});
