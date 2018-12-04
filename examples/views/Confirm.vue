<template>
  <div class="page-alert">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基本用法</div>
      <div class="ym-doc-block__content list">
        <CellGroup>
          <Cell label="基本用法">
            <button slot="value" @click="demo1.show=!demo1.show">切换</button>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <Confirm
      v-model="demo1.show"
      :title="demo1.title"
      @on-cancle="onCancle"
      @on-confirm="onConfirm"
    >
      <p>确认要退出登录吗？</p>
    </Confirm>
  </div>
</template>

<script>
import Alert from '@/components/alert'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Confirm from '@/components/confirm'
import Toast from '@/components/toast'

export default {
  components: {
    Alert,
    Cell,
    CellGroup,
    Confirm
  },
  data () {
    return {
      demo1: {
        show: false,
        title: '系统提示',
        showCancel: true
      }
    }
  },
  methods: {
    onCancle () {
      Toast({
        message: '您选择了取消'
      })
      this.demo1.show = false
    },
    onConfirm () {
      Toast({
        message: '您选择了确定'
      })
      this.demo1.show = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
