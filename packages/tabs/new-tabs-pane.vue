<script>
export default {
  name: 'ymu-tabs--panel',
  props: {
    label: [String, Number]
  },
  render () {
    const that = this
    return (
      <div class="ymu-tabs-panel">
        { that.$slots.default }
      </div>
    )
  }
}
</script>
