<template>
  <div class="page-backtop">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <p>hello world, 我是编号{{ index }}</p>
      </li>
    </ul>
    <Backtop></Backtop>
  </div>
</template>

<script>
import Backtop from '@/components/backtop';
export default {
  components: {
    Backtop
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    for (let index = 0; index < 50; index++) {
      this.list.push(index);
    }
  }
}
</script>
