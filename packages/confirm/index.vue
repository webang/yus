<template>
  <div class="ymu-confirm">
    <Ydialog v-model="value" @on-click-backdrop="OnClickBackdrop">
      <div class="ymu-dialog__hd" v-if="title || $slots.title">
        <slot name="title">
          <span class="ymu-dialog__title">{{ title }}</span>
        </slot>
      </div>
      <div class="ymu-dialog__bd">
        <template v-if="showInput">
          <input type="text" class="ymu-confirm__input" :placeholder="placeholder" v-model="currentInputValue">
        </template>
        <template v-else>
          <slot>
            <div v-html="content"></div>
          </slot>
        </template>
      </div>
      <div class="ymu-dialog__ft">
        <slot name="footer">
          <a
            class="ymu-dialog__btn ymu-dialog__btn--clickable"
            @click="onCancleClick"
            v-if="showCancel"
            v-text="cancelText"></a>
          <a
            class="ymu-dialog__btn ymu-dialog__btn--primary ymu-dialog__btn--clickable"
            @click="onConfirmClick"
            v-if="showConfirm"
            v-text="confirmText"></a>
        </slot>
      </div>
    </Ydialog>
  </div>
</template>

<script>
import Backdrop from '../backdrop'
import Ydialog from '../dialog'

export default {
  name: 'ymu-confirm',
  components: {
    Ydialog,
    Backdrop
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    showInput: Boolean,
    placeholder: String,
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
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    inputValue: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      currentInputValue: ''
    }
  },
  watch: {
    inputValue (val) {
      this.currentInputValue = val
    },
    currentInputValue (val) {
      this.$emit('on-input-change', val)
    }
  },
  methods: {
    OnClickBackdrop () {
      if (this.closeOnClickBackdrop) this.hide()
      this.$emit('on-click-backdrop')
    },
    hide () {
      this.$emit('input', false)
    },
    onCancleClick () {
      this.$emit('on-cancel')
    },
    onConfirmClick () {
      this.$emit('on-confirm')
    }
  },
  created () {
    if (typeof this.inputValue !== 'undefined') {
      this.currentInputValue = this.inputValue
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
