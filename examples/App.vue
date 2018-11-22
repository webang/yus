<template>
  <div id="app">
    <button>ddd</button>
    <lessTest></lessTest>
    <Navbar v-if="$route.path !== '/'">{{ $route.meta.title }}</Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import lessTest from '@/components/less-test/less-test'

export default {
  name: 'App',
  components: {
    Navbar,
    lessTest
  }
}
</script>

<style lang="less" scoped>
@import './theme/custom.less';

button {
  background: @color;
}
</style>
