<template>
	<div class="vmu-button-tab">
		<div class="vmu-button-tab-item">
      <span>我的积分</span>
    </div>
    <div class="vmu-button-tab-item">
      <span>我的订单</span>
    </div>
    <div class="vmu-button-tab-item">
      <span>我的邀请</span>
    </div>
	</div>
</template>

<script>
export default {
  name: 'vmu-button-tab'
}
</script>

<style lang="scss">
.vmu-button-tab {
  display: flex;
  align-items: center;
}

.vmu-button-tab-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
}
</style>