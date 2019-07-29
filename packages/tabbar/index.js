
import { use } from '../utils/use'
const [useName, bem] = use('tabbar')

export default useName({
  props: {
    value: {
      type: Number,
      default: 0
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const cls = bem([{
      fixed: this.fixed
    }])
    return (
      <div class={cls}>
        { this.$slots.default }
      </div>
    )
  },
})