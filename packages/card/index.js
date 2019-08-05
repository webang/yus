import { use } from '../utils/use';
const [useName, bem] = use('card');

export default useName({
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },

    // 页脚
    footer: {
      type: String,
      default: ''
    },

    // 是否设置阴影
    shadow: {
      type: Boolean,
      default: false
    }
  },

  render() {
    const cls = bem([{
      shadow: this.shadow
    }]);

    let title;
    if (this.$slots.header || this.title) {
      title = (
        <div class={ bem('header') }>
          { this.$slots.header ? this.$slots.header : this.title }
        </div>
      );
    }

    let footer;
    if (this.$slots.footer || this.footer) {
      footer = (
        <div class={ bem('footer') }>
          { this.$slots.footer ? this.$slots.footer : this.footer }
        </div>
      );
    }

    let body = (
      <div class={ bem('body') }>
        { this.$slots.body }
      </div>
    );

    return (
      <div class={ cls } onClick={ this.$emit('click') }>{ [title, body, footer] }</div>
    );
  }
});
