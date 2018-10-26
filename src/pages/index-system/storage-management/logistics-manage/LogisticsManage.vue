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
  name: 'logistics-manage',
  components: {
    'com-main-header': ComMainHeader
  },
  data () {
    return {
      // 面包屑路径
      breadPath: [
        {
          name: '储运管理',
          path: ''
        }
      ],
      // 一级菜单
      subMenuList: [
        { name: '来货物流', path: '/storage-management/logistics-manage/cargoflow' },
        { name: '去货物流', path: '/storage-management/logistics-manage/goodsflow' },
        { name: '物流资料', path: '/storage-management/logistics-manage/logisticsinfo' },
        { name: '收货地址管理', path: '/storage-management/logistics-manage/addressinfo' },
        { name: '发货地址管理', path: '/storage-management/logistics-manage/deliveryaddressmanage' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
