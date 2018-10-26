<template>
  <div class="mw-main-body">
    <com-main-header :breadList="breadPath" :menuList="subMenuList"></com-main-header>
    <div class="mw-main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ComMainHeader from '@/components/ComMainHeader'
export default {
  name: 'financial-collect-pay',
  components: {
    'com-main-header': ComMainHeader
  },
  data () {
    return {
      // 面包屑路径
      breadPath: [
        {
          name: '财务管理',
          path: ''
        }
      ],
      // 一级菜单
      subMenuList: [
        { name: '收款管理', path: '/financial-management/collect-pay/collect' },
        { name: '付款管理', path: '/' },
        { name: '退款管理', path: '/' },
        { name: '资金调拨', path: '/' },
        { name: '收付汇总表', path: '/' },
        { name: '收付明细表', path: '/' },
        { name: '超时账款管理', path: '/' },
        { name: '往来核对', path: '/' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
