import { use } from '../utils/use';
import { raf } from '../utils/raf';
import { isDef } from '../utils/isType';
import Icon from '../icon';
import Accordion from '../accordion';
import findParent from '../mixins/findParent';

const [useName, bem] = use('accordion-item');

export default useName({
  mixins: [findParent],
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
      currentValue: false,
      bodyStyle: {},
      show: null,
      inited: null
    };
  },
  computed: {
    index() {
      return this.parent.children.indexOf(this);
    },
    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },
    expanded() {
      if (!this.parent) {
        return null;
      }
      const { value } = this.parent;
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    }
  },
  created() {
    this.findParent(Accordion.name);
    this.show = this.expanded;
    this.inited = this.expanded;
    if (this.parent) {
      this.currentValue = this.parent.value === this.currentName;
    }
    this.rotate = this.currentValue ? 90 : 0;
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }

      const { parent } = this;

      if (!this.disabled) {
        if (this.parent) {
          this.parent.toggleValue(this.index);
        } else {
          this.toggleValue();
        }
      }
    },
    toggleValue() {
      const { content } = this.$refs;
      const nextValue = !this.currentValue;

      if (nextValue) {
        this.rotate = 90;
        this.currentValue = nextValue;
        raf(() => {
          let { clientHeight } = content;
          this.bodyStyle = {
            height: `0px`,
            transitionDuration: `${this.duration}ms`
          };
          setTimeout(() => {
            this.bodyStyle = {
              height: `${clientHeight}px`,
              transitionDuration: `${this.duration}ms`
            };
          }, 16);
        });
      } else {
        this.rotate = 0;
        this.bodyStyle = {
          height: `0px`,
          transitionDuration: `${this.duration}ms`
        };
        raf(() => {
          setTimeout(() => {
            this.currentValue = nextValue;
          }, this.duration);
        });
      }
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
    const body = (
      <div
        class={bem('body')}
        v-show={this.currentValue}
        ref="body"
        style={this.bodyStyle}
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
          active: this.currentValue
        })}
        onClick={() => this.$emit('click')}
      >
        {header}
        {body}
      </div>
    );
  }
});
