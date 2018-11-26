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
