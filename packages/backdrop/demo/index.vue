<template>
  <div class="demo-backdrop">
    <div class="ymu-doc-block__hd">基本用法</div>
    <ymu-cell-group>
      <ymu-cell label="显示">
        <ymu-switch slot="value" v-model="show01"/>
      </ymu-cell>
    </ymu-cell-group>
    <ymu-backdrop v-model="show01" @click="show01=false"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show01: false
    }
  }
}
</script>
