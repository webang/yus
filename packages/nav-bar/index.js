import { use } from '../utils/use';
import icon from '../icon';

const [useName, bem] = use('nav-bar');

export default useName({
  comments: {
    icon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'light' // light dark
    }
  },
  render() {
    const cls = bem([this.mode]);

    const title = (
      <div class={bem('title')}>{this.$slots.title ? this.$slots.title : this.title}</div>
    );

    const list = [];
    if (this.$slots.left) {
      list.push(this.$slots.left);
    } else {
      if (this.leftArrow) {
        list.push(<icon class={bem('icon-back')} name="ios-arrow-back" />);
      }
      list.push(<span class={bem('left-text')}>{this.leftText}</span>);
    }

    const left = (
      <div class={bem('left')} onClick={() => this.$emit('click-left')}>
        {list}
      </div>
    );

    const right = (
      <div class={bem('right')} onClick={() => this.$emit('click-right')}>
        {this.$slots.right ? this.$slots.right : this.rightText}
      </div>
    );

    const content = [];
    content.push(left);
    content.push(title);
    content.push(right);

    return <div class={cls}>{content}</div>;
  }
});
