<template>
  <div class="yus-demo yus-demo-navbar">
    <div class="yus-demo-block">
      <div class="yus-demo-block__hd">基本用法</div>
      <div class="yus-demo-block__bd">
        <yus-accordion value="0">
          <yus-accordion-item name="1" key="1">
            <div slot="header">大一课程</div>
            <div class="content">
              <div>高等数学</div>
              <div>线性代数</div>
            </div>
          </yus-accordion-item>
          <yus-accordion-item name="2">
            <div slot="header">大二课程</div>
            <div class="content">
              <div>运筹学</div>
              <div>运筹学</div>
            </div>
          </yus-accordion-item>
        </yus-accordion>
      </div>

      <div class="yus-demo-block__hd">手风琴模式</div>
      <div class="yus-demo-block__bd">
        <yus-accordion value="0" accordion>
          <yus-accordion-item header="大一课程" name="1">
            <div class="content">
              <div>高等数学</div>
              <div>大学物理</div>
            </div>
          </yus-accordion-item>
          <yus-accordion-item header="大二课程" name="2">
            <div class="content">
              <div>运筹学</div>
              <div>运筹学</div>
            </div>
          </yus-accordion-item>
        </yus-accordion>
      </div>

      <div class="yus-demo-block__hd">禁用面板</div>
      <div class="yus-demo-block__bd">
        <yus-accordion value="0" accordion>
          <yus-accordion-item header="大一课程" name="1" :disabled="true">
            <div class="content">
              <div>高等数学</div>
              <div>线性代数</div>
            </div>
          </yus-accordion-item>
          <yus-accordion-item header="大二课程" name="2">
            <div class="content">
              <div>运筹学</div>
              <div>运筹学</div>
            </div>
          </yus-accordion-item>
        </yus-accordion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 15px;
  line-height: 30px;
  color: #999;
}
</style>
