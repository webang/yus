<template>
  <div class="demo-switch">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基础用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="简单用法">
            <ymu-switch v-model="s1" slot="value"/>
          </ymu-cell>
          <ymu-cell label="禁用选项">
            <ymu-switch slot="value" v-model="s3" :disabled="true"/>
          </ymu-cell>
          <ymu-cell label="禁用选项">
            <ymu-switch slot="value" v-model="s2" :disabled="true"/>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      s1: true,
      d1: false,
      s2: true,
      d2: true,
      s3: false,
      d3: false
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  height: 100%;
  background-color: #fff;
}

.full {
  margin-left: -10px;
  margin-right: -10px;
}

.block {
  margin-bottom: 10px;
}

.icon-tangel {
  display: block;
  width: 20px;
  height: 20px;
  background: #ccc;
}

.item {
  position: relative;
  display: flex;
  font-size: 16px;
  padding: 10px;
  color: #333;
  &::after {
    position: absolute;
    content: " ";
    left: 0;
    right: 0;
    bottom: 0px;
    height: 1PX;
    transform: scaleY(0.5);
    background-color: #d9d9d9;
  }
  img {
    width: 60px;
    height: 60px;
  }
  div {
    margin-left: 12px;
  }
}
</style>
