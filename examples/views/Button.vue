<template>
  <div class="page-button">
    <div class="card">
      <p class="card-hd">color</p>
      <Button class="btn" color="light" text="plain"></Button>
      <Button class="btn" color="primary" text="primary"></Button>
      <Button class="btn" color="danger" text="warning"></Button>
    </div>
    <div class="card">
      <p class="card-hd">size</p>
      <Button class="btn" color="primary" size="mini" text="mini"></Button>
      <Button class="btn" color="primary" size="small" text="small"></Button>
      <Button class="btn" color="primary" size="normal" text="normal"></Button>
    </div>
    <div class="card">
      <p class="card-hd">block</p>
      <Button class="btn" color="light" block text="light + block"></Button>
      <Button class="btn" color="primary" block text="primary + block"></Button>
      <Button class="btn" color="danger" block text="danger + block"></Button>
    </div>
    <div class="card">
      <p class="card-hd">disabled</p>
      <Button class="btn" disabled text="default"></Button>
      <Button class="btn" color="primary" disabled text="primary"></Button>
      <Button class="btn" color="danger" disabled text="danger"></Button>
    </div>
    <div class="card">
      <p class="card-hd">plain</p>
      <Button class="btn" color="light" plain block text="light"></Button>
      <Button class="btn" color="primary" plain block text="primary"></Button>
      <Button class="btn" color="danger" plain block text="danger"></Button>
    </div>
    <div class="card">
      <p class="card-hd">自定义内容</p>
      <Button class="btn">
        <img width="24" height="24" src="https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/appgateway/categories/latest/home_mobile_44@3x.png">
        <span>提交</span>
      </Button>
      <Button class="btn">
        <span>提交</span>
        <img width="24" height="24" src="https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/appgateway/categories/latest/home_mobile_44@3x.png">
      </Button>
      <Button class="btn" color="light">
        <span>提交</span>
        <img width="24" height="24" src="https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/appgateway/categories/latest/home_mobile_44@3x.png">
      </Button>
    </div>
    <div class="card">
      <p class="card-hd">loading</p>
      <Button class="btn" color="light" :showLoading="true">
        <span>提交</span>
      </Button>
      <Button class="btn" color="primary" :showLoading="true">
        <span>提交</span>
      </Button>
      <Button class="btn" color="danger" :showLoading="true">
        <span>提交</span>
      </Button>
    </div>
    <div class="card">
      <p class="card-hd">round</p>
      <Button class="btn" color="light" size="mini" round text="mini"></Button>
      <Button class="btn" color="primary" size="small" round text="small"></Button>
      <Button class="btn" color="danger" size="normal" round text="normal"></Button>
    </div>
    <div class="card">
      <p class="card-hd">clear</p>
      <Button class="btn" color="primary" clear text="primary"></Button>
      <Button class="btn" color="danger" clear text="danger"></Button>
      <Button class="btn" color="light" clear text="light"></Button>
    </div>
    <div class="card">
      <p class="card-hd">plain + round</p>
      <Button class="btn" color="primary" plain round text="plain + round"></Button>
      <Button class="btn" color="primary" size="small" plain round text="small block plain round"></Button>
      <Button class="btn" color="primary" size="mini" plain round text="mini block plain round"></Button>
    </div>
    <div class="card">
      <p class="card-hd">block+size</p>
      <Button class="btn" color="primary" size="mini" block text="mini"></Button>
      <Button class="btn" color="primary" size="small" block text="small"></Button>
      <Button class="btn" color="primary" size="normal" block text="normal"></Button>
    </div>
    <div class="card">
      <p class="card-hd">block+size+round</p>
      <Button class="btn" color="primary" size="mini" block round text="mini"></Button>
      <Button class="btn" color="primary" size="small" block round text="small"></Button>
      <Button class="btn" color="primary" size="normal" block round text="normal"></Button>
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
.card {
  padding: 0 12px;
  margin-bottom: 10px;
  background-color: #fff;
}

/deep/ .ymu-button {
  margin-bottom: 10px;
}

.card-hd {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 16px;
  /*border-bottom: 1px #f4f4f4 solid;*/
}

</style>
