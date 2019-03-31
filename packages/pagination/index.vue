<template>
  <div class="ymu-pagination">
    <a
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(pageIndex - 1)"
      :class="{'ymu-pagination-item--disabled': pageIndex <= 1}">&lt;</a>
    <a
      v-if="showPrevDot"
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(1)">1</a>
    <a
      v-if="showPrevDot"
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(pageIndex - perSize)">...</a>
    <div
      class="ymu-pagination-item"
      :class="{'ymu-pagination-item--active': item===pageIndex}"
      v-for="item in curList" :key="item"
      @click="updateIndex(item)"
    >
      <span> {{ item }}</span>
    </div>
    <a
      v-if="showNextDot"
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(pageIndex + perSize)">...</a>
    <a
      v-if="pageIndex <= pageNum - perSize"
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(pageNum)">{{ pageNum }}</a>
    <a
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      @click="updateIndex(pageIndex + 1)"
      :class="{'ymu-pagination-item--disabled': pageIndex >= pageNum}">&gt;</a>
  </div>
</template>

<script>
import use from '../../src/utils/use';
const [useName, useBem] = use('pagination');

export default useName({
  props: {
    // 总记录数
    total: {
      type: Number,
      default: 0
    },
    // 一页包含的记录数
    pageSize: {
      default: 0,
      type: Number
    },
    // 当前页码
    pageIndex: {
      default: 0,
      type: Number
    },
    // 上一页 文字
    prevText: {
      type: String,
      default: '上一页'
    },
    // 下一页 文字
    nextText: {
      type: String,
      default: '下一页'
    },
    // 显示的页码格式
    perSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    showNextDot () {
      return this.pageIndex + this.perSize <= this.pageNum;
    },
    showPrevDot () {
      return this.pageIndex >= this.perSize;
    },
    pageNum () {
      return this.total / this.pageSize;
    },
    curList () {
      if (this.pageNum <= this.perSize) {
        /**
         * 当总页数小于分组大小时，展示所有的页码
         * @example pageNum = 3 perSize = 5 return [1, 2, 3]
         */
        const list = [];
        for (let index = 0; index < this.pageNum; index++) {
          list.push(index + 1);
        }
        return list;
      } else {
       /**
         * 当总页数小于大于大小
         * @example pageNum = 20 perSize = 5
         */
        if (this.pageIndex <= (this.perSize - 1) / 2) {
          /**
           * 当前索引不大于分组大小的一半
           * @example perSize = 5 pageIndex = 1 2 => [1, 2, 3, 4, 5]
           */
          const list = [];
          for (let index = 0; index < this.perSize; index++) {
            if (index + 1 <= this.pageNum) {
              list.push(index + 1);
            }
          }
          return list;
        } else if (this.pageIndex + (this.perSize - 1) / 2 >= this.pageNum) {
          const list = [];
          for (let index = 0; index < this.perSize; index++) {
            list.push(this.pageNum - this.perSize + index + 1);
          }
          return list;          
        } else {
          const list = [this.pageIndex];
          for (let index = 0; index < (this.perSize - 1) / 2; index++) {
            if (this.pageIndex + index + 1 <= this.pageNum) {
              list.push(this.pageIndex + index + 1);
            }
          }
          for (let index = 0; index < (this.perSize - 1) / 2; index++) {
            list.unshift(this.pageIndex - (index + 1));
          }
          return list;    
        }
      }
    }
  },
  methods: {
    handleClick (index) {
      console.log(index);
    },
    updateIndex (value) {
      this.$emit('on-index-change', value);
    }
  }
})
</script>