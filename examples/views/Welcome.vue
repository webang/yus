<template>
  <div page="page-welcome">
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">基础组件</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="Button 按钮" is-link to="/Button"></Cell>
          <Cell title="Cell 单元格" is-link to="/Cell"></Cell>
          <Cell title="Flow 步骤条" is-link to="/Flow"></Cell>
          <Cell title="Progress 进度条" is-link to="/Progress"></Cell>
          <Cell title="Popup 弹出层" is-link to="/Popup"></Cell>
          <Cell title="Navbar 导航" is-link to="/Navbar"></Cell>
          <Cell title="Tabbar 标签栏" is-link to="/Tabbar"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">数据展示</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="Collapse 折叠面板" is-link to="/Collapse"></Cell>
          <Cell title="Marquee 跑马灯" is-link to="/Marquee"></Cell>
          <Cell title="NoticeBar 通告栏" is-link to="/NoticeBar"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">表单组件</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="Checkbox 复选框" is-link to="/Checkbox"></Cell>
          <Cell title="Field 输入框" is-link to="/Field"></Cell>
          <Cell title="Radio 单选框" is-link to="/Radio"></Cell>
          <Cell title="Switch 开关" is-link to="/Switch"></Cell>
          <Cell title="Slider 滑块" is-link to="/Slider"></Cell>
          <Cell title="RegionSlider 双向滑块" is-link to="/RegionSlider"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ym-doc-block">
      <div class="ym-doc-block__title">操作反馈</div>
      <div class="ym-doc-block__content">
        <CellGroup>
          <Cell title="Actionsheet 上拉菜单" is-link to="/Actionsheet"></Cell>
          <Cell title="Alert 提示窗" is-link to="/Alert"></Cell>
          <Cell title="Backtop 返回顶部" is-link to="/Backtop"></Cell>
          <Cell title="Confirm 确认框" is-link to="/Confirm"></Cell>
          <Cell title="Toast 轻提示" is-link to="/Toast"></Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import CellGroup from '@/components/cell-group'
import Cell from '@/components/cell'
export default {
  components: {
    CellGroup,
    Cell
  }
}
</script>

