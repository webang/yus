<template>
  <div class="yus-demo yus-demo-picker">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-picker :column-list="list1" :header="false"></yus-picker>
        </div>
      </div>
      <div class="yus-demo-block__hd">popup模式</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-cell>
            <div slot="title">
              <span v-if="v1">{{ v1 }}</span>
              <span v-else style="color: #ccc">请选择</span>
            </div>
            <yus-switch slot="value" title="切换显示" v-model="visible2"></yus-switch>
          </yus-cell>
          <yus-picker
            popup
            v-model="visible2"
            :column-list="list1"
            @on-confirm="handleConfirm1"
            @on-cancel="handleCcancel1"
            @on-column-change="handleColumnChange1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: '',
      visible2: false,
      list1: [
        {
          values: ['苹果', '香蕉', '荔枝', '雪梨', '桂圆', '桔子']
        }
      ]
    };
  },
  methods: {
    handleConfirm1(picker, values, indexs) {
      this.v1 = values.join(' ');
      this.visible2 = false;
    },
    handleCcancel1() {
      this.visible2 = false;
    },
    handleColumnChange1(picker, column, index) {
      console.log(column, index);
    }
  }
};
</script>
