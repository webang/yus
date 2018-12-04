<template>
  <div class="ym-alert">
    <Ydialog class="ym-alert__content" v-model="visible" @on-click-backdrop="OnClickBackdrop">
      <div class="ym-dialog__hd" v-if="title || $slots.title">
        <slot name="title">
          <strong class="ym-dialog__title">{{ title }}</strong>
        </slot>
      </div>
      <div class="ym-dialog__bd">
        <slot name="content">
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="ym-dialog__ft">
        <slot name="footer">
          <a class="ym-dialog__btn ym-dialog__btn--primary ym-dialog__btn--clickable" @click="hide">{{ buttonText }}</a>
        </slot>
      </div>
    </Ydialog>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
import Ydialog from '../../dialog'

export default {
  name: 'ym-alert',
  components: {
    Ydialog,
    Backdrop
  },
  props: {
    value: Boolean,
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
    },
    title: String,
    content: String,
    buttonText: {
      type: String,
      default: '确定'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    OnClickBackdrop () {
      if (this.closeOnClickBackdrop) this.hide()
      this.$emit('on-click-backdrop')
    },
    hide () {
      this.visible = false
    }
  },
  created () {
    this.visible = !!this.value
  }
}
</script>

<style lang="scss" src="./alert.scss"></style>
