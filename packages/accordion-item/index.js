import { use } from '../utils/use';
import { raf } from '../utils/raf';
import { isDef } from '../utils/isType';
import { ChildrenMixin } from '../mixins/connection';
import Icon from '../icon';
import Accordion from '../accordion';

const [useName, bem] = use('accordion-item');

export default useName({
  mixins: [ChildrenMixin(Accordion.name)],

  comments: {
    Icon
  },

  props: {
    // 唯一key
    name: [Number, String],
    // 是否为禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 标题文字
    header: {
      type: String,
      default: ''
    },
    // 右侧箭头颜色
    arrowColor: {
      type: String,
      default: ''
    },
    // 折叠动画消耗时间
    duration: {
      type: Number,
      default: 300
    }
  },

  data() {
    return {
      rotate: 0,
      inited: null,
      visible: false,
      isActive: false
    };
  },

  computed: {
    curName() {
      return isDef(this.name) ? this.name : this.index;
    },
    calcActive() {
      if (!this.parent) {
        return null;
      }
      const { value } = this.parent;
      return this.parent.accordion
        ? value === this.curName
        : value.some(name => name === this.curName);
    }
  },

  watch: {
    isActive(nVal, oVal) {
      if (nVal) {
        this.visible = true;
        this.inited = true;
      }
      raf(() => {
        const { content, body } = this.$refs;
        if (!content || !body) {
          return;
        }

        const { clientHeight } = content;
        if (clientHeight) {
          const contentHeight = `${clientHeight}px`;
          body.style.height = nVal ? 0 : contentHeight;
          /**
           * 在不支持 requestAnimationFrame API
           * 的浏览器上可能会有异常(当第一次切换时)
           */
          raf(() => {
            body.style.height = nVal ? contentHeight : 0;
          });
        }
      });
    },
    calcActive(val) {
      this.isActive = val;
    }
  },

  created() {
    this.inited = this.calcActive;
    this.visible = this.calcActive;
  },

  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }

      const { parent, curName } = this;
      const value = parent.accordion && curName === parent.value ? '' : curName;
      this.parent.switch(value, !this.isActive, curName);
    },

    handleTransitionEnd() {
      if (!this.isActive) {
        this.visible = false;
      }
    },

    toggleVisible() {
      this.isActive = !this.isActive;
    },

    show() {
      this.isActive = true;
    },

    close() {
      this.isActive = false;
    }
  },

  render() {
    const header = (
      <div class={bem('header')} onClick={this.handleClick}>
        {this.$slots.header ? this.$slots.header : <span>{this.header}</span>}
        <Icon
          class={bem('arrow')}
          name="ios-arrow-forward"
          style={{
            color: this.arrowColor,
            transform: `rotate(${this.rotate}deg)`,
            transitionDuration: `${this.duration}ms`
          }}
        />
      </div>
    );

    const body = this.inited && (
      <div
        class={bem('body')}
        v-show={this.visible}
        ref="body"
        v-on:transitionend={this.handleTransitionEnd}
      >
        <div class={bem('content')} ref="content">
          {this.$slots.default}
        </div>
      </div>
    );

    return (
      <div
        class={bem({
          accordion: this.accordion,
          disabled: this.disabled,
          active: this.visible
        })}
        onClick={() => this.$emit('click')}
      >
        {header}
        {body}
      </div>
    );
  }
});
