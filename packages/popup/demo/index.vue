<template>
  <div class="demo-popup">
    <ymu-cell-group title="基本用法">
      <ymu-cell label="从底部弹出">
        <ymu-switch slot="value" v-model="demo1.value"/>
      </ymu-cell>
      <ymu-cell label="从顶部弹出">
        <ymu-switch slot="value" v-model="demo2.value"/>
      </ymu-cell>
      <ymu-cell label="从左边弹出">
        <ymu-switch slot="value" v-model="demo3.value"/>
      </ymu-cell>
      <ymu-cell label="从右边弹出">
        <ymu-switch slot="value" v-model="demo4.value"/>
      </ymu-cell>
      <ymu-cell label="使用header">
        <ymu-switch slot="value" v-model="demo5.value"/>
      </ymu-cell>
    </ymu-cell-group>
    <ymu-popup v-model="demo1.value">
      <div class="popup__content">
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </ymu-popup>
    <ymu-popup v-model="demo2.value" position="top">
      <div class="popup__content">
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </ymu-popup>
    <ymu-popup v-model="demo3.value" position="left">
      <div class="popup__content">
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </ymu-popup>
    <ymu-popup v-model="demo4.value" position="right">
      <div class="popup__content">
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
        <p>对对对</p>
      </div>
    </ymu-popup>
    <ymu-popup class="demo-05" v-model="demo5.value" :useHeader="true" title="选择支付方式" leftText="取消" rightText="确认">
      <div class="popup__content">
        <p>招商银行</p>
        <p>建设银行</p>
        <p>广大银行</p>
        <p>名声银行</p>
        <p>台湾银行</p>
        <p>浦发银行</p>
      </div>
    </ymu-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demo1: {
        value: false
      },
      demo2: {
        value: false
      },
      demo3: {
        value: false
      },
      demo4: {
        value: false
      },
      demo5: {
        value: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup__content {
  padding: 12px;
  padding-top: 0;
}

.demo-05 {
  .popup__content {
    padding-bottom: 0;
  }
  .popup__content p {
    position: relative;
    padding: 10px 0;
    line-height: 24px;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: #d9d9d9;
      transform: scaleY(.5);
    }
  }
}
</style>
