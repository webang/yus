<template>
  <div class="demo-infinite-picker">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd"></div>
      <div class="ymu-doc-block__bd full">
        <ymu-cell label="取件地址">
          <ymu-switch slot="value" v-model="v1"></ymu-switch>
        </ymu-cell>
        <ymu-infinite-picker :list="list" v-model="v1" @on-confirm="handleConfirm"/>
      </div>
      <div class="ymu-doc-block__bd">
        <div class="item">
          <span v-for="(item, index) in valueList01" :key="index">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import city from './city.json';
export default {
  data () {
    return {
      list: city,
      v1: false,
      valueList01: []
    }
  },
  computed: {
  },
  methods: {
    handleConfirm (value) {
      this.valueList01 = value;
    }
  }
}
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
