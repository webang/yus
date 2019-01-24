<template>
  <div page="page-welcome">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础组件</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell label="Badge 徽章" is-link to="/Badge"></Cell>
          <Cell label="Backdrop 幕布" is-link to="/Backdrop"></Cell>
          <Cell label="Button 按钮" is-link to="/Button"></Cell>
          <Cell label="ButtonTab 按钮组" is-link to="/ButtonTab"></Cell>
          <Cell label="Cell 单元格" is-link to="/Cell"></Cell>
          <Cell label="Clickable 点击反馈" is-link to="/Clickable"></Cell>
          <Cell label="Clocker 时钟" is-link to="/Clocker"></Cell>
          <Cell label="CountdownNum 数字倒计时" is-link to="/CountdownNum"></Cell>
          <Cell label="CountdownDate 日期倒计时" is-link to="/CountdownDate"></Cell>
          <Cell label="Progress 进度条" is-link to="/Progress"></Cell>
          <Cell label="Navbar 导航" is-link to="/Navbar"></Cell>
          <Cell label="Tabs 标签页" is-link to="/Tabs"></Cell>
          <Cell label="Tabbar 标签栏" is-link to="/Tabbar"></Cell>
          <Cell label="Icon 内置图标" is-link to="/Icon"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">数据展示</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell label="Card 卡片" is-link to="/Card"></Cell>
          <Cell label="Collapse 折叠面板" is-link to="/Collapse"></Cell>
          <Cell label="Flow 步骤条" is-link to="/Flow"></Cell>
          <Cell label="Marquee 跑马灯" is-link to="/Marquee"></Cell>
          <Cell label="NoticeBar 通告栏" is-link to="/NoticeBar"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">表单组件</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell label="Calender 日历" is-link to="/Calender"></Cell>
          <Cell label="Checkbox 复选框" is-link to="/Checkbox"></Cell>
          <Cell label="Field 输入框" is-link to="/Field"></Cell>
          <Cell label="Radio 单选框" is-link to="/Radio"></Cell>
          <Cell label="Switch 开关" is-link to="/Switch"></Cell>
          <Cell label="Slider 滑块" is-link to="/Slider"></Cell>
          <Cell label="RegionSlider 双向滑块" is-link to="/RegionSlider"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">操作反馈</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell label="Actionsheet 上拉菜单" is-link to="/Actionsheet"></Cell>
          <Cell label="Alert 提示窗" is-link to="/Alert"></Cell>
          <Cell label="Backtop 返回顶部" is-link to="/Backtop"></Cell>
          <Cell label="Confirm 确认框" is-link to="/Confirm"></Cell>
          <Cell label="Popup 弹出层" is-link to="/Popup"></Cell>
          <Cell label="Toast 轻提示" is-link to="/Toast"></Cell>
        </CellGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'ymu'

export default {
  components: {
    CellGroup,
    Cell
  }
}
</script>