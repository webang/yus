import { use } from '../utils/use';
const [useName, bem] = use('segment');

export default useName({
  props: {
    value: Number
  },
  data() {
    return {
      childList: [],
      currentIndex: this.value
    };
  },
  watch: {
    value(val) {
      this.currentIndex = val;
    }
  },
  methods: {
    toggleValue(activeIndex) {
      this.$emit('input', activeIndex);
    }
  },
  render() {
    return (
      <div class={bem()}>
        { this.$slots.default }
      </div>
    );
  }
});
