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
          name: '财务管理',
          path: ''
        }
      ],
      // 一级菜单
      subMenuList: [
        { name: '应交税费', path: '/' },
        { name: '增值税', path: '/financial-management/tax-payable/vat' },
        { name: '附加税', path: '/' },
        { name: '企业所得税', path: '/' },
        { name: '薪酬所得税', path: '/' },
        { name: '消费税', path: '/' },
        { name: '其它税费', path: '/' },
        { name: '五险一金', path: '/' },
        { name: '退税及政府补贴', path: '/' },
        { name: '待认证项目', path: '/' },
        { name: '简易计税', path: '/' },
        { name: '出口交税', path: '/' },
        { name: '出口退税', path: '/' },
        { name: '属性管理', path: '/' }
      ]
    }
  }
}
</script>

<style>
</style>
