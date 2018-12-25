<template>
  <div class="view-clokcer">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="倒计时10s" clickable is-link>
            <Countdown slot="value" :count="10" mode="number" @on-change="onChange1" @on-end="onEnd1"></Countdown>
          </Cell>
          <Cell label="倒计时0s" clickable is-link>
            <Countdown slot="value" :count="0" mode="number" @on-change="onChange2" @on-end="onEnd2"></Countdown>
          </Cell>
          <Cell label="倒计时模式" clickable is-link>
            <Countdown slot="value" :startTime="startTime" :endTime="endTime">
              <template slot-scope="{ date }"></template>
            </Countdown>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell, Clocker, Countdown, CellGroup } from "ymu";
export default {
  components: {
    Cell,
    Badge,
    Clocker,
    Countdown,
    CellGroup
  },
  data() {
    return {
      startTime: 0,
      endTime: 0
    };
  },
  methods: {
    onChange1 (counter) {
      console.log('01: on-change', counter)
    },
    onEnd1 () {
      console.log('01: on-end')
    },
    onChange2 (counter) {
      console.log('02: on-change', counter)
    },
    onEnd2 () {
      console.log('02: on-end')
    }
  },
  mounted() {
    const startTime =
      new Date(new Date().setFullYear(2018, 12, 12)).setHours(0, 0, 0, 0) /
      1000
    const endTime =
      new Date(new Date().setFullYear(2019, 12, 12)).setHours(0, 0, 0, 0) /
      1000
    this.endTime = endTime
    this.startTime = startTime
  }
};
</script>

<style lang="scss" scoped>
.page-badge {
  /deep/ .ym-badge {
    margin-left: 5px;
  }
  /deep/ .ym-cell__value {
    color: #999;
  }
}
</style>
