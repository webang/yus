import { use } from '../utils/use';

const [useName, bem] = use('sticky');

export default useName({
  data() {

  },

  render() {
    return (
      <div class={bem()}>

      </div>
    )
  }
})