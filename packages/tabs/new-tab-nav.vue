<script>
export default {
  name: 'ymu-tabs__nav',
  props: {
    panels: Array
  },
  render () {
    const tabs = this._l(this.panels, (PanelVueComponent, index) => {
      const tabLabelContent = PanelVueComponent.$slots.label || PanelVueComponent.label
      return (
        <span>{ tabLabelContent }</span>
      )
    })
    return (
      <div class="ymu-tab__nav">
        { tabs }
      </div>
    )
  }
}
</script>
