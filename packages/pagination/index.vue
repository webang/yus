<template>
  <div class="ymu-pagination">
    <a
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      :class="{'ymu-pagination-item--disabled': pageIndex <= 1}">上一页</a>
    <div
      class="ymu-pagination-item"
      :class="{'ymu-pagination-item--active': item===pageIndex}"
      v-for="item in count" :key="item"
      @click="handleClick(item)"
    >
      <span> {{ item }}</span>
    </div>
    <a
      class="ymu-pagination-item"
      href="javascript:;void(0)"
      :class="{'ymu-pagination-item--disabled': pageIndex >= count}">下一页</a>
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
    count () {
      return this.total / this.pageSize
    }
  },
  methods: {
    handleClick (index) {
      console.log(index);
      this.$emit('on-index-change', index);
    }
  }
})
</script>