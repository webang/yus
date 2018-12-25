<template>
  <div class="view-clokcer">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content">
        <div>
          
        </div>
        <CellGroup>
          <Cell label="" clickable is-link>
            <CountdownDate slot="value" :startTime="startTime" :endTime="endTime"></CountdownDate>
          </Cell>
          <Cell label="倒计时模式: 已经开始" clickable is-link>
            <CountdownDate slot="value" :startTime="startTime" :endTime="endTime">
              <template slot-scope="prop">
                {{ prop }}
              </template>
            </CountdownDate>
          </Cell>
          <Cell label="倒计时模式: 未开始" clickable is-link>
            <CountdownDate slot="value" :startTime="beginTime" :endTime="endTime">
              <template slot-scope="prop">
                {{ prop }}
              </template>
            </CountdownDate>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell, Clocker, CountdownDate, CellGroup } from "ymu";
export default {
  components: {
    Cell,
    Badge,
    Clocker,
    CountdownDate,
    CellGroup
  },
  data() {
    return {
      startTime: 0,
      endTime: 0,
      beginTime: 0,
      overTime: 0
    };
  },
  methods: {
    onChange1(counter) {
      console.log("01: on-change", counter)
    },
    onEnd1() {
      console.log("01: on-end")
    },
    onChange2(counter) {
      console.log("02: on-change", counter)
    },
    onEnd2() {
      console.log("02: on-end")
    }
  },
  mounted() {
    const startTime =
      new Date(new Date().setFullYear(2018, 11, 12)).setHours(0, 0, 0, 0) /
      1000
    const endTime =
      new Date(new Date().setFullYear(2019, 11, 12)).setHours(0, 0, 0, 0) /
      1000

    const beginTime =  new Date(new Date().setFullYear(2019, 1, 1)).setHours(0, 0, 0, 0) /
      1000
    this.endTime = endTime
    this.startTime = startTime
    this.overTime = endTime
    this.beginTime = beginTime
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
