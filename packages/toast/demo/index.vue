<template>
  <div class="demo-toast">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">基础用法-position</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="middle">
            <ymu-button slot="value" @click="show" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
          <ymu-cell label="top">
            <ymu-button slot="value" @click="show2" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
          <ymu-cell label="bottom">
            <ymu-button slot="value" @click="show3" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">设置-type</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="success">
            <ymu-button slot="value" @click="show4" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
          <ymu-cell label="fail">
            <ymu-button slot="value" @click="show5" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
          <ymu-cell label="warn">
            <ymu-button slot="value" @click="show6" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
          <ymu-cell label="error">
            <ymu-button slot="value" @click="show7" size="mini" plain type="primary">显示</ymu-button>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__hd">不自己关闭-autoClose</div>
      <div class="ymu-doc-block__bd">
        <ymu-cell-group>
          <ymu-cell label="false">
            <ymu-button slot="value" size="mini" type="primary" plain @click="show8">切换</ymu-button>
          </ymu-cell>
        </ymu-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../index'
export default {
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
