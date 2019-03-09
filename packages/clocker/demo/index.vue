<template>
  <div class="demo-clocker">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基本用法</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="默认展示" clickable is-link>
            <ymu-clocker slot="value"/>
          </ymu-cell>
          <ymu-cell label="自定义展示" clickable is-link>
            <ymu-clocker slot="value">
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
            </ymu-clocker>
          </ymu-cell>
          <ymu-cell label="倒计时模式" clickable is-link>
            <ymu-clocker slot="value" :startTime="startTime" :endTime="endTime">
              <template slot-scope="{ date }"></template>
            </ymu-clocker>
          </ymu-cell>
          <ymu-cell label="设置当前时间为2018-12-20" clickable is-link>
            <ymu-clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-20'">
              <template slot-scope="{ date }"></template>
            </ymu-clocker>
          </ymu-cell>
          <ymu-cell label="设置本地时间2018-12-25 0:0:0" clickable is-link>
            <ymu-clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-25 0:0:0'">
              <template slot-scope="{ date }"></template>
            </ymu-clocker>
          </ymu-cell>
          <ymu-cell label="设置本地时间为2018-12-25 00:00:00" clickable is-link>
            <ymu-clocker slot="value" :startTime="startTime" :endTime="endTime" :time="'2018-12-25 00:00:00'">
              <template slot-scope="{ date }"></template>
            </ymu-clocker>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: 0,
      endTime: 0
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