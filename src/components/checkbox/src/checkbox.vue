<template>
  <div
    class="ym-checkbox"
    :class="[{
      'ym-checkbox--checked': isChecked,
      'ym-checkbox--disabled': disabled
    }]"
    @click="toggleValue"
  >
    <div class="ym-checkbox__icon">
      <slot name="icon">
        <i :class="[{'iconfont icon-radio_checked':isChecked, 'ym-icon-checkbox': !isChecked}]"></i>
      </slot>
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
    name: String,
    disabled: Boolean,
    title: String,
    value: Array,
    'checked-color': {
      type: String,
      default: ''
    }
  },
  computed: {
    isChecked: {
      get () {
        return this.value.indexOf(this.name) !== -1
      },
      set (val) {
        this.updateParentNodeValue(val)
      }
    }
  },
  methods: {
    toggleValue () {
      if (this.disabled) return
      this.isChecked = !this.isChecked
    },
    updateParentNodeValue (val) {
      const copyValue = this.value.slice()
      if (val) {
        copyValue.push(this.name)
      } else {
        const index = copyValue.indexOf(this.name)
        copyValue.splice(index, 1)
      }
      this.$emit('input', copyValue)
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

.ym-checkbox__label {
  margin-left: 10px;
  font-size: 14px;
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
