import { use } from '../utils/use';
const [useName, bem] = use('card');

export default useName({
  props: {
    title: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
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
    if (this.$slots.title || this.title) {
      title = (
        <div class={ bem('header') }>
          { this.$slots.title ? this.$slots.title : this.title }
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
        { this.$slots.default }
      </div>
    );

    return (
      <div class={ cls } onClick={ this.$emit('click') }>{ [title, body, footer] }</div>
    )
  }
});
