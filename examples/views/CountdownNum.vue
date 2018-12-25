<template>
  <div class="view-countdownNum">
    <Cell label="自动播放">
      <CountdownNum slot="value" :count="10"/>
    </Cell>
    <Cell label="不自动播放">
      <div ></div>
      <CountdownNum slot="value" :count="10" :play="false"/>
    </Cell>
    <Cell label="设置5s延迟">
      <CountdownNum slot="value" :count="10" :delay="5"/>
    </Cell>
    <Cell label="暂停或继续">
      <div class="ym-doc-ui-flex" slot="value">
        <Button type="primary" size="mini" plain @click="play1=!play1">切换</Button>
        <CountdownNum :count="10" :play="play1"/>
      </div>
    </Cell>
    <div class="ym-doc-block__bd">
      <div>slot-scope</div>
    </div>
    <Cell>
      <CountdownNum slot="value" :count="10">
        <template slot-scope="prop">
          {{ prop }}
        </template>
      </CountdownNum>
    </Cell>
  </div>
</template>

<script>
import { CountdownNum, Cell, Button } from 'ymu'
export default {
  components: {
    Cell,
    Button,
    CountdownNum
  },
  data () {
    return {
      play1: false
    }
  }
}
</script>
