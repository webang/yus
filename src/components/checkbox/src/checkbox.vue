<template>
  <div class="ym-checkbox" :class="[{ 'ym-checkbox--disabled': disabled }]">
    <div class="ym-checkbox__icon">
      <slot name="icon">
        <i :class="[{'iconfont icon-radio_checked':value,'ym-icon-checkbox': !value}]"></i>
      </slot>
    </div>
    <div class="ym-checkbox__input">
      <input class="ym-checkbox__original" type="checkbox" :value="name" v-model="label">
    </div>
    <div class="ym-checkbox__label">
      <slot>
        <span class="ym-checkbox__text" v-text="title"></span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ym-checkbox',
  props: {
    label: Array,
    name: String,
    value: Boolean,
    disabled: Boolean,
    title: String,
    'checked-color': {
      type: String,
      default: ''
    }
  },
  watch: {
    label (val) {
      this.currentLabel = val
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      this.$emit('input', !this.value)
    }
  },
  data () {
    return {
      currentLabel: []
    }
  },
  created () {
    if (this.label) {
      this.currentLabel = this.label
    }
  }
}
</script>

<style lang="scss">
.ym-checkbox {
  display: flex;
  align-items: center;
  line-height: 24px;
  .ym-icon-checkbox {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .icon-radio_checked {
    font-size: 20px;
    color: #38f;
  }
}

input:checked {
  display: none;
  background-color: red;
}

.ym-checkbox__label {
  margin-left: 10px;
  color: inherit;
}

.ym-checkbox__icon {
  display: flex;
  align-items: center;
}

.ym-checkbox--disabled {
  color: #ccc;
  .ym-icon-checkbox {
    border-color: #ccc;
  }
  .icon-radio_checked {
    color: #ccc;
  }
}
</style>
