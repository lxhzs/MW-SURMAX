import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/pages/common/Main'
import TaxPayable from '@/pages/index-system/financial-management/taxPayable/TaxPayable'
import TaxPayableVat from '@/pages/index-system/financial-management/taxPayable/TaxPayableVat'
import CollectPay from '@/pages/index-system/financial-management/collectPay/CollectPay'
import CollectPayCollect from '@/pages/index-system/financial-management/collectPay/CollectPayCollect'
import Customer from '@/pages/index-system/international-business/customer/Customer'
import CustomerInfo from '@/pages/index-system/international-business/customer/CustomerInfo'
import Statistical from '@/pages/index-system/international-business/customer/Statistical'
import StorageManagement from './storage-management' // 储运管理

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    title: '美武客户平台',
    component: Main,
    children: [{
      path: '/financial-management/tax-payable',
      name: 'taxPayable',
      title: '财务管理-应交税金',
      component: TaxPayable,
      children: [{
        path: 'vat',
        name: 'vat',
        title: '财务管理-应交税金-增值税',
        component: TaxPayableVat
      }]
    },
    {
      path: '/financial-management/collect-pay',
      name: 'CollectPay',
      title: '财务管理-收付款管理',
      component: CollectPay,
      children: [{
        path: 'collect',
        name: 'collect',
        title: '财务管理-收付款管理-收款管理',
        component: CollectPayCollect
      }]
    }, {
      path: '/nternational-business/customer',
      name: 'customer',
      title: '国际业务',
      component: Customer,
      children: [{
        path: 'customerInfo',
        name: 'customerInfo',
        title: '国际业务-客户管理',
        component: CustomerInfo
      },
      {
        path: 'statistical',
        name: 'statistical',
        title: '国际业务-销售统计',
        component: Statistical
      }
      ]
    },
    ...StorageManagement
    ]
  }]
})
