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
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="从中间弹出">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toastFromMiddle"
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="从顶部弹出">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toastFromTop"
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="loading">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toast({ type: 'loading', message: '加载中...' })"
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="success">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toast({ type: 'success', message: '' })"
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="fail">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toast({ type: 'fail', message: '' })"
          text="显示Toast"
        />
      </yus-cell>
      <yus-cell title="warn">
        <yus-button
          slot="value"
          size="mini"
          type="primary"
          plain
          @click="toast({ type: 'warn', message: '' })"
          text="显示Toast"
        />
      </yus-cell>
    </div>
    <div class="yus-demo-block__hd">使用遮罩</div>
    <div class="yus-demo-block__bd">
      <div class="yus-demo-row">
        <yus-button
          block
          slot="value"
          type="primary"
          @click="toast({ type: 'loading', message: '加载中...', backdrop: true, transparent: false })"
          text="显示Toast(幕布不透明)"
        />
      </div>
      <div class="yus-demo-row">
        <yus-button
          block
          slot="value"
          type="primary"
          @click="toast({ type: 'loading', message: '加载中...', backdrop: true, transparent: true })"
          text="显示Toast(幕布透明色)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../index';
export default {
  methods: {
    toastFromBottom() {
      const t = Toast({
        message: '发送短信成功',
        position: 'bottom'
      });
      setTimeout(() => {
        t.clear();
      }, 1000);
    },
    toastFromTop() {
      const t = Toast({
        message: '发送短信成功',
        position: 'top'
      });
      setTimeout(() => {
        t.clear();
      }, 1000);
    },
    toastFromMiddle() {
      const t = Toast({
        message: '发送短信成功'
      });
      setTimeout(() => {
        t.clear();
      }, 1000);
    },
    toastLoading() {
      const t = Toast({
        message: '加载中...',
        type: 'loading'
      });
      setTimeout(() => {
        t.clear();
      }, 1000);
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