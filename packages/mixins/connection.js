export function ChildrenMixin(parentName) {
  return {
    data() {
      return {
        parent: null
      };
    },

    computed: {
      index() {
        return this.parent.children.indexOf(this);
      }
    },

    created() {
      this.findParent(parentName);
      if (this.parent) {
        this.parent.children.push(this);
      }
    },

    destoryed() {
      if (this.parent) {
        this.parent.children = this.parent.children.filter(vNode => vNode !== this);
      }
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
}

export function ParentMixin() {
  return {
    data() {
      return {
        children: []
      };
    }
  };
}
