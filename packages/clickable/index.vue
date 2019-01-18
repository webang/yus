<script>
export default {
  name: 'ymu-clickable',
  props: {
    block: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      touchStarted: false,
      touchEnded: false
    }
  },
  render () {
    // const block = this.block
    // const Block = <div>{ this.$slots.default }</div>

    return (
      <div
        ClassName={['touchStarted', 'touchStarted2']}
        onClick={
          (event) => {
            this.$emit('click')
          }
        }
        onTouchstart={
          (event) => {
            console.log(event)
          }
        }
      >hello world</div>
    )
  }
}
</script>

<style lang="scss">

</style>
