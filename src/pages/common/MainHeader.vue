<template>
  <div class=" mw-main-header">
    <div class="mw-main-header-bar">
      <div class="mw-container"></div>
    </div>
    <div class="mw-main-header-body">
      <div class="mw-container"></div>
    </div>
    <div class="mw-main-header-menu">
      <div class="mw-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-main-header'
}
</script>

<style lang="less" scoped>
@import '../../assets/css/Base.less';

.mw-main-header {
  width: 100%;
  background-color: @mw-white-color;
  margin-bottom: 12px;
}
.mw-main-header-bar {
  height: 40px;
  background-color: @mw-header-bar-bg;
}
.mw-main-header-body {
  margin-top: 25px;
  height: 48px;
}
.mw-main-header-menu {
  height: 47px;
  box-shadow: 0 7px 7px 0 rgba(131, 131, 131, 0.35);
}
</style>
