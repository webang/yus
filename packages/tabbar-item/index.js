import Tabbar from '../tabbar'
import { use } from '../utils/use'
import findParentMixin from '../mixins/findParent'

const [useName, bem] = use('tabbar-item')

export default useName({
  mixins: [findParentMixin],
  props: {
    title: String,
    icon: String,
    dot: Boolean,
    color: String,
    activeIcon: String,
    activeColor: String,
    badge: [Number, String]
  },
  computed: {
    activeIndex() {
      return this.parent.value
    },
    currentIndex() {
      return this.parent.$children.indexOf(this)
    },
    isActive() {
      return this.activeIndex === this.currentIndex
    },
    curStyle() {
      return {
        color: this.isActive ? this.activeColor : this.color
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
      this.$parent.$emit('on-click-item', this.currentIndex)
    }
  },
  created() {
    this.findParent(Tabbar.name)
  },
  render(h) {
    // 徽章
    const badge = this.badge ?
      (<span class={bem('badge')}>
        <slot name="badge">{{ badge }}</slot>
      </span>) : null;

    // 图标
    let defaultIcon = <img class="yus-tabbar-icon" src={this.isActive ? this.activeIcon : this.icon} />;
    let icon = this.$slots.icon || defaultIcon;

    // 标题
    let title = (
      <div class="yus-tabbar-item__text">
        {
          this.$slots.title ? this.$slots.title : this.title
        }
      </div>
    )

    return (
      <div
        class={bem({
          active: this.isActive
        })}
        v-on: click={this.handleClick}
        style={this.curStyle}
      >
        <div class="yus-tabbar-item__icon">
          {icon}
        </div>
        {title}
      </div >
    )
  },
})