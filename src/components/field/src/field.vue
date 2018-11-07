<template>
  <div class="ymu-field">
    <div class="ymu-field__hd">
      <slot name="header">
        <label class="ymu-field__label" v-if="label">{{ label }}</label>
      </slot>
    </div>
    <div class="ymu-field__bd">
      <input class="ymu-field__input" :placeholder="placeholder" :type="type" v-model="currentValue">
    </div>
    <div class="ymu-field__ft">
      <!-- <i class="ymu-icon ymu-icon-clear iconfont icon-clear" v-if="currentValue && clear" @click="onClear"></i> -->
      <i class="ymu-icon ymu-icon-clear" v-if="currentValue && clear" @click="onClear"></i>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-field',
  props: {
    label: String,
    placeholder: String,
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    clear: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
  },
  methods: {
    onClear () {
      this.currentValue = ''
    }
  }
}
</script>

<style lang="scss" src="./field.scss"></style>
