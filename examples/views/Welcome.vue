<template>
  <div page="view-welcome">
    <div class="my-desc">
      <p class="name">Ymu</p>
      <p>轻量/可靠/易扩展</p>
      <p>都<span class="street">还未实现</span>的移动端 Vue 组件库</p>
      <p>so, I want you. 发送邮箱到1056834607@qq.com</p>
      <p>我们一起来完善它</p>
    </div>
    <ymu-collapse class="group" accordion>

      <ymu-collapse-item title="基础组件">
        <ymu-cell label="Button 按钮" is-link to="/Button"/>
        <ymu-cell label="Backdrop 幕布" is-link to="/Backdrop"/>
        <ymu-cell label="Cell 单元格" is-link to="/Cell"/>
        <ymu-cell label="Icon 内置图标" is-link to="/Icon"/>
        <ymu-cell label="Spinner 加载动画" is-link to="/Spinner"/>
        <!-- 还有问题 -->
        <!-- <ymu-cell label="Loading 加载" is-link to="/Loading"/> -->
      </ymu-collapse-item>

      <ymu-collapse-item title="导航组件">
        <ymu-cell label="Badge 徽章" is-link to="/Badge"/>
        <ymu-cell label="Navbar 导航" is-link to="/Navbar"/>
        <ymu-cell label="Tabbar 标签栏" is-link to="/Tabbar"/>
        <!-- 还有问题 -->
        <ymu-cell label="Tab 标签页" is-link to="/Tab"/>
      </ymu-collapse-item>

      <ymu-collapse-item title="数据展示">
        <ymu-cell label="Card 卡片" is-link to="/Card"/>
        <!-- 还有问题 -->
        <ymu-cell label="Collapse 折叠面板" is-link to="/Collapse"/>
        <!-- 还有问题 -->
        <!-- <ymu-cell label="Flow 步骤条" is-link to="/Flow"/> -->
        <ymu-cell label="Marquee 跑马灯" is-link to="/Marquee"/>
        <ymu-cell label="NoticeBar 通告栏" is-link to="/NoticeBar"/>
        <ymu-cell label="Progress 进度条" is-link to="/Progress"/>
      </ymu-collapse-item>

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

      <ymu-collapse-item title="表单组件">
        <ymu-cell label="Calender 日历" is-link to="/Calender"/>
        <ymu-cell label="Checkbox 复选框" is-link to="/Checkbox"/>
        <ymu-cell label="Field 输入框" is-link to="/Field"/>
        <!-- 还有问题 -->
        <ymu-cell label="Radio 单选框" is-link to="/Radio"/>
        <ymu-cell label="Switch 开关" is-link to="/Switch"/>
        <ymu-cell label="Slider 滑块" is-link to="/Slider"/>
        <ymu-cell label="RegionSlider 区间滑块" is-link to="/RegionSlider"/>
      </ymu-collapse-item>

      <ymu-collapse-item title="时间组件">
        <ymu-cell label="Clocker 时钟" is-link to="/Clocker"/>
        <ymu-cell label="CountdownNum 数字倒计时" is-link to="/CountdownNum"/>
        <ymu-cell label="CountdownDate 日期倒计时" is-link to="/CountdownDate"/>
      </ymu-collapse-item>

    </ymu-collapse>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.view-welcome {
  overflow: hidden;
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
  padding-top: 5px;
  /deep/ .ymu-cell__label {
    font-size: 13px;
  }
}
</style>
