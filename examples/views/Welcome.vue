<template>
  <div page="page-welcome">
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">基础组件</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell title="Button 按钮" is-link to="/Button"></Cell>
          <Cell title="Navbar 导航" is-link to="/Navbar"></Cell>
          <Cell title="Cell 单元格" is-link to="/Cell"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">表单组件</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell title="Switch 开关" is-link to="/Switch"></Cell>
        </CellGroup>
      </div>
    </div>
    <div class="ymu-doc-block">
      <div class="ymu-doc-block__title">操作反馈</div>
      <div class="ymu-doc-block__content">
        <CellGroup>
          <Cell title="Actionsheet 上拉菜单" is-link to="/Actionsheet"></Cell>
          <Cell title="Alert 提示窗" is-link to="/Alert"></Cell>
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

