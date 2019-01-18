<template>
  <div class="ymu-alert">
    <Ydialog
      class="ymu-alert__content"
      v-model="visible"
      @on-click-backdrop="OnClickBackdrop"
    >
      <div class="ymu-dialog__hd" v-if="title || $slots.title">
        <slot name="title">
          <strong class="ymu-dialog__title">{{ title }}</strong>
        </slot>
      </div>
      <div class="ymu-dialog__bd">
        <slot name="content">
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="ymu-dialog__ft">
        <slot name="footer">
          <a
            class="ymu-dialog__btn ymu-dialog__btn--primary ymu-dialog__btn--clickable"
            @click="hide"
          >{{ buttonText }}</a>
        </slot>
      </div>
    </Ydialog>
  </div>
</template>

<script>
import Backdrop from '../backdrop'
import Ydialog from '../dialog'

export default {
  name: 'ymu-alert',
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

<style lang="scss" src="./index.scss"></style>
