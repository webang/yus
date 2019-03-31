<template>
  <div page="demo-welcome">
    <div class="my-desc">
      <p class="name">Ymu</p>
      <p>轻量/可靠/易扩展</p>
      <p>都<span class="street">还未实现</span>的移动端 Vue 组件库</p>
    </div>
    
    <ymu-collapse class="group">
      <ymu-collapse-item title="基础组件">
        <ymu-cell label="Button 按钮" is-link to="/Button"/>
        <ymu-cell label="Backdrop 幕布" is-link to="/Backdrop"/>
        <ymu-cell label="Cell 单元格" is-link to="/Cell"/>
        <ymu-cell label="Icon 内置图标" is-link to="/Icon"/>
        <ymu-cell label="Spinner 加载动画" is-link to="/Spinner"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="数据展示">
        <ymu-cell label="Card 卡片" is-link to="/Card"/>
        <ymu-cell label="Collapse 折叠面板" is-link to="/Collapse"/>
        <ymu-cell label="Flow 步骤条" is-link to="/Flow"/>
        <ymu-cell label="Marquee 跑马灯" is-link to="/Marquee"/>
        <ymu-cell label="NoticeBar 通告栏" is-link to="/NoticeBar"/>
        <ymu-cell label="Progress 进度条" is-link to="/Progress"/>
        <ymu-cell label="Swiper 轮播" is-link to="/Swiper"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="导航组件">
        <ymu-cell label="Badge 徽章" is-link to="/Badge"/>
        <ymu-cell label="Navbar 导航" is-link to="/Navbar"/>
        <ymu-cell label="Pagination 分页器" is-link to="/Pagination"/>
        <ymu-cell label="Popover 气泡" is-link to="/Popover"/>
        <ymu-cell label="Segment 分段器" is-link to="/Segment"/>
        <ymu-cell label="Tabbar 标签栏" is-link to="/Tabbar"/>
        <ymu-cell label="Tab 标签页" is-link to="/Tab"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="表单组件">
        <ymu-cell label="Calender 日历" is-link to="/Calender"/>
        <ymu-cell label="Checkbox 复选框" is-link to="/Checkbox"/>
        <ymu-cell label="Field 输入框" is-link to="/Field"/>
        <ymu-cell label="Radio 单选框" is-link to="/Radio"/>
        <ymu-cell label="Switch 开关" is-link to="/Switch"/>
        <ymu-cell label="Slider 滑块" is-link to="/Slider"/>
        <ymu-cell label="RegionSlider 区间滑块" is-link to="/RegionSlider"/>
        <ymu-cell label="InfinitePicker 无限级选择器" is-link to="/InfinitePicker"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="时间组件">
        <ymu-cell label="Clocker 时钟" is-link to="/Clocker"/>
        <ymu-cell label="CountdownNum 数字倒计时" is-link to="/CountdownNum"/>
        <ymu-cell label="CountdownDate 日期倒计时" is-link to="/CountdownDate"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="操作反馈">
        <ymu-cell label="Actionsheet 上拉菜单" is-link to="/Actionsheet"/>
        <!-- 还有问题 -->
        <ymu-cell label="Alert 提示窗" is-link to="/Alert"/>
        <ymu-cell label="Backtop 返回顶部" is-link to="/Backtop"/>
        <!-- 还有问题 -->
        <ymu-cell label="Confirm 确认框" is-link to="/Confirm"/>
        <ymu-cell label="Popup 弹出层" is-link to="/Popup"/>
        <!-- 还有问题 -->
        <ymu-cell label="Toast 轻提示" is-link to="/Toast"/>
      </ymu-collapse-item>
    </ymu-collapse>

    <ymu-collapse class="group">
      <ymu-collapse-item title="手势">
        <ymu-cell label="PullRefresh 下拉刷新" is-link to="/PullRefresh"/>
      </ymu-collapse-item>
    </ymu-collapse>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-welcome {
  overflow: hidden;
}

/deep/ .ymu-collapse-item__content {
  padding-bottom: 0;
}

/deep/ .ymu-cell {
  padding-left: 0;
  padding-right: 0;
}

/deep/ .ymu-collapse-item__hd {
  font-size: 16px;
  line-height: 32px;
  border-radius: 4px;
}

.ymu-collapse-item__content {
  padding-bottom: 0;
}

.my-desc {
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 14px;
  text-align: center;
  .name {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: fantasy;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
  .street {
    font-weight: 700;
    color: #f44336;
  }
}

.group {
  margin: 0 24px;
  padding-top: 10px;
  /deep/ .ymu-cell__label {
    font-size: 13px;
  }
}
</style>
