<template>
  <div class="page-notice-bar">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础用法</div>
      <div class="ymu-doc-block__content">
        <ymu-notice-bar>
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </ymu-notice-bar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置frequency(100)</div>
      <div class="ymu-doc-block__content">
        <ymu-notice-bar :frequence="100">
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </ymu-notice-bar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置loop(false)</div>
      <div class="ymu-doc-block__content">
        <ymu-notice-bar :frequence="100" :loop="false">
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </ymu-notice-bar>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">设置右边icon</div>
      <div class="ymu-doc-block__content">
        <ymu-notice-bar :frequence="100" :loop="false">
          <span slot="footer">
            <ymu-icon name="ios-close-circle" style="margin-left: 5px; margin-top: 2px"/>
          </span>
          <p>Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day.</p>
        </ymu-notice-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
