<script>
import TabNav from './new-tab-nav'

export default {
  name: 'ymu-tabs',
  components: {
    TabNav
  },
  props: {
    activeName: [String, Number]
  },
  data () {
    return {
      panels: []
    }
  },
  methods: {
    calcPanels () {
      const list = this.$slots.default
      const panelSlots = list.filter(vNode => {
        return vNode.tag && vNode.componentOptions && (vNode.componentOptions.Ctor.options.name === 'ymu-tabs--panel')
      })
      const panels = panelSlots.map((item) => item.componentInstance)
      this.panels = panels
    }
  },
  render () {
    const that = this
    const navData = {
      props: {
        panels: that.panels
      },
      ref: 'nav'
    };
    const panels = (
      <div class="ymu-tabs__content">
        {this.$slots.default}
      </div>
    );
    return (
      <div class="ymu-tabs">
        <tab-nav { ...navData }></tab-nav>
        { panels }
      </div>
    )
  },
  mounted () {
    this.calcPanels()
  }
}
</script>
