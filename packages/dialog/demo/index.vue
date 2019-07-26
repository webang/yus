<template>
  <div class="f6-demo f6-demo-dialog">
    <div class="f6-demo-block__hd">基本使用</div>
    <div class="f6-demo-block__bd">
      <f6-cell title="Alert">
        <f6-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="Dialog({
            type: 'alert',
            title: '系统提示',
            content: '您真的要取消订单吗？'
          })"
          text="显示"
        />
      </f6-cell>
      <f6-cell title="Confirm">
        <f6-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="Dialog({
            type: 'conform',
            title: '系统提示',
            content: '您真的要取消订单吗？'
          })"
          text="显示"
        />
      </f6-cell>
      <f6-cell title="Prompt">
        <f6-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="Dialog({
            type: 'prompt',
            title: '系统提示',
            content: '您真的要取消订单吗？',
            inputValue: inputValue
          })"
          text="显示"
        />
      </f6-cell>
      <f6-cell title="组件式调用">
        <f6-switch slot="value" v-model="visible1"/>
      </f6-cell>
    </div>

    <f6-dialog
      type="confirm"
      :value="visible1"
      title="系统提示"
      content="您真的要取消订单吗？"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import Dialog from '../index';
import Toast from '../../toast';

export default {
  data() {
    return {
      inputValue: 555,
      visible1: false
    };
  },
  methods: {
    handleConfirm() {
      this.visible1 = false;
      Toast({
        message: '您选择了确认',
        duration: 1000
      });
    },

    handleCancel() {
      this.visible1 = false;
      Toast({
        message: '您选择了取消',
        duration: 1000
      });
    },

    Dialog(option) {
      Dialog(option)
        .then(res => {
          if (res !== undefined) {
            this.inputValue = res;
            Toast({
              message: '您填写了确认' + res,
              duration: 1000
            });
          } else {
            Toast({
              message: '您选择了确认',
              duration: 1000
            });
          }
          Dialog.close();
        })
        .catch(() => {
          Toast({
            message: '您选择了取消',
            duration: 1000
          });
          Dialog.close();
        });
    }
  }
};
</script>
