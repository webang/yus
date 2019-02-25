<template>
  <div id="app">
    <NavBar v-if="$route.name">{{ $route.meta.title }}</NavBar>
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
  mounted () {
    console.log(this.$route)
  }
}
</script>
