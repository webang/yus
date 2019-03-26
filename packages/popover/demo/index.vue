<template>
  <div class="demo-popover">
    <div class="ymu-doc-block__hd">默认</div>
    <div class="ymu-doc-block__bd">
      <ymu-navbar title="NavBar">
        <div slot="right">
          <!-- <ymu-popover>
            <div>菜单</div>
            <div slot="content">
              <ul class="menu">
                <li>查看订单</li>
                <li>立即登录</li>
                <li>注销登录</li>
              </ul>
            </div>
          </ymu-popover> -->
        </div>
      </ymu-navbar>
    </div>

    <div class="ymu-doc-block__hd">默认</div>
    <div class="ymu-doc-block__bd">
      <ymu-popover>
        <span>菜单</span>
        <div slot="content">
          <ul class="menu">
            <li>查看订单</li>
            <li>立即登录</li>
            <li>注销登录</li>
          </ul>
        </div>
      </ymu-popover>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n1Options: {
        title: 'NavBar',
        leftText: '返回'
      },
      n2Options: {
        title: '',
        leftText: ''
      }
    }
  },
  methods: {
    handleClickLeft () {
      console.log('handleClickLeft')
    },
    handleClickRight () {
      console.log('handleClickRight')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100px;
  line-height: 40px;
  li {
    text-align: center;
    border-bottom: 1px #ffeeff solid;
  }
}
</style>
