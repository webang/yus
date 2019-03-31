<template>
  <div class="ymu-pagination">
    <!-- 上一页 -->
    <li
      v-if="!hidePrevNext"
      class="ymu-pagination-item ymu-pagination-prev"
      :class="{'ymu-pagination-item--disabled': pageIndex <= 1}"
      @click="updateIndex(pageIndex - 1)">上一页</li>
    <!-- 页码 -->
    <li
      class="ymu-pagination-item ymu-pagination-page"
      :class="{'ymu-pagination-item--active': page.index + 1 === pageIndex}"
      v-for="(page, index) in pages" :key="index"
      @click="updateIndex(page.index + 1)"
    >
      <span v-if="page.breakView">...</span>
      <span v-else>{{ page.index + 1 }}</span>
    </li>
    <!-- 下一页 -->
    <li
      v-if="!hidePrevNext"
      class="ymu-pagination-item ymu-pagination-next"
      @click="updateIndex(pageIndex + 1)"
      :class="{'ymu-pagination-item--disabled': pageIndex >= pageCount}">下一页</li>
  </div>
</template>

<script>
import use from '../../src/utils/use';
const [useName, useBem] = use('pagination');

export default useName({
  props: {
    // 总记录数
    totalItems: {
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
    // 显示的页码大小
    pageRange: {
      type: Number,
      default: 5
    },
    // 是否隐藏上下翻页
    hidePrevNext: {
      type: Boolean,
      default: false
    },
    // 两侧边缘显示的数量
    marginPages: {
      type: Number,
      default: 0
    },
    showBreakView: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isFirstSelected () {
      return this.pageIndex === 1;
    },
    pageCount () {
      return this.totalItems / this.pageSize;
    },
    pages () {
      let items = {};
      if (this.pageCount <= this.pageRange) {
        /**
         * 当总页数小于分组大小时，展示所有的页码
         * @example pageCount = 3 pageRange = 5 return [1, 2, 3]
         */
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === (this.selected - 1)
          }
          items[index] = page
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);
        /**
         * 当总页数大于分组大小
         * @example pageCount = 30 pageRange = 5
         */

        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === (this.selected - 1)
          };
          items[index] = page;
        };

        let setBreakView = (index, value) => {
          let breakView = {
            disabled: true,
            breakView: true,
            index: value
          };
          items[index] = breakView;
        };

        for (let index = 0; index < this.marginPages; index++) {
          setPageItem(index);
        }

        // 计算左侧边界
        let lowRange = 0;
        if (this.pageIndex - halfPageRange > 0) {
          lowRange = this.pageIndex - 1 - halfPageRange;
        }

        // 计算右侧边界
        let highRange = lowRange + this.pageRange - 1;
        if (highRange >= this.pageCount) {
          highRange = this.pageCount - 1;
          lowRange = highRange - this.pageRange + 1;
        }

        for (let index = lowRange; index <= highRange && index <= this.pageCount - 1; index++) {
          setPageItem(index);
        }

        if (this.showBreakView) {
          if (lowRange > this.marginPages) {
            setBreakView(lowRange - 1, this.pageIndex - 1 - this.pageRange)
          }
          if (highRange + 1 < this.pageCount - this.marginPages) {
            setBreakView(highRange + 1, this.pageIndex - 1 + this.pageRange)
          }
        }

        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }
      return items;
    }
  },
  methods: {
    updateIndex (index) {
      if (index < 1) {
        index = 1
      }
      if (index > this.pageCount) {
        index = this.pageCount
      }
      this.$emit('on-index-change', index);
    }
  }
})
</script>