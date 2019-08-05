import { use } from '../utils/use';
import { ChildrenMixin } from '../mixins/connection';

const [useName, bem] = use('picker-column');

const radio = 1;
const duration = 300;
const longTouchTime = 300;

export default useName({
  mixins: [ChildrenMixin('yus-picker')],

  props: {
    values: {
      type: Array,
      default: () => []
    },
    labelKey: String
  },

  data() {
    return {
      currentIndex: 0,
      currentTranslate: 0,
      touchStartTime: undefined,
      touchStartScreen: undefined,
      touchStartTranslate: undefined,
      isTouched: false,
      useAnimate: false,
      itemHeight: 36,
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
        'on-column-change',
        this.parent,
        this.parent.children.indexOf(this),
        val
      );
    }
  },

  mounted() {
    this._initEvents();
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
      this.touchStartTime = +new Date();
      this.touchStartScreen = touch.clientY;
      this.touchStartTranslate = this.currentTranslate;
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
      const delta = touch.clientY - this.touchStartScreen;
      this.currentTranslate = delta + this.touchStartTranslate;
      this.touches.push(touch);
      event.preventDefault();
    },

    _handleTouchEnd() {
      if (this.touches.length === 1) {
        return;
      }
      this.isTouched = false;
      let endTime = +new Date();
      let deltaTime = endTime - this.touchStartTime;
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
      if (translate > 0) {
        translate = 0;
      }
      if (translate < -(this.values.length - 1) * this.itemHeight) {
        translate = -(this.values.length - 1) * this.itemHeight;
      }
      return Math.abs(Math.round(translate / this.itemHeight));
    },

    // get index
    getIndex() {
      return this.currentIndex;
    },

    // set index
    setIndex(index, useAnimate = true) {
      this.isScrolling = true;
      this.useAnimate = useAnimate;
      this.currentTranslate = -index * this.itemHeight;

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
