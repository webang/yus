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
    },

    // 初始值
    defaultValue: {
      type: Array,
      default: () => []
    },

    // 选项 key
    labelKey: {
      type: String,
      default: ''
    },

    // 是否展示header
    showHeader: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      // 当前是否可见
      visible: this.value,
      // 当前选择Tab索引
      editIndex: 0,
      // 是否还有下一个
      hasNext: true,
      // 选择的值
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
    },
    list() {
      this.init();
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.optionColumn[0] = this.list;
      this.optionColumn = [].concat(this.optionColumn);
      if (this.defaultValue.length) {
        this._initoptionColumn();
        this.valueList = this.defaultValue;
      }
    },

    _initoptionColumn() {
      const { defaultValue } = this;
      const options = [this.list];

      const rawData = (list, index) => {
        list.forEach(element => {
          if (element.name === defaultValue[index].name) {
            if (element.children) {
              options.push(element.children);
              rawData(element.children, index + 1);
            }
          }
        });
      };

      rawData(this.list, 0);

      const lastElement = options[options.length - 1];

      if (!lastElement.children || !lastElement.children.length) {
        // 满足当前条件，初始值才会被认为是有效的
        options.forEach((element, index) => {
          if (element.children) {
            this.valueList[index]['children'] = element.children;
          }
        });
        this.optionColumn = options;
        this.editIndex = options.length - 1;
        this.hasNext = false;
      }
    },

    // 点击选项
    handleClickOption(item, index) {
      this.valueList[this.editIndex] = item;
      this.valueList = this.valueList.splice(0, this.editIndex + 1);

      if (item.children && item.children.length) {
        this.optionColumn[this.editIndex + 1] = item.children;
        this.optionColumn = this.optionColumn.splice(0, this.editIndex + 2);
        this.editIndex++;
        this.hasNext = true;
      } else {
        this.hasNext = false;
        this.$emit('input', false);
        this.$emit('confirm', [].concat(this.valueList));
      }
    },

    handleClickValue(index) {
      this.editIndex = index;
    }
  },

  render() {
    const getValueRow = (item, index) => {
      const cls = [];
      if (index === this.editIndex) {
        cls.push('is-active');
      }
      return (
        <span key={index} class={cls} vOn:click={() => this.handleClickValue(index)}>
          {item.name}
        </span>
      );
    };

    const getPickerColumn = () => {
      const cls1 = bem() + '-column';
      const cls2 = bem() + '-item';
      return this.optionColumn.map((jItem, jIndex) => {
        return (
          <div class={cls1} key={jIndex} vShow={jIndex === this.editIndex}>
            {jItem.map((item, index) => {
              return (
                <div
                  class={cls2}
                  key={index}
                  vOn:click={() => this.handleClickOption(item, index)}
                >
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        );
      });
    };

    const getHeader = () => {
      return (
        <div class={bem() + '-header'}>
          <div class={bem() + '-cancel'}>取消</div>
          <span>取件地址</span>
          <div class={bem() + '-confirm'}>确认</div>
        </div>
      );
    };

    return (
      <Popup v-model={this.visible}>
        <div class={bem()}>
          {getHeader()}
          <div class={bem() + '-value'}>
            {this.valueList.map(getValueRow)}
            {this.hasNext ? <span class="is-active">请选择</span> : null}
          </div>
          <div class={bem() + '-body'}>
            <div class={bem() + '-columns'}>{getPickerColumn()}</div>
          </div>
        </div>
      </Popup>
    );
  }
});
