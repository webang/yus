<template>
  <div class="yus-demo yus-demo-button">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">按钮类型</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="light" text="常规按钮"/>
          <yus-button type="primary" text="主题按钮"/>
          <yus-button type="info" text="信息按钮"/>
        </div>
        <yus-button type="danger" text="危险按钮"/>
        <yus-button type="warn" text="警告按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">朴素类型</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="light" plain text="常规按钮"/>
          <yus-button type="primary" plain text="主题按钮"/>
          <yus-button type="info" plain text="信息按钮"/>
        </div>
        <yus-button type="danger" plain text="危险按钮"/>
        <yus-button type="warn" plain text="警告按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">按钮大小</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="primary" size="mini" text="迷你按钮"/>
          <yus-button type="primary" size="small" text="小号按钮"/>
        </div>
        <yus-button type="primary" size="normal" text="中号按钮"/>
        <yus-button type="primary" size="large" text="大号按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">块级按钮</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="primary" block text="块级按钮"/>
        </div>
        <yus-button type="danger" block text="块级按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">圆角按钮</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="primary" size="mini" round text="迷你按钮"/>
          <yus-button type="primary" size="small" round text="小号按钮"/>
        </div>
        <yus-button type="primary" size="normal" round text="中号按钮"/>
        <yus-button type="primary" size="large" round text="大号按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">警用状态</div>
      <div class="yus-demo-block__bd">
        <yus-button type="primary" disabled text="块级按钮"/>
        <yus-button type="danger" disabled text="块级按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">加载状态</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="primary" :loading="loading" text="块级按钮" @click="loading=!loading"/>
          <yus-button type="danger" :loading="loading" text="块级按钮"/>
        </div>
        <yus-button type="primary" block :loading="loading" text="块级按钮"/>
      </div>
    </div>
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">自定义内容</div>
      <div class="yus-demo-block__bd">
        <div class="yus-demo-row">
          <yus-button type="danger" block>
            <img
              width="20"
              height="20"
              style="margin-right: 4px; border-radius: 50%;"
              src="https://mall.s.maizuo.com/5932d48872195a3cb1752470e203b506.jpg?x-oss-process=image/resize,w_66"
              alt
            >
            <span>块级按钮</span>
          </yus-button>
        </div>
        <yus-button type="danger" block>
          <span>块级按钮</span>
          <img
            width="20"
            height="20"
            style="margin-left: 4px; border-radius: 50%;"
            src="https://mall.s.maizuo.com/5932d48872195a3cb1752470e203b506.jpg?x-oss-process=image/resize,w_66"
            alt
          >
        </yus-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style lang="scss" scoped>
.yus-button {
  margin-right: 5px;
}
</style>
