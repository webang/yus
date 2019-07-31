import { use } from '../utils/use';

const [useName, bem] = use('spinner');

export default useName({
  props: {
    type: {
      type: String,
      default: 'crescent' // crescent
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  render() {
    const cls = bem([this.type]);
    return (
      <div class={cls}>
        <svg viewBox="0 0 64 64" style="animation-duration: 750ms;">
          <circle transform="translate(32,32)" r="26" style={{ color: this.color }} />
        </svg>
      </div>
    );
  }
});
