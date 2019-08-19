import { use } from '../utils/use';
import { ChildrenMixin } from '../mixins/connection';
import { TouchMixin } from '../mixins/touch';

const [useName, bem] = use('picker-column');

const radio = 1;
const duration = 300;
const longTouchTime = 300;

export default useName({
  mixins: [ChildrenMixin('yus-picker'), TouchMixin()],

  props: {
    values: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    labelKey: String,
    itemHeight: [Number]
  },

  data() {
    return {
      currentIndex: this.defaultIndex,
      currentTranslate: 0,
      startTime: undefined,
      startY: undefined,
      startTranslateY: undefined,
      isTouched: false,
      useAnimate: false,
      computedItemHeight: 36,
      touches: []
    };
  },

  computed: {
    containerStyle() {
      return {
        transform: `translate3d(0, ${this.currentTranslate}px, 0)`,
        'transition-duration': `${this.useAnimate ? duration : 0}ms`
      };
    }
  },

  watch: {
    currentIndex(val) {
      this.parent.$emit(
        'column-change',
        this.parent,
        this.parent.children.indexOf(this),
        val
      );
    }
  },

  mounted() {
    this._initEvents();
    this.setIndex(this.currentIndex, false);
  },

  methods: {
    _initEvents() {
      const { wrapper } = this.$refs;
      if ('ontouchstart' in document.documentElement) {
        wrapper.addEventListener('touchstart', this._handleTouchStart.bind(this));
        wrapper.addEventListener('touchmove', this._handleTouchMove.bind(this));
        wrapper.addEventListener('touchend', this._handleTouchEnd.bind(this));
      } else {
        wrapper.addEventListener('mousedown', this._handleTouchStart.bind(this));
        wrapper.addEventListener('mousemove', this._handleTouchMove.bind(this));
        wrapper.addEventListener('mouseup', this._handleTouchEnd.bind(this));
      }
    },

    _handleTouchStart(event) {
      let touch;
      if (event.changedTouches) {
        touch = event.changedTouches[0];
      } else {
        touch = {
          clientX: event.clientX,
          clientY: event.clientY
        };
      }

      this.isTouched = true;
      this.useAnimate = false;
      this.startTime = +new Date();
      this.startY = touch.clientY;
      this.startTranslateY = this.currentTranslate;
      this.touches.push(touch);
    },

    _handleTouchMove(event) {
      if (!this.isTouched) {
        return;
      }
      let touch;
      if (event.changedTouches) {
        touch = event.changedTouches[0];
      } else {
        touch = {
          clientX: event.clientX,
          clientY: event.clientY
        };
      }
      const delta = touch.clientY - this.startY;
      this.currentTranslate = delta + this.startTranslateY;
      this.touches.push(touch);
      event.preventDefault();
    },

    _handleTouchEnd() {
      if (this.touches.length === 1) {
        return;
      }
      this.isTouched = false;
      let endTime = +new Date();
      let deltaTime = endTime - this.startTime;
      if (deltaTime >= longTouchTime) {
        let index = this._calculateIndex(this.currentTranslate);
        this.setIndex(index);
      } else {
        let deltaDistance =
          this.touches[this.touches.length - 1].clientY -
          this.touches[this.touches.length - 2].clientY;
        let velocity = deltaDistance / deltaTime;
        let newTranslate = velocity * 1000 * radio;
        let index = this._calculateIndex(newTranslate + this.currentTranslate);
        this.setIndex(index);
      }
    },

    _calculateIndex(translate) {
      const firstEl = this.$refs.items['children'][0];
      const itemHeight = this.itemHeight || (firstEl ? firstEl.offsetHeight : 0);

      if (translate > 0) {
        translate = 0;
      }
      if (translate < -(this.values.length - 1) * itemHeight) {
        translate = -(this.values.length - 1) * itemHeight;
      }
      return Math.abs(Math.round(translate / itemHeight));
    },

    // get index
    getIndex() {
      return this.currentIndex;
    },

    // set index
    setIndex(index, useAnimate = true) {
      const firstEl = this.$refs.items['children'][0];
      const itemHeight = this.itemHeight || (firstEl ? firstEl.offsetHeight : 0);

      this.isScrolling = true;
      this.useAnimate = useAnimate;
      this.currentTranslate = -index * itemHeight;

      setTimeout(
        () => {
          this.useAnimate = false;
          this.isScrolling = false;
          this.currentIndex = index;
          this.touches = [];
        },
        useAnimate ? duration : 0
      );
    },

    // get value
    getValue() {
      return this.values[this.currentIndex];
    },

    // set value
    setValue(value) {
      let valueIndex = -1;
      this.values.forEach((element, index) => {
        if (element === value) {
          valueIndex = index;
        }
      });
      valueIndex !== -1 && this.setIndex(valueIndex);
    },

    // get values
    getValues() {
      return this.values;
    },

    // set option
    setValues(values) {
      this.values = values;
    }
  },

  render() {
    const cls = bem();
    const { labelKey } = this;

    return (
      <div class={cls} ref="wrapper">
        <div class={bem('mask')} />
        <div class={bem('indicator')} />
        <div class={bem('picker-items')} ref="items" style={this.containerStyle}>
          {this.values.map((item, index) => {
            return (
              <div
                class={bem('picker-item', {
                  active: index === this.currentIndex
                })}
              >
                <span>{labelKey ? item[labelKey] : item}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});
