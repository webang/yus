import { use } from '../utils/use';
import spinner from '../spinner';

const [useName, bem] = use('button');

export default useName({
  components: {
    spinner
  },
  props: {
    type: {
      type: String,
      default: 'light' // light primary info warn error
    },
    size: {
      type: String,
      default: 'normal' // large normal small mini
    },
    text: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: 'white'
    },
    loadingSize: {
      type: String,
      default: '20px'
    },
    loadingType: {
      type: String,
      default: 'crescent'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  },
  render() {
    const cls = bem([
      this.size,
      this.type,
      {
        block: this.block,
        plain: this.plain,
        round: this.round,
        radius: this.radius,
        disabled: this.disabled
      }
    ]);

    const text = (
      <span class={bem('text')}>
        {this.$slots.default ? this.$slots.default : this.text}
      </span>
    );

    const loadingStl = {
      width: this.loadingSize,
      height: this.loadingSize
    };

    const loading = (
      <spinner
        class={bem('loading')}
        color={this.loadingColor}
        style={loadingStl}
        type={this.loadingType}
      />
    );

    const content = [];

    if (this.loading) {
      content.push(loading);
    }
    content.push(text);

    return (
      <button class={cls} disabled={this.disabled} onClick={this.handleClick}>
        {content}
      </button>
    );
  }
});
