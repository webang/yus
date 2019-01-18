<template>
  <div class="page-notice-bar">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础用法</div>
      <div class="ymu-doc-block__content">
        <NoticeBar>
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </NoticeBar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置frequency(100)</div>
      <div class="ymu-doc-block__content">
        <NoticeBar :frequence="100">
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </NoticeBar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置loop(false)</div>
      <div class="ymu-doc-block__content">
        <NoticeBar :frequence="100" :loop="false">
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </NoticeBar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置右边icon</div>
      <div class="ymu-doc-block__content">
        <NoticeBar :frequence="100" :loop="false">
          <span slot="head">
            <i class="ymuicon ios-voice"></i>
          </span>
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </NoticeBar>
      </div>
    </div>
  </div>
</template>

<script>
import { NoticeBar } from 'ymu'
export default {
  components: {
    NoticeBar
  }
}
</script>
