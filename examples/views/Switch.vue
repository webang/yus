<template>
  <div class="page page-switch">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="简单用法">
            <wSwitch v-model="s1" slot="value"></wSwitch>
          </Cell>
          <Cell label="禁用选项">
            <wSwitch slot="value" v-model="s3" :disabled="true"></wSwitch>
          </Cell>
          <Cell label="禁用选项">
            <wSwitch slot="value" v-model="s2" :disabled="true"></wSwitch>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Cell, CellGroup, Switch as wSwitch } from 'ymu'

export default {
  components: {
    wSwitch,
    Cell,
    CellGroup
  },
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

.wui-scroll {
  position: absolute;
  top: 46px;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
