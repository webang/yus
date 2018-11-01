<template>
  <div id="app">
    <Navbar v-if="$route.path !== '/'">{{ $route.meta.title }}</Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
