<template>
  <div class="yus-demo yus-demo-toast">
    <div class="yus-demo-block__hd">基本使用</div>
    <div class="yus-demo-block__bd">
      <yus-cell title="从底部弹出">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toastFromBottom"
          text="底部弹出"
        />
      </yus-cell>
      <yus-cell title="从中间弹出">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toastFromMiddle"
          text="中间弹出"
        />
      </yus-cell>
      <yus-cell title="从顶部弹出">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toastFromTop"
          text="顶部弹出"
        />
      </yus-cell>
      <yus-cell title="loading">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="loadingToast"
          text="加载提示"
        />
      </yus-cell>
      <yus-cell title="success">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="successToast"
          text="成功提示"
        />
      </yus-cell>
      <yus-cell title="fail">
        <yus-button slot="value" size="mini" type="primary" plain @click="failToast" text="失败提示" />
      </yus-cell>
      <yus-cell title="warn">
        <yus-button slot="value" size="mini" type="primary" plain @click="warnToast" text="警告提示" />
      </yus-cell>
    </div>
    <div class="yus-demo-block__hd">使用幕布</div>
    <div class="yus-demo-block__bd">
      <div class="yus-demo-row">
        <yus-button block slot="value" type="primary" @click="toast1" text="幕布不透明" />
      </div>
      <div class="yus-demo-row">
        <yus-button block slot="value" type="primary" @click="toast2" text="幕布透明加载" />
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../index';
export default {
  methods: {
    toastFromBottom() {
      Toast({
        message: '发送短信成功',
        position: 'bottom',
        duration: 10000
      });
    },

    toast1() {
      Toast({
        type: 'loading',
        message: '加载中...',
        backdrop: true,
        transparent: false
      });
    },

    toast2() {
      Toast({
        type: 'loading',
        message: '加载中...',
        backdrop: true,
        transparent: true
      });
    },

    successToast() {
      Toast({
        type: 'success',
        message: '下单成功',
        duration: 20000,
        className: 'ui-success-toast'
      });
    },

    loadingToast() {
      Toast({
        type: 'loading',
        message: '加载中...',
        duration: 2000
      });
    },

    failToast() {
      Toast({
        type: 'fail',
        message: '登录失败',
        duration: 2000
      });
    },

    warnToast() {
      Toast({
        type: 'fail',
        message: '登录失败',
        duration: 2000
      });
    },

    toastFromTop() {
      Toast({
        message: '发送短信成功',
        position: 'top',
        duration: 1000
      });
    },

    toastFromMiddle() {
      const t = Toast({
        message: '发送短信成功',
        duration: 1000
      });
    },

    toastLoading() {
      const t = Toast({
        message: '加载中...',
        type: 'loading'
      });
    },

    toast(option) {
      const t = Toast(option);
      setTimeout(() => {
        t.clear();
      }, 1000);
    }
  }
};
</script>