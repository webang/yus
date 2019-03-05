<template>
  <div id="app">
    <NavBar v-if="showNavBar">{{ $route.meta.title }}</NavBar>
    <router-view/>
  </div>
</template>

<script>
import { NavBar } from 'ymu'

export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    showNavBar () {
      return this.$route.path !== '/';
    }
  }
}
</script>
