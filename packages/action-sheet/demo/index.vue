<template>
  <div class="yus-demo yus-demo-action-sheet">
    <div class="yus-demo-block__bd" style="margin-top: 10px">
      <yus-cell title="基本用法">
        <yus-switch slot="value" v-model="visible1"></yus-switch>
      </yus-cell>
      <yus-cell title="禁用选项">
        <yus-switch slot="value" v-model="visible2"></yus-switch>
      </yus-cell>
    </div>
    <yus-action-sheet
      v-model="visible1"
      title="选择收款方式"
      :menu="menu1"
      :clickMenu="handleClickMenu1"
      :close-on-click-backdrop="false"
      @click-backdrop="handleClickBackdrop"
    />
    <yus-action-sheet
      v-model="visible2"
      title="选择收款方式"
      :menu="menu2"
      :clickMenu="handleClickMenu2"
      :close-on-click-backdrop="true"
      @click-backdrop="handleClickBackdrop"
    />
  </div>
</template>

<script>
import Toast from '../../toast';
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      menu1: [
        {
          text: '支付宝收款',
          disabled: false
        },
        {
          text: '银行卡收款',
          disabled: false
        },
        {
          text: '微信钱包支付',
          disabled: false
        }
      ],
      menu2: [
        {
          text: '支付宝收款',
          disabled: false
        },
        {
          text: '银行卡收款',
          disabled: false
        },
        {
          text: '微信钱包支付',
          disabled: true
        }
      ]
    };
  },
  methods: {
    handleClickMenu1(index) {
      if (index === -1) {
        this.visible1 = false;
      } else {
        Toast({
          message: `您选择了${index}`,
          duration: 1000
        });
      }
    },
    handleClickMenu2(index) {
      if (index === -1) {
        this.visible2 = false;
      } else {
        Toast({
          message: `您选择了${index}`,
          duration: 1000
        });
      }
    },
    handleClickBackdrop(event) {
      console.log(event);
    }
  }
};
</script>