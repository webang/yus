<template>
  <div class="demo-welcome">
    <div class="floor-cells">
      <yus-collapse-item :header="item.groupName" v-for="(item, index) in menu" :key="index">
        <yus-cell
          v-for="(item, index) in item.list"
          :key="index"
          :title="uppercamelize(item.name) + ' ' + item.cName"
          is-link
          @click="switchPage(item.name)"
        />
      </yus-collapse-item>
    </div>
  </div>
</template>

<script>
import menu from '../../menu-component';
const uppercamelize = require('uppercamelcase');

export default {
  data() {
    return {
      menu
    };
  },
  methods: {
    uppercamelize,
    switchPage(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-welcome {
  padding: 12px;
  /deep/ .yus-collapse-item__content {
    padding: 0;
  }
  /deep/ .yus-collapse-item {
    margin-bottom: 10px;
  }
}

.floor-cells {
  margin-top: 50px;
}
</style>
