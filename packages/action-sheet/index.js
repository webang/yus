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
      default: true
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
    },
    clickMenu: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      show: false,
      hasHeaderSlot: false
    };
  },
  watch: {
    value: {
      handler: function(val) {
        this.show = val;
      },
      immediate: true
    }
  },
  methods: {
    handleClickMenu(index) {
      if (index === -1) {
        this.clickMenu(index);
        this.$emit('click-menu', index);
      } else {
        if (!this.menu[index].disabled) {
          this.clickMenu(index);
          this.$emit('click-menu', index);
        }
      }
    },
    handleClickBackdrop(event) {
      this.$emit('click-backdrop', event);
      if (this.closeOnClickBackdrop) {
        this.close();
      }
    },
    close() {
      this.$emit('input', false);
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
        <Backdrop value={this.value} vOn:click={this.handleClickBackdrop} />
        <transition name={bem()}>
          <div class={bem()} vShow={this.value}>
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
