<template>
  <div class="demo-infinite-picker">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <yus-cell title="取件地址">
          <yus-switch slot="value" v-model="v1"></yus-switch>
        </yus-cell>
        <yus-infinite-picker :list="list" v-model="v1" @confirm="handleConfirm" />
      </div>
      <div class="yus-demo-block__bd">
        <div class="item">
          <span v-for="(item, index) in valueList01" :key="index">{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">设置初始值</div>
      <div class="yus-demo-block__bd">
        <yus-cell title="取件地址">
          <yus-switch slot="value" v-model="v2"></yus-switch>
        </yus-cell>
        <yus-infinite-picker
          :list="list"
          v-model="v2"
          @confirm="handleConfirm2"
          :defaultValue="valueList02"
        />
      </div>
      <div class="yus-demo-block__bd">
        <div class="item">
          <span v-for="(item, index) in valueList02" :key="index">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from './city.json';
export default {
  data() {
    return {
      list: city,
      v1: false,
      v2: false,
      valueList01: [],
      valueList02: [
        {
          id: '220000',
          name: '吉林省'
        },
        {
          id: '220400',
          name: '辽源市'
        },
        {
          id: '220403',
          name: '西安区'
        }
      ]
    };
  },

  methods: {
    handleConfirm(value) {
      this.valueList01 = value;
    },

    handleConfirm2(value) {
      console.log(value);
      this.valueList02 = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  font-size: 14px;
  line-height: 40px;
}
.full {
  margin-left: -12px;
  margin-right: -12px;
}
</style>