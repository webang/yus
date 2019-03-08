<template>
  <div class="page-tabbar">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础用法</div>
      <div class="ymu-doc-block__content">
        <ymu-tabbar v-model="activeIndex" @on-click-item="handleClick">
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/home.svg')"
            :activeIcon="require('../../../examples/assets/img/home_active.svg')"
            title="首页"
            color="#888"
            activeColor="red"
            :index="0"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/manage.svg')"
            :activeIcon="require('../../../examples/assets/img/manage_active.svg')"
            title="商品"
            color="#888"
            activeColor="red"
            :index="1"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/cart.svg')"
            :activeIcon="require('../../../examples/assets/img/cart_active.svg')"
            title="活动"
            color="#888"
            activeColor="red"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/account.svg')"
            :activeIcon="require('../../../examples/assets/img/account_active.svg')"
            title="我的"
            color="#888"
            activeColor="red"
          />
        </ymu-tabbar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">显示圆点</div>
      <div class="ymu-doc-block__content">
        <ymu-tabbar v-model="activeIndex" @on-click-item="handleClick">
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/home.svg')"
            :activeIcon="require('../../../examples/assets/img/home_active.svg')"
            title="首页"
            :dot="true"
          >
          </ymu-tabbar-item>
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/manage.svg')"
            :activeIcon="require('../../../examples/assets/img/manage_active.svg')"
            title="商品"
            :dot="true"
          ></ymu-tabbar-item>
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/cart.svg')"
            :activeIcon="require('../../../examples/assets/img/cart_active.svg')"
            title="活动"
            :dot="true"
          ></ymu-tabbar-item>
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/account.svg')"
            :activeIcon="require('../../../examples/assets/img/account_active.svg')"
            title="我的"
            :dot="true"
          ></ymu-tabbar-item>
        </ymu-tabbar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">显示徽章</div>
      <div class="ymu-doc-block__content">
        <ymu-tabbar v-model="activeIndex" @on-click-item="handleClick">
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/home.svg')"
            :activeIcon="require('../../../examples/assets/img/home_active.svg')"
            title="首页"
            badge="5"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/manage.svg')"
            :activeIcon="require('../../../examples/assets/img/manage_active.svg')"
            title="商品"
            badge="5"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/cart.svg')"
            :activeIcon="require('../../../examples/assets/img/cart_active.svg')"
            title="活动"
            badge="10"
          />
          <ymu-tabbar-item
            :icon="require('../../../examples/assets/img/account.svg')"
            :activeIcon="require('../../../examples/assets/img/account_active.svg')"
            title="我的"
            badge="60"
          />
        </ymu-tabbar>
      </div>
    </div>

    <div class="ymu-doc-block__content">
      <ymu-tabbar v-model="activeIndex" @on-click-item="handleClick" :fixed="true">
        <ymu-tabbar-item
          :icon="require('../../../examples/assets/img/home.svg')"
          :activeIcon="require('../../../examples/assets/img/home_active.svg')"
          title="首页"
        />
        <ymu-tabbar-item
          :icon="require('../../../examples/assets/img/manage.svg')"
          :activeIcon="require('../../../examples/assets/img/manage_active.svg')"
          title="商品"
        />
        <ymu-tabbar-item
          :icon="require('../../../examples/assets/img/cart.svg')"
          :activeIcon="require('../../../examples/assets/img/cart_active.svg')"
          title="活动"
        />
        <ymu-tabbar-item
          :icon="require('../../../examples/assets/img/account.svg')"
          :activeIcon="require('../../../examples/assets/img/account_active.svg')"
          title="我的"
          badge="60"
        />
      </ymu-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 1
    }
  },
  methods: {
    handleClick (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss">

</style>
