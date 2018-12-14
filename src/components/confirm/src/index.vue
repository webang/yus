<template>
  <div class="ym-confirm">
    <Ydialog v-model="visible" @on-click-backdrop="OnClickBackdrop">
      <div class="ym-dialog__hd" v-if="title || $slots.title">
        <slot name="title">
          <span class="ym-dialog__title">{{ title }}</span>
        </slot>
      </div>
      <div class="ym-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="ym-dialog__ft">
        <slot name="footer">
          <a
            class="ym-dialog__btn ym-dialog__btn--clickable"
            @click="onCancleClick"
            v-text="cancelText"></a>
          <a
            class="ym-dialog__btn ym-dialog__btn--primary ym-dialog__btn--clickable"
            @click="onConfirmClick"
            v-text="confirmText"></a>
        </slot>
      </div>
    </Ydialog>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
import Ydialog from '../../dialog'

export default {
  name: 'ym-confirm',
  components: {
    Ydialog,
    Backdrop
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true
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
    },
    onCancleClick () {
      this.$emit('on-cancel')
    },
    onConfirmClick () {
      this.$emit('on-confirm')
    }
  },
  created () {
    this.visible = !!this.value
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
