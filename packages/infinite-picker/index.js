import Popup from '../popup';
import { use } from '../utils/use';
const [useName, bem] = use('infinite-picker');

export default useName({
  components: {
    Popup
  },
  props: {
    list: Array,
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      column: 0,
      hasNext: true,
      indexList: [],
      valueList: [],
      cityList: [],
      show: this.value
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.cityList[0] = this.list;
      this.cityList = [].concat(this.cityList);
    },
    handleClick(item, index) {

      this.valueList[this.column] = item;
      this.indexList[this.column] = index;

      this.valueList = this.valueList.splice(0, this.column + 1);
      this.indexList = this.indexList.splice(0, this.column + 1);

      if (item.children && item.children.length) {
        this.cityList[this.column + 1] = item.children;
        this.cityList = this.cityList.splice(0, this.column + 2);
        this.column++;
        this.hasNext = true;
      } else {
        this.hasNext = false;
        this.$emit('input', false);
        this.$emit('on-confirm', [].concat(this.valueList));
      }
    },
    toggleIndex(index) {
      this.column = index;
    }
  },
  render() {
    const getValueRow = (item, index) => {
      const cls = [];
      if (index === this.column) {
        cls.push('is-active')
      }
      return (
        <span
          key={index}
          class={cls}
          vOn: click={() => this.toggleIndex(index)}>{item.name}</span>
      )
    }

    const getPickerColumn = () => {
      const cls1 = 'yus-infinite-picker-column';
      const cls2 = "yus-infinite-picker-item"
      console.log(this.cityList)
      return this.cityList.map((jItem, jIndex) => {
        return (
          <div class={cls1} key={jIndex} vShow={jIndex === this.column}>
            {/* {
              jItem.map((item, index) => {
                return (
                  <div class={cls2} key={index} vOn:click={() => this.handleClick(item, index)}>
                    <span>{item.name}</span>
                  </div>
                )
              })
            } */}
          </div>
        )
      })
    }

    return (
      <Popup v-model={this.show}>
        <div class="yus-infinite-picker">
          <div class="yus-infinite-picker-header">
            <span>取件地址</span>
          </div>
          <div class="yus-infinite-picker-value">
            {this.valueList.map(getValueRow)}
            {this.hasNext ? <span class="is-active">请选择</span> : null}
          </div>
          <div class="yus-infinite-picker-body">
            <div class="yus-infinite-picker-columns">
              {getPickerColumn()}
            </div>
          </div>
        </div>
      </Popup>
    )
  }
})