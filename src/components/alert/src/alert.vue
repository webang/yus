<template>
  <div class="ymu-alert">
    <Backdrop class="ymu-alert__backdrop" :value="value"></Backdrop>
    <div class="ymu-alert__content">
      <transition name="ymu-dialog">
        <div class="ymu-dialog" v-show="value">
          <div class="ymu-dialog__hd">操作提示</div>
          <div class="ymu-dialog__bd">确定咩？</div>
          <div class="ymu-dialog__ft">
            <a class="ymu-dialog__btn ymu-dialog__btn_default">取消</a>
            <a class="ymu-dialog__btn ymu-dialog__btn_primary" @click="$emit('input', false)">确定</a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Backdrop from '../../backdrop'
export default {
  name: 'ymu-alert',
  components: {
    Backdrop
  },
  props: {
    value: Boolean
  }
}
</script>

<style lang="scss" src="./alert.scss"></style>
