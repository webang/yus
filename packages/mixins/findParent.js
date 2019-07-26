/**
 * 根据组件名查找最近父级组件
 */
export default {
  data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent(name) {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }
        parent = parent.$parent;
      }
    }
  }
};
