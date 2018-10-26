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
  name: 'financial-taxpayable',
  components: {
    'com-main-header': ComMainHeader
  },
  data () {
    return {
      // 面包屑路径
      breadPath: [
        {
          name: '国际业务',
          path: ''
        }
      ],
      // 一级菜单
      subMenuList: [
        { name: '基本信息', path: '/nternational-business/customer/customerInfo' },
        { name: '销售统计', path: '/nternational-business/customer/statistical' }
      ]
    }
  }
}
</script>

<style>
</style>
