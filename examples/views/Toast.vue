<template>
  <div class="page-toast">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法-position</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="middle">
            <span slot="value" @click="show">显示</span>
          </Cell>
          <Cell label="top">
            <span slot="value" @click="show2">显示</span>
          </Cell>
          <Cell label="bottom">
            <span slot="value" @click="show3">显示</span>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">设置-type</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="success">
            <span slot="value" @click="show4">显示</span>
          </Cell>
          <Cell label="fail">
            <span slot="value" @click="show5">显示</span>
          </Cell>
          <Cell label="warn">
            <span slot="value" @click="show6">显示</span>
          </Cell>
          <Cell label="error">
            <span slot="value" @click="show7">显示</span>
          </Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">不自己关闭-autoClose</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell label="false">
            <Button slot="value" size="mini" type="primary" plain @click="show8">切换</Button>
          </Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import Cell from '@/components/cell'
import CellGroup from '@/components/cell-group'
import Button from '@/components/button'

export default {
  components: {
    Cell,
    Button,
    CellGroup
  },
  data () {
    return {
      demo1: {
        position: 'middle'
      }
    }
  },
  methods: {
    show () {
      Toast({
        message: '请勿重复提交订单'
      })
    },
    show2 () {
      Toast({
        position: 'top',
        message: '请勿重复提交订单'
      })
    },
    show3 () {
      Toast({
        position: 'bottom',
        message: '请勿重复提交订单'
      })
    },
    show4 () {
      Toast({
        type: 'success',
        message: '操作成功'
      })
    },
    show5 () {
      Toast({
        type: 'fail',
        message: '操作失败'
      })
    },
    show6 () {
      Toast({
        type: 'warn',
        message: '操作失败'
      })
    },
    show7 () {
      Toast({
        type: 'error',
        message: '服务器出错'
      })
    },
    show8 () {
      if (this.toast) {
        Toast.clear(this.toast)
        this.toast = null
        return
      }
      this.toast = Toast({
        type: 'error',
        message: '服务器出错',
        autoClose: false
      })
    }
  }
}
</script>
