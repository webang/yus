<template>
  <div class="demo-ymu-button">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">按钮类型: size</div>
      <div class="ymu-doc-block__bd">
        <div>
          <ymu-button type="light" text="默认按钮"/>
          <ymu-button type="primary" text="主要按钮"/>
          <ymu-button type="info" text="信息按钮"/>
        </div>
        <div>
          <ymu-button type="warn" text="警告按钮"/>
          <ymu-button type="danger" text="危险按钮"/>
        </div>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">朴素按钮: plain</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" text="主要按钮" plain/>
        <ymu-button class="btn" type="danger" text="危险按钮" plain/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">块级按钮: block</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" text="块级按钮" block/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">按钮尺寸: size</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" size="mini" text="迷你"/>
        <ymu-button class="btn" type="primary" size="small" text="小号"/>
        <ymu-button class="btn" type="primary" size="normal" text="普通"/>
        <ymu-button class="btn" type="primary" size="large" text="大号按钮"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">禁用按钮: disabled</div>
      <div class="ymu-doc-block__bd">
        <div>
          <ymu-button class="btn" text="默认按钮" disabled/>
          <ymu-button class="btn" type="primary" text="主要按钮" disabled/>
        </div>
        <div>
          <ymu-button class="btn" type="warn" text="警告按钮" disabled/>
          <ymu-button class="btn" type="danger" text="危险按钮" disabled/>
        </div>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">加载状态: loading</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" :loading="disabledOption.value1" text="提交中"/>
        <ymu-button class="btn" type="danger" :loading="disabledOption.value1" text="提交中"/>
        <ymu-button class="btn" type="primary" block :loading="disabledOption.value1" text="提交中"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">圆角按钮: round</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" size="mini" round text="mini"/>
        <ymu-button class="btn" type="warn" size="small" round text="small"/>
        <ymu-button class="btn" type="danger" size="normal" round text="normal"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">自定义内容: slot=default</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn">
          <ymu-icon name="ios-thumbs-up" height="24px"/>
          <span>提交</span>
        </ymu-button>
        <ymu-button class="btn">
          <ymu-icon name="ios-alarm"/>
          <span>提交</span>
        </ymu-button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">无边框按钮：clear</div>
      <div class="ymu-doc-block__bd">
        <ymu-button class="btn" type="primary" clear text="取消订单"/>
        <ymu-button class="btn" type="danger" clear text="取消订单"/>
        <ymu-button class="btn" type="light" clear text="取消订单"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">复合按钮：plain + round</div>
      <div class="ymu-doc-block__bd list">
        <ymu-button class="btn" type="primary" plain round text="plain + round"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">复合按钮: block + size</div>
      <div class="ymu-doc-block__bd list">
        <ymu-button class="btn" type="primary" size="mini" block text="mini"/>
        <ymu-button class="btn" type="primary" size="small" block text="small"/>
        <ymu-button class="btn" type="primary" size="normal" block text="normal"/>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">复合按钮: block + size + round</div>
      <div class="ymu-doc-block__bd list">
        <ymu-button class="btn" type="primary" size="mini" block round text="mini"/>
        <ymu-button class="btn" type="primary" size="small" block round text="small"/>
        <ymu-button class="btn" type="primary" size="normal" block round text="normal"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disabledOption: {
        value1: true,
        value2: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list /deep/ .ymu-button {
  margin-bottom: 10px;
}

.demo-ymu-button {
  /deep/ .ymu-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
