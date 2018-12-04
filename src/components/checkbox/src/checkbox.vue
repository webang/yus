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
        <i class="ym-icon" :class="[{
          'ym-icon-checkbox': !isChecked,
          'icon-radio_checked': isChecked
        }]"></i>
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
    title: String,
    value: Array,
    disabled: Boolean,
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
      this.$emit('click')
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

<style lang="scss" src="./checkbox.scss"></style>
