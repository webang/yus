<template>
  <div class="demo-countdown-num">
    <ymu-cell label="自动播放">
      <ymu-countdown-num slot="value" :count="10"/>
    </ymu-cell>
    <ymu-cell label="不自动播放">
      <div ></div>
      <ymu-countdown-num slot="value" :count="10" :play="false"/>
    </ymu-cell>
    <ymu-cell label="设置5s延迟">
      <ymu-countdown-num slot="value" :count="10" :delay="5"/>
    </ymu-cell>
    <ymu-cell label="暂停或继续">
      <div class="ymu-doc-ui-flex" slot="value">
        <ymu-button type="primary" size="mini" plain @click="play1=!play1">切换</ymu-button>
        <ymu-countdown-num :count="10" :play="play1"/>
      </div>
    </ymu-cell>
    <div class="ymu-doc-block__bd">
      <div>slot-scope</div>
    </div>
    <ymu-cell>
      <ymu-countdown-num slot="value" :count="10">
        <template slot-scope="prop">
          {{ prop }}
        </template>
      </ymu-countdown-num>
    </ymu-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      play1: false
    }
  }
}
</script>
