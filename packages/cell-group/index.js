
import { use } from '../utils/use'
const [useName, useBem] = use('cell-group')

export default useName({
  props: {
    title: String
  },
  render() {
    return (
      <div class="ymu-cell-group">
        <div class="ymu-cell-group__bd">
          {this.$slots.default}
        </div>
      </div>
    )
  },
})