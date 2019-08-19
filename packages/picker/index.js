import { use } from '../utils/use';
import Popup from '../popup';
import PickerColumn from '../picker-column';
import { ParentMixin } from '../mixins/connection';

const [useName, bem] = use('picker');

export default useName({
  mixins: [ParentMixin()],

  components: {
    Popup,
    PickerColumn
  },

  props: {
    columnList: {
      type: Array,
      default: () => []
    },

    popup: {
      type: Boolean,
      default: false
    },

    value: {
      type: Boolean,
      default: false
    },

    header: {
      type: Boolean,
      default: true
    },

    cancelText: {
      type: String,
      default: '取消'
    },

    confirmText: {
      type: String,
      default: '确认'
    }
  },

  methods: {
    _handleClickBackdrop() {
      this.$emit('input', false);
    },

    _handleConfirm() {
      this.$emit('on-confirm', this, this.getValues(), this.getIndexs());
    },

    _handleCancel() {
      this.$emit('on-cancel');
    },

    /**
     * 获取所有列选中的值
     */
    getValues() {
      return this.children.map(column => column.getValue());
    },

    /**
     * 设置所有列的值
     * @param {Array} values
     */
    setValues(values) {
      this.children.forEach((element, index) => {
        element.setValue(values[index]);
      });
    },

    /**
     * 获取所有列选中值对应的索引
     */
    getIndexs() {
      return this.children.map(column => column.getIndex());
    },

    /**
     * 设置所有列选中值对应的索引
     * @param {Array} values
     */
    setIndexs(values) {
      this.children.forEach((element, elementIndex) => {
        element.setIndex(values[elementIndex]);
      });
    },

    /**
     * 获取对应列选中的值
     * @param { Number } columnIndex
     */
    getColumnValue(columnIndex) {
      return this.children[columnIndex].getValue();
    },

    /**
     * 设置对应列选中的值
     * @param {Number} columnIndex
     * @param {*} columnValue
     */
    setColumnValue(columnIndex, columnValue) {
      this.children[columnIndex].setValue(columnValue);
    },

    /**
     * 设置对应列选中项的索引
     * @param {Number} columnIndex
     */
    getColumnIndex(columnIndex) {
      return this.children[columnIndex].getIndex();
    },

    /**
     * 设置对应列选中项的索引
     * @param {Number} columnIndex
     * @param {*} valueIndex
     */
    setColumnIndex(columnIndex, valueIndex) {
      this.children[columnIndex].setIndex(valueIndex);
    },

    /**
     * 获取对应列的选项
     * @param {Number} columnIndex 索引
     */
    getColumnValues(columnIndex) {
      return this.children[columnIndex].getValues();
    },

    /**
     * 设置对应列的选项
     * @param {Number} columnIndex 索引
     * @param {Array} columnValues 选项
     */
    setColumnValues(columnIndex, columnValues) {
      this.children[columnIndex].setValues(columnValues);
    }
  },
  render() {
    const cls = bem({
      popup: this.popup
    });

    const header = (
      <div class={bem('header')}>
        <div class={bem('cancel')} onClick={this._handleCancel}>
          {this.cancelText}
        </div>
        <div class={bem('title')}>{this.title}</div>
        <div class={bem('confirm')} onClick={this._handleConfirm}>
          {this.confirmText}
        </div>
      </div>
    );

    const basicPicker = (
      <div class={cls}>
        { this.header ? header : null }
        <div class={bem('body')}>
          {this.columnList.map((item, index) => {
            return <PickerColumn values={item.values} key={index} />;
          })}
        </div>
      </div>
    );

    const popupPicker = (
      <Popup value={this.value} vOn:click-backdrop={ this._handleClickBackdrop }>
        { basicPicker }
      </Popup>
    );

    return this.popup ? popupPicker : basicPicker;
  }
});
