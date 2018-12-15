<template>
  <div class="page page-progress">
    <div class="ym-doc-block__title">基础用法({{ d1.value }})</div>
    <div class="ym-doc-block__bd">
      <Slider
        v-model="d1.value"
        :track-height="d1.trackHeight"
        :max="d1.max"
        :min="d1.min"
      />
    </div>

    <div class="ym-doc-block__title">禁用状态({{ d2.value }})</div>
    <div class="ym-doc-block__bd">
      <Slider
        v-model="d2.value"
        :track-height="d2.trackHeight"
        :max="d2.max"
        :min="d2.min"
        :disabled="d2.disabled"
      />
    </div>

    <div class="ym-doc-block__title">设置start和end({{ d3.value }})</div>
    <div class="ym-doc-block__bd">
      <Slider
        v-model="d3.value"
        :track-height="d3.trackHeight"
        :max="d3.max"
        :min="d3.min"
        :disabled="d3.disabled"
      >
        <span class="number" slot="start">{{ d3.min }}</span>
        <span class="number" slot="end">{{ d3.max }}</span>
      </Slider>
    </div>

    <div class="ym-doc-block__title">设置区间({{ d4.value }})</div>
    <div class="ym-doc-block__bd">
      <Slider
        v-model="d4.value"
        :track-height="d4.trackHeight"
        :max="d4.max"
        :min="d4.min"
        :disabled="d4.disabled"
      >
        <span class="number" slot="start">{{ d4.min }}</span>
        <span class="number" slot="end">{{ d4.max }}</span>
      </Slider>
    </div>

    <div class="ym-doc-block__title">设置背景颜色({{ d5.value }})</div>
    <div class="ym-doc-block__bd">
      <Slider
        v-model="d5.value"
        :track-height="d5.trackHeight"
        :max="d5.max"
        :min="d5.min"
        :disabled="d5.disabled"
        :trackColor="d5.trackColor"
        :thumbColor="d5.thumbColor"
        :runwayColor="d5.runwayColor"
      >
        <span class="number" slot="start">{{ d5.min }}</span>
        <span class="number" slot="end">{{ d5.max }}</span>
      </Slider>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Slider } from 'ymu'
export default {
  components: {
    Slider
  },
  data () {
    return {
      d1: {
        min: 50,
        max: 100,
        value: 60,
        trackHeight: 2,
        disabled: false
      },
      d2: {
        min: 50,
        max: 100,
        value: 70,
        trackHeight: 2,
        disabled: true
      },
      d3: {
        min: 50,
        max: 100,
        value: 80,
        trackHeight: 2,
        disabled: false
      },
      d4: {
        min: 100,
        max: 200,
        value: 160,
        trackHeight: 2,
        disabled: false
      },
      d5: {
        min: 100,
        max: 200,
        value: 160,
        trackHeight: 2,
        disabled: false,
        trackColor: '#9c27b0',
        thumbColor: 'blue',
        runwayColor: 'red'
      }
    }
  },
  methods: {
    setRangeValue (e) {
      let num = parseInt(e.target.value)
      isNaN(num) && (num = 0)
      this.rangeValue1 = num
    }
  }
}
</script>

<style scoped>
.form-control {
  height: 40px;
  padding: 0 5px;
  margin-left: 5px;
  margin-top: 10px;
  outline: none;
  border: 1px #222 solid;
}
.ym-doc-content {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
