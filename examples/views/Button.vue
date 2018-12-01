<template>
  <div class="page-button">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">按钮类型</div>
      <div class="ym-doc-block__content">
        <div>
          <Button type="light" text="默认按钮"></Button>
          <Button type="primary" text="主要按钮"></Button>
        </div>
        <div>
          <Button type="warn" text="警告按钮"></Button>
          <Button type="danger" text="危险按钮"></Button>
        </div>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">按钮大小</div>
      <div class="ym-doc-block__content">
        <Button class="btn" type="primary" size="mini" text="迷你按钮"></Button>
        <Button class="btn" type="primary" size="small" text="小号按钮"></Button>
        <Button class="btn" type="primary" size="normal" text="普通按钮"></Button>
        <Button class="btn" type="primary" size="large" text="大号按钮"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">块级按钮</div>
      <div class="ym-doc-block__content">
        <Button class="btn" type="primary" inline text="内联按钮"></Button>
        <Button class="btn" type="primary" block text="块级按钮"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">禁用按钮</div>
      <div class="ym-doc-block__content">
        <div>
          <Button class="btn" disabled text="默认按钮"></Button>
          <Button class="btn" type="primary" disabled text="主要按钮"></Button>
        </div>
        <div>
          <Button class="btn" type="warn" disabled text="警告按钮"></Button>
          <Button class="btn" type="danger" disabled text="危险按钮"></Button>
        </div>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">plain</div>
      <div class="ym-doc-block__content list">
        <Button class="btn" type="light" plain block text="light"></Button>
        <Button class="btn" type="primary" plain block text="primary"></Button>
        <Button class="btn" type="danger" plain block text="danger"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">自定义内容</div>
      <div class="ym-doc-block__content">
        <Button class="btn">
          <img width="24" height="24" src="https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/appgateway/categories/latest/home_mobile_44@3x.png">
          <span>提交</span>
        </Button>
        <Button class="btn">
          <span>提交</span>
          <img width="24" height="24" src="https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/appgateway/categories/latest/home_mobile_44@3x.png">
        </Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">加载状态</div>
      <div class="ym-doc-block__content">
        <Button class="btn" type="light" :showLoading="disabledOption.value1">
          <span>提交</span>
        </Button>
        <Button class="btn" type="primary" :showLoading="disabledOption.value1">
          <span>提交</span>
        </Button>
        <Button class="btn" type="danger" :showLoading="disabledOption.value1">
          <span>提交</span>
        </Button>
        <div>
          <Button class="btn" type="light" @click="disabledOption.value1=!disabledOption.value1">
            <span>切换状态</span>
          </Button>
        </div>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">round</div>
      <div class="ym-doc-block__content">
        <Button class="btn" type="light" size="mini" round text="mini"></Button>
        <Button class="btn" type="primary" size="small" round text="small"></Button>
        <Button class="btn" type="danger" size="normal" round text="normal"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">clear</div>
      <div class="ym-doc-block__content">
        <Button class="btn" type="primary" clear text="取消订单"></Button>
        <Button class="btn" type="danger" clear text="取消订单"></Button>
        <Button class="btn" type="light" clear text="取消订单"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">plain + round</div>
      <div class="ym-doc-block__content list">
        <Button class="btn" type="primary" plain round text="plain + round"></Button>
        <Button class="btn" type="primary" size="small" plain round text="small block plain round"></Button>
        <Button class="btn" type="primary" size="mini" plain round text="mini block plain round"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">clickEffect</div>
      <div class="ym-doc-block__content list">
        <Button class="btn" type="primary" plain text="点击无反馈" :click-effect="false"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">block + size</div>
      <div class="ym-doc-block__content list">
        <Button class="btn" type="primary" size="mini" block text="mini"></Button>
        <Button class="btn" type="primary" size="small" block text="small"></Button>
        <Button class="btn" type="primary" size="normal" block text="normal"></Button>
      </div>
    </div>

    <div class="ym-doc-block">
      <div class="ym-doc-block__title">block + size + round</div>
      <div class="ym-doc-block__content list">
        <Button class="btn" type="primary" size="mini" block round text="mini"></Button>
        <Button class="btn" type="primary" size="small" block round text="small"></Button>
        <Button class="btn" type="primary" size="normal" block round text="normal"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button'
export default {
  components: {
    Button
  },
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
.list /deep/ .ym-button {
  margin-bottom: 10px;
}

.ym-doc-block__content {
  padding: 10px 15px;
}

.page-button {
  /deep/ .ym-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
