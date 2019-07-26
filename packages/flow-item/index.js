import { use } from '../utils/use';
import findParent from '../mixins/findParent';
import Icon from '../icon';
import Flow from '../flow';

const [useName, bem] = use('flow-item');

export default useName({
  mixins: [findParent],
  components: {
    Icon
  },
  computed: {
    index () {
      return this.parent.$children.indexOf(this);
    },
    activeIndex () {
      return this.parent.activeIndex;
    },
    direction () {
      return this.parent.direction;
    },
    isFinish () {
      return this.index < this.activeIndex;
    },
    isProcess () {
      return this.index === this.activeIndex;
    },
    isWaiting () {
      return this.index > this.activeIndex;
    },
    status () {
      if (this.index < this.activeIndex) {
        return 'finish';
      } else if (this.index === this.activeIndex) {
        return 'process';
      } else {
        return 'waiting';
      }
    },
    finishIconProp () {
      return this.parent.finishIcon;
    },
    processIconProp () {
      return this.parent.processIcon;
    },
    waitingIconProp () {
      return this.parent.waitingIcon;
    }
  },
  created() {
    this.findParent(Flow.name);
  },
  render() {
    const cls = bem([
      this.status,
      this.direction
    ]);

    let icon = null;

    if (this.isFinish) {
      if (this.finishIconProp) {
        icon = <img src={ this.finishIconProp }/>
      } else {
        icon = <Icon name="ios-checkmark-circle"/>
      }
    } else if (this.isProcess) {
      if (this.processIconProp) {
        icon = <img src={ this.processIconProp }/>
      } else {
        icon = <Icon name="ios-checkmark-circle"/>
      }
    } else {
      if (this.waitingIconProp) {
        icon = <img src={ this.waitingIconProp }/>
      } else {
        icon = <Icon name="ios-radio-button-off"/>
      } 
    }

    return (
      <div class={ cls }>
        <div class= { bem('head') }>
          <div class={ bem('icon') }>
            { this.$slots.icon ? this.$slots.icon : icon }
          </div>
          <div class={ bem('line') }></div>
        </div>
        <div class={ bem('main') }>
          { this.$slots.default }
        </div>
      </div>
    );
  }
});
