<template>
  <div class="view-clokcer">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="默认展示" clickable is-link>
            <Clocker slot="value"></Clocker>
          </Cell>
          <Cell label="自定义展示" clickable is-link>
            <Clocker slot="value">
              <template slot-scope="{ date }">
                <div>
                  <span>{{ date.year }}</span>
                  <span>-</span>
                  <span>{{ date.month }}</span>
                  <span>-</span>
                  <span>{{ date.date }}</span>
                </div>
                <div>
                  <span>{{ date.hour }}</span>小时
                  <span>{{ date.minute }}</span>分钟
                  <span>{{ date.second }}</span>秒
                </div>
              </template>
            </Clocker>
          </Cell>
          <Cell label="倒计时模式" clickable is-link>
            <Clocker slot="value" :startTime="startTime" :endTime="endTime">
              <template slot-scope="{ date }"></template>
            </Clocker>
          </Cell>
          <Cell label="设置当前时间为2018-12-20" clickable is-link>
            <Clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-20'">
              <template slot-scope="{ date }"></template>
            </Clocker>
          </Cell>
          <Cell label="设置本地时间2018-12-25 0:0:0" clickable is-link>
            <Clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-25 0:0:0'">
              <template slot-scope="{ date }"></template>
            </Clocker>
          </Cell>
          <Cell label="设置本地时间为2018-12-25 00:00:00" clickable is-link>
            <Clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-25 00:00:00'">
              <template slot-scope="{ date }"></template>
            </Clocker>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge, Cell, Clocker, CellGroup } from "ymu";
export default {
  components: {
    Cell,
    Badge,
    Clocker,
    CellGroup
  },
  data() {
    return {
      startTime: 0,
      endTime: 0
    };
  },
  mounted() {
    const startTime =
      new Date(new Date().setFullYear(2018, 12, 12)).setHours(0, 0, 0, 0) /
      1000;
    const endTime =
      new Date(new Date().setFullYear(2019, 12, 12)).setHours(0, 0, 0, 0) /
      1000;

    this.endTime = endTime;
    this.startTime = startTime;
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
