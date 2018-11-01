<template>
  <div class="page-button">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">type</div>
      <div class="ymu-doc-block__content">
        <Button type="light" text="plain"></Button>
        <Button type="primary" text="primary"></Button>
        <Button type="danger" text="warning"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">size</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" type="primary" size="mini" text="mini"></Button>
        <Button class="btn" type="primary" size="small" text="small"></Button>
        <Button class="btn" type="primary" size="normal" text="normal"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">block</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" type="primary" block text="primary + block"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">disabled</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" disabled text="default"></Button>
        <Button class="btn" type="primary" disabled text="primary"></Button>
        <Button class="btn" type="danger" disabled text="danger"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">plain</div>
      <div class="ymu-doc-block__content list">
        <Button class="btn" type="light" plain block text="light"></Button>
        <Button class="btn" type="primary" plain block text="primary"></Button>
        <Button class="btn" type="danger" plain block text="danger"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">自定义内容</div>
      <div class="ymu-doc-block__content">
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

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">loading</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" type="light" :showLoading="true">
          <span>提交</span>
        </Button>
        <Button class="btn" type="primary" :showLoading="true">
          <span>提交</span>
        </Button>
        <Button class="btn" type="danger" :showLoading="true">
          <span>提交</span>
        </Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">round</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" type="light" size="mini" round text="mini"></Button>
        <Button class="btn" type="primary" size="small" round text="small"></Button>
        <Button class="btn" type="danger" size="normal" round text="normal"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">clear</div>
      <div class="ymu-doc-block__content">
        <Button class="btn" type="primary" clear text="primary"></Button>
        <Button class="btn" type="danger" clear text="danger"></Button>
        <Button class="btn" type="light" clear text="light"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">plain + round</div>
      <div class="ymu-doc-block__content list">
        <Button class="btn" type="primary" plain round text="plain + round"></Button>
        <Button class="btn" type="primary" size="small" plain round text="small block plain round"></Button>
        <Button class="btn" type="primary" size="mini" plain round text="mini block plain round"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">block + size</div>
      <div class="ymu-doc-block__content list">
        <Button class="btn" type="primary" size="mini" block text="mini"></Button>
        <Button class="btn" type="primary" size="small" block text="small"></Button>
        <Button class="btn" type="primary" size="normal" block text="normal"></Button>
      </div>
    </div>

    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">block + size + round</div>
      <div class="ymu-doc-block__content list">
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
  }
}
</script>

<style lang="scss" scoped>
.list /deep/ .ymu-button {
  margin-bottom: 10px;
}
.ymu-doc-block__content {
  padding: 10px 15px;
  background: #fff;
}
</style>
