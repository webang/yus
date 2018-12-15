<template>
  <div id="app">
    <NavBar v-if="$route.path !== '/'">{{ $route.meta.title }}</NavBar>
    <router-view/>
  </div>
</template>

<script>
import { NavBar } from 'ymu'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
