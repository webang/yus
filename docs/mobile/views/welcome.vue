<template>
  <div class="demo-welcome">
    <div class="floor-cells">
      <yus-accordion :value="menu[0]['groupName']" accordion>
        <yus-accordion-item
          class="item"
          :header="item.groupName"
          v-for="(item, index) in menu"
          :key="index"
          :name="item.groupName"
        >
          <yus-cell
            v-for="(item, index) in item.list"
            :key="index"
            :title="uppercamelize(item.name) + ' ' + item.cName"
            is-link
            @click="switchPage(item.name)"
          />
        </yus-accordion-item>
      </yus-accordion>
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
}

.item {
  margin-bottom: 10px;
}

.floor-cells {
  margin-top: 50px;
}
</style>
