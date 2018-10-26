<template>
  <div class="com-main-search">
    <Button class="search-button" @click="search">查询</Button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'com-main-search',
  methods: {
    search () {
      let vm = this
      vm.$emit('on-search', {})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/Base.less';

.com-main-search {
  height: 40px;
  margin-bottom: 14px;
  background: @mw-main-search-bg;
  display: flex;
  align-items: center;
  .search-button {
    margin: 0 10px;
    width: 64px;
    height: 26px;
    border-radius: 2px;
    padding: 0;
    border: 0;
    background: @main-color;
    color: @mw-white-color;
  }
}
</style>
