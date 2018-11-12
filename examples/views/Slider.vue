<template>
  <div class="page page-progress">
    <w-range
      v-model="rangeValue"
      :thick="rangeThick"
      :max="max"
      :min="min"
    >
      <span slot="start">{{ min }}</span>
      <span slot="end">{{ max }}</span>
    </w-range>
    <input class="form-control" :value="rangeValue" @input="setRangeValue">
  </div>
</template>

<script type="text/javascript">
import wRange from '@/components/slider'
export default {
  components: {
    wRange
  },
  data () {
    return {
      rangeValue: 60,
      rangeThick: 2,
      max: 100,
      min: 50
    }
  },
  methods: {
    setRangeValue (e) {
      let num = parseInt(e.target.value)
      isNaN(num) && (num = 0)
      this.rangeValue = num
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
