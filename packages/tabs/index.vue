<template>
  <div class="ymu-tabs">
    <div class="ymu-tabs-wrap">
      <slot></slot>
      <div class="ymu-tabs-line" :style="lineStyle"></div>
    </div>
    <newTabs>
      <newTabsPane label="测试">111</newTabsPane>
      <newTabsPane label="测验">111</newTabsPane>
    </newTabs>
  </div>
</template>

<script>
import newTabs from './new-tabs'
import newTabsPane from './new-tabs-pane'

export default {
  name: 'ymu-tabs',
  components: {
    newTabs,
    newTabsPane
  },
  props: {
    value: Number,
    disabled: Boolean,
    sticky: Boolean,
    swipeable: Boolean,
    animate: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      tabList: [],
      lineStyle: {}
    }
  },
  computed: {
  },
  watch: {
    value () {
      this.caclLineStyle()
    }
  },
  methods: {
    caclLineStyle () {
      const childrens = this.$children.filter(VueComponent => {
        return VueComponent.$vnode.componentOptions.Ctor.options.name === 'ymu-tab'
      })
      const length = childrens.length
      this.lineStyle = {
        width: (1 / length * 100) + '%',
        left: this.value / length * 100 + '%'
      }
    },
    toggleValue (index) {
      this.$emit('input', index)
    }
  },
  mounted () {
    this.caclLineStyle()
  }
}
</script>

index.scss
