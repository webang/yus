<template>
  <div class="yus-demo page-tabbar">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基础用法</div>
      <div class="yus-demo-block__bd">
        <yus-tabbar v-model="activeIndex" @on-click-item="handleClick">
          <yus-tabbar-item
            icon="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg"
            activeIcon="https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg"
            title="首页"
            color="#888"
            activeColor="#33a3f4"
            :index="0"
          />
          <yus-tabbar-item
            icon="https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg"
            activeIcon="https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg"
            title="商品"
            color="#888"
            activeColor="#33a3f4"
            :index="1"
          />
          <yus-tabbar-item
            icon="https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            activeIcon="https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            title="活动"
            color="#888"
            activeColor="#33a3f4"
          />
        </yus-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 1
    }
  },
  methods: {
    handleClick (index) {
      this.activeIndex = index
    }
  }
}
</script>