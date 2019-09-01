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
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 右侧文字，复杂的样式布局请使用slot
    value: {
      type: String,
      default: ''
    },
    // 标题下方的描述信息
    label: {
      type: String,
      default: ''
    },
    // 设置a标签链接
    url: {
      type: String,
      default: ''
    },
    // 是否展示链接图标
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
    },
    // 设置箭头方向 right up down
    arrowDirection: {
      type: String,
      default: 'right'
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

    let media = null;

    if (this.$slots.icon) {
      media = <span class={bem('media')}>{this.$slots.icon}</span>;
    } else if (this.icon) {
      media = (
        <span class={bem('media')}>
          <img src={this.icon} alt="" />
        </span>
      );
    }

    const title = [];
    if (this.$slots.title) {
      title.push(this.$slots.title);
    } else {
      title.push(
        <div class={bem('title')}>
          <span>{this.title}</span>
          {this.label ? <div class={bem('subtitle')}>{this.label}</div> : null}
        </div>
      );
    }

    const link = (
      <icon class={bem('icon-link', this.arrowDirection)} name="arrow-right" />
    );

    const value = (
      <div class={bem('value')}>
        {this.$slots.value ? this.$slots.value : <span>{this.value}</span>}
      </div>
    );

    let content = [
      <div class={bem('hd')}>
        {media}
        {title}
      </div>,
      <div class={bem('bd')}>
        {value}
        {this.isLink ? link : null}
      </div>
    ];

    return this.url ? (
      <a class={cls} onClick={this.handleClick} href={this.url}>
        {content}
      </a>
    ) : (
      <div class={cls} onClick={this.handleClick}>
        {content}
      </div>
    );
  }
});
