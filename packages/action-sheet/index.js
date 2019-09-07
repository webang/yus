import { use } from '../utils/use';
import Backdrop from '../backdrop';

const [useName, bem] = use('action-sheet');

export default useName({
  components: {
    Backdrop
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    menus: {
      type: [Object, Array],
      default: () => []
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    },
    menu: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visible: this.value
    };
  },

  watch: {
    visible(nVal) {
      this.$emit('input', nVal);
    },
    value(nVal) {
      this.visible = nVal;
    }
  },

  methods: {
    handleClickMenu(index) {
      if (index === -1) {
        return this.close();
      }
      if (!this.menu[index].disabled) {
        this.$emit('click-menu', index);
      }
    },

    handleClickBackdrop(event) {
      this.$emit('click-backdrop', event);
      if (this.closeOnClickBackdrop) {
        this.close();
      }
    },

    close() {
      this.visible = false;
    }
  },

  render() {
    const title = (
      <div class={bem('header')}>
        {this.$slots.title ? this.$slots.title : <span>{this.title}</span>}
      </div>
    );

    const cancel = (
      <div class={bem('cancel')} onClick={() => this.handleClickMenu(-1)}>
        {this.$slots.cancel ? this.$slots.cancel : <span>{this.cancelText}</span>}
      </div>
    );

    return (
      <div class={bem() + '-wrapper'}>
        <Backdrop value={this.visible} vOn:click={this.handleClickBackdrop} />
        <transition name={bem()}>
          <div class={bem()} vShow={this.visible}>
            {title}
            {this.menu.map((element, index) => {
              return (
                <div
                  class={bem('button', {
                    disabled: element.disabled
                  })}
                  onClick={() => this.handleClickMenu(index)}
                >
                  <span>{element.text}</span>
                </div>
              );
            })}
            {this.showCancel ? cancel : null}
          </div>
        </transition>
      </div>
    );
  }
});
