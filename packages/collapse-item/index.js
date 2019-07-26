import { use } from '../utils/use';
import { raf } from '../utils/raf';
import Icon from '../icon';
import Collapse from '../collapse';
import findParent from '../mixins/findParent';

const [useName, bem] = use('collapse-item');

export default useName({
  mixins: [findParent],
  comments: {
    Icon
  },
  props: {
    name: [Number, String],
    disabled: Boolean,
    header: String,
    arrowColor: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 300
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rotate: 0,
      currentValue: false
    };
  },
  computed: {
    index() {
      return this.parent.$children.indexOf(this);
    },
    currentName() {
      return this.name !== undefined ? this.name : this.index;
    }
  },
  created() {
    this.findParent(Collapse.name);
    if (this.parent) {
      this.currentValue = this.parent.value === this.currentName;
    }
    this.rotate = this.currentValue ? 90 : 0;
  },
  methods: {
    _handleClick() {
      if (!this.disabled) {
        if (this.parent) {
          this.parent.toggleValue(this.index);
        } else {
          this.toggleValue();
        }
      }
    },
    toggleValue() {
      const { content, body } = this.$refs;
      const nextValue = !this.currentValue;
      const clientHeight = content.clientHeight;

      if (nextValue) {
        this.rotate = 90;
        this.currentValue = nextValue;
        raf(() => {
          let clientHeight = content.clientHeight;
          body.style['transition-duration'] = `0ms`;
          body.style.height = '0px';
          body.style['transition-duration'] = `${this.duration}ms`;
          setTimeout(() => {
            body.style.height = `${clientHeight}px`;
          }, 16);
        });
      } else {
        this.rotate = 0;
        body.style.height = `${clientHeight}px`;
        body.style['transition-duration'] = `${this.duration}ms`;
        raf(() => {
          body.style.height = `0px`;
          setTimeout(() => {
            this.currentValue = nextValue;
          }, this.duration);
        });
      }
    }
  },
  render() {
    const header = (
      <div class={bem('header')} onClick={this._handleClick}>
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
      <div class={bem('body')} v-show={this.currentValue} ref="body">
        <div class={bem('content')} ref="content">
          {this.$slots.default}
        </div>
      </div>
    );

    return (
      <div
        class={bem([
          {
            accordion: this.accordion,
            expanded: this.currentValue,
            disabled: this.disabled
          }
        ])}
        onClick={() => this.$emit('click')}
      >
        {header}
        {body}
      </div>
    );
  }
});
