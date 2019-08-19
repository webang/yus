import Popup from '../popup';
import { use } from '../utils/use';
const [useName, bem] = use('infinite-picker');

export default useName({
  components: {
    Popup
  },

  props: {
    // 选项列表
    list: Array,
    // 是否显示
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // 当前是否可见
      visible: this.value,
      // 当前选择Tab索引
      column: 0,
      hasNext: true,
      indexList: [],
      valueList: [],
      // 当前展示的选项
      optionColumn: []
    };
  },

  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.optionColumn[0] = this.list;
      this.optionColumn = [].concat(this.optionColumn);
    },

    handleClick(item, index) {
      this.valueList[this.column] = item;
      this.indexList[this.column] = index;

      this.valueList = this.valueList.splice(0, this.column + 1);
      this.indexList = this.indexList.splice(0, this.column + 1);

      if (item.children && item.children.length) {
        this.optionColumn[this.column + 1] = item.children;
        this.optionColumn = this.optionColumn.splice(0, this.column + 2);
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
        cls.push('is-active');
      }
      return (
        <span key={index} class={cls} vOn:click={() => this.toggleIndex(index)}>
          {item.name}
        </span>
      );
    };

    const getPickerColumn = () => {
      const cls1 = 'yus-infinite-picker-column';
      const cls2 = 'yus-infinite-picker-item';
      return this.optionColumn.map((jItem, jIndex) => {
        return (
          <div class={cls1} key={jIndex} vShow={jIndex === this.column}>
            {jItem.map((item, index) => {
              return (
                <div
                  class={cls2}
                  key={index}
                  vOn:click={() => this.handleClick(item, index)}
                >
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        );
      });
    };

    const getHeader = () => (
      <div class="yus-infinite-picker-header">
        <div class="yus-infinite-picker-cancel">取消</div>
        <span>取件地址</span>
        <div class="yus-infinite-picker-confirm">确认</div>
      </div>
    );

    return (
      <Popup v-model={this.visible}>
        <div class="yus-infinite-picker">
          {getHeader()}
          <div class="yus-infinite-picker-value">
            {this.valueList.map(getValueRow)}
            {this.hasNext ? <span class="is-active">请选择</span> : null}
          </div>
          <div class="yus-infinite-picker-body">
            <div class="yus-infinite-picker-columns">{getPickerColumn()}</div>
          </div>
        </div>
      </Popup>
    );
  }
});
