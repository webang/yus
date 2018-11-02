<!-- <template>
  <div class="ymu-step-item" :class="{['ymu-step-item--'+status]: status}">
    <div class="ymu-step__title">
      <slot></slot>
    </div>
    <div class="ymu-step-item__circle-wrap">
      <i class="iconfont icon-radio_checked" v-if="activeIndex > index"></i>
      <i class="ymu-step-item__circle" v-else></i>
    </div>
    <div class="ymu-step-item__line"></div>
  </div>
</template>

<script>
export default {
  name: 'ymu-step-item',
  computed: {
    status () {
      if (this.index < this.activeIndex) {
        return 'finish'
      } else if (this.index === this.activeIndex) {
        return 'process'
      }
    },
    index () {
      return this.$parent.$children.indexOf(this)
    },
    activeIndex () {
      return this.$parent.activeIndex
    }
  }
}
</script>

<style lang="scss" src="./step-item.scss"></style>
 -->

 <template>
  <div
    class="ymu-step"
    :class="[
      'ymu-step--'+direction,
      {['ymu-step--'+status]: status}
    ]"
  >
    <div class="ymu-step-head">
      <div class="ymu-step__line">
        <div class="ymu-step__line-inner"></div>
      </div>
      <div class="ymu-step__icon">
        <div class="ymu-step__icon-inner"></div>
      </div>
    </div>
    <div class="ymu-step-main">
      <slot>
        <div class="ymu-step__title"></div>
        <div class="ymu-step__ddescription"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ymu-step-item',
  computed: {
    status () {
      if (this.index < this.activeIndex) {
        return 'finish'
      } else if (this.index === this.activeIndex) {
        return 'process'
      }
    },
    direction () {
      return this.$parent.direction
    },
    index () {
      return this.$parent.$children.indexOf(this)
    },
    activeIndex () {
      return this.$parent.activeIndex
    }
  }
}
</script>

<style lang="scss" src="./step-item.scss"></style>
