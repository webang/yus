<template>
  <div class="page page-progress">
    <RegionSlider
      v-model="value"
      :thick="rangeThick"
      :max="max"
      :min="min"
    >
      <span slot="start">{{ min }}</span>
      <span slot="end">{{ max }}</span>
    </RegionSlider>
    <input class="form-control" :value="value" @input="setRangeValue">
  </div>
</template>

<script type="text/javascript">
import RegionSlider from '@/components/region-slider'
export default {
  components: {
    RegionSlider
  },
  data () {
    return {
      rangeThick: 2,
      max: 100,
      min: 50,
      value: [60, 80]
    }
  },
  methods: {
    setRangeValue (e) {
      this.value = e.target.value.split(',')
    }
  }
}
</script>

<style scoped>
.page {
  height: 100%;
  background-color: #fff;
}

.modal {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #ffeb3b;
}

.form-control {
  height: 40px;
  padding: 0 5px;
  margin-left: 5px;
  margin-top: 10px;
  outline: none;
  border: 1px #222 solid;
}
</style>
