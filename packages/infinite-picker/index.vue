<template>
  <Popup v-model="show">
    <div class="ymu-infinite-picker">
      <slot>
        <div class="ymu-infinite-picker-header">
          <span>取件地址</span>
        </div>
      </slot>
      <div class="ymu-infinite-picker-value">
        <span
          v-for="(item, index) in valueList"
          :key="index"
          :class="{'is-active': index === column}"
          @click="toggleIndex(index)">{{ item.name }}</span>
        <span class="is-active" v-if="hasNext">请选择</span>
      </div>
      <div class="ymu-infinite-picker-body">
        <div class="ymu-infinite-picker-columns">
          <div
            class="ymu-infinite-picker-column"
            v-for="(jItem, jIndex) in cityList"
            :key="jIndex"
            v-show="jIndex===column"
          >
            <div
              class="ymu-infinite-picker-item"
              v-for="(item, index) in jItem"
              :key="index"
              @click="handleClick(item, index)"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script>
import Popup from '../popup';
import use from '../../src/utils/use';
const [useName, useBem] = use('infinite-picker');

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
  data () {
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
    value (val) {
      this.show = val;
    },
    show (val) {
      this.$emit('input', val);
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.cityList[0] = this.list;
      this.cityList = [].concat(this.cityList);
    },
    handleClick (item, index) {

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
    toggleIndex (index) {
      this.column = index;
    }
  }
})
</script>
