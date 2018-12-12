<template>
  <div class="page-tabbar">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础用法</div>
      <div class="ym-doc-block__content">
        <Tabbar v-model="activeIndex" @on-click-item="handleClick">
          <TabbarItem
            :icon="require('../assets/img/home.svg')"
            :selectedIcon="require('../assets/img/home_active.svg')"
            title="首页"
            color="#888"
            selectedColor="red"
          >
          </TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/manage.svg')"
            :selectedIcon="require('../assets/img/manage_active.svg')"
            title="商品"
            color="#888"
            selectedColor="red"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/cart.svg')"
            :selectedIcon="require('../assets/img/cart_active.svg')"
            title="活动"
            color="#888"
            selectedColor="red"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/account.svg')"
            :selectedIcon="require('../assets/img/account_active.svg')"
            title="我的"
            color="#888"
            selectedColor="red"
          ></TabbarItem>
        </Tabbar>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">显示圆点</div>
      <div class="ym-doc-block__content">
        <Tabbar v-model="activeIndex" @on-click-item="handleClick">
          <TabbarItem
            :icon="require('../assets/img/home.svg')"
            :selectedIcon="require('../assets/img/home_active.svg')"
            title="首页"
            :dot="true"
          >
          </TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/manage.svg')"
            :selectedIcon="require('../assets/img/manage_active.svg')"
            title="商品"
            :dot="true"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/cart.svg')"
            :selectedIcon="require('../assets/img/cart_active.svg')"
            title="活动"
            :dot="true"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/account.svg')"
            :selectedIcon="require('../assets/img/account_active.svg')"
            title="我的"
            :dot="true"
          ></TabbarItem>
        </Tabbar>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">显示徽章</div>
      <div class="ym-doc-block__content">
        <Tabbar v-model="activeIndex" @on-click-item="handleClick">
          <TabbarItem
            :icon="require('../assets/img/home.svg')"
            :selectedIcon="require('../assets/img/home_active.svg')"
            title="首页"
            badge="5"
          >
          </TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/manage.svg')"
            :selectedIcon="require('../assets/img/manage_active.svg')"
            title="商品"
            badge="5"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/cart.svg')"
            :selectedIcon="require('../assets/img/cart_active.svg')"
            title="活动"
            badge="10"
          ></TabbarItem>
          <TabbarItem
            :icon="require('../assets/img/account.svg')"
            :selectedIcon="require('../assets/img/account_active.svg')"
            title="我的"
            badge="60"
          ></TabbarItem>
        </Tabbar>
      </div>
    </div>

    <div class="ym-doc-block__content">
      <Tabbar v-model="activeIndex" @on-click-item="handleClick" :fixed="true">
        <TabbarItem
          :icon="require('../assets/img/home.svg')"
          :selectedIcon="require('../assets/img/home_active.svg')"
          title="首页"
        >
        </TabbarItem>
        <TabbarItem
          :icon="require('../assets/img/manage.svg')"
          :selectedIcon="require('../assets/img/manage_active.svg')"
          title="商品"
        ></TabbarItem>
        <TabbarItem
          :icon="require('../assets/img/cart.svg')"
          :selectedIcon="require('../assets/img/cart_active.svg')"
          title="活动"
        ></TabbarItem>
        <TabbarItem
          :icon="require('../assets/img/account.svg')"
          :selectedIcon="require('../assets/img/account_active.svg')"
          title="我的"
          badge="60"
        ></TabbarItem>
      </Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import TabbarItem from '@/components/tabbar-item'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      activeIndex: 1
    }
  },
  methods: {
    handleClick (index) {
      console.log(index)
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss">

</style>
