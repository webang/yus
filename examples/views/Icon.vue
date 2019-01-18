<template>
  <div class="view-icon">
    <div class="ymu-doc-block__title">点击复制</div>
    <div class="ymu-doc-block__bd">
      <div class="ymu-icon" v-for="(item, index) in iconList" :key="index" :data-clipboard-text="item">
        <Icon :name="item"></Icon>
        <!-- <p class="ymu-icon__name">{{ item }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Toast } from 'ymu'
import ClipboardJS from 'clipboard'
const iconList = ["ios-add-circle-outline","ios-add-circle","ios-add","ios-alarm-outline","ios-alarm","ios-albums-outline","ios-albums","ios-alert-outline","ios-alert","ios-arrow-back","ios-arrow-down","ios-arrow-dropdown-circle","ios-arrow-dropdown","ios-arrow-dropleft-circle","ios-arrow-dropleft","ios-arrow-dropright-circle","ios-arrow-dropright","ios-arrow-dropup-circle","ios-arrow-dropup","ios-arrow-forward","ios-arrow-round-back","ios-arrow-round-down","ios-arrow-round-forward","ios-arrow-round-up","ios-arrow-up","ios-basket-outline","ios-basket","ios-calendar-outline","ios-calendar","ios-camera-outline","ios-camera","ios-cart-outline","ios-cart","ios-cash-outline","ios-cash","ios-checkbox-outline","ios-checkbox","ios-checkmark-circle-outline","ios-checkmark-circle","ios-checkmark","ios-clock-outline","ios-clock","ios-close-circle-outline","ios-close-circle","ios-close","ios-contact-outline","ios-contact","ios-contacts-outline","ios-contacts","ios-flame-outline","ios-flame","ios-help-circle-outline","ios-help-circle","ios-help","ios-home-outline","ios-home","ios-information-circle-outline","ios-information-circle","ios-information","ios-list-box-outline","ios-list-box","ios-list","ios-lock-outline","ios-lock","ios-mail-outline","ios-mail","ios-megaphone-outline","ios-megaphone","ios-notifications-off-outline","ios-notifications-off","ios-notifications-outline","ios-notifications","ios-person-add-outline","ios-person-add","ios-person-outline","ios-person","ios-pin-outline","ios-pin","ios-radio-button-off","ios-radio-button-on","ios-search-outline","ios-search","ios-star-half","ios-star-outline","ios-star","ios-thumbs-down-outline","ios-thumbs-down","ios-thumbs-up-outline","ios-thumbs-up","ios-time-outline","ios-time","ios-trash-outline","ios-trash","ios-volume-down","ios-volume-up","ios-warning-outline","ios-warning","ios-wifi-outline","ios-wifi","ios-backtop-outline","ios-backtop"]

export default {
  components: {
    Icon
  },
  data () {
    return {
      iconList
    }
  },
  mounted () {
    const clipboard = new ClipboardJS('.ymu-icon')
    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      Toast({
        position: 'bottom',
        message: `已复制到剪切板：${e.text}`
      })
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }
}
</script>


<style lang="scss">
.ymu-doc-block__content {
  overflow: hidden;
}

.ymu-icon {
  float: left;
  padding: 5px;
  font-size: 24px;
  box-sizing: border-box;
  color: burlywood;
  &__name {
    font-size: 12px;
  }
}
</style>
