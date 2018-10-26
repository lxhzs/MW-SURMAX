<template>
  <Menu active-name="activeMenu" theme="light" width="auto" :open-names="openMenu">
    <Submenu v-for="(item, index) in menuList" :key="index" :name="item.name">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        {{item.name}}
      </template>
      <MenuItem v-for="(val, i) in item.children" :key="i" :name="val.name" :to="val.path">{{val.name}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'page-main-menu',
  data () {
    return {
      activeMenu: '应交税金',
      openMenu: ['财务管理'],
      menuList: [
        {
          name: '财务管理',
          icon: '',
          children: [
            {
              name: '总账系统',
              path: ''
            },
            {
              name: '成本管理',
              path: ''
            },
            {
              name: '账务管理',
              path: ''
            },
            {
              name: '收付款管理',
              path: '/financial-management/collect-pay/collect'
            },
            {
              name: '发票',
              path: '/financial-management/tax-payable'
            },
            {
              name: '应交税金',
              path: '/financial-management/tax-payable/vat'
            },
            {
              name: '现金银行',
              path: ''
            },
            {
              name: '会计科目',
              path: ''
            },
            {
              name: '统计分析',
              path: ''
            },
            {
              name: '单据中心',
              path: ''
            },
            {
              name: '票据管理',
              path: ''
            },
            {
              name: '在建工程',
              path: ''
            },
            {
              name: '其它资权债变动',
              path: ''
            },
            {
              name: '利润分配',
              path: ''
            },
            {
              name: '属性管理',
              path: ''
            }
          ]
        },
        {
          name: '国际业务',
          icon: '',
          children: [
            {
              name: '客户管理',
              path: '/nternational-business/customer/customerInfo'
            }
          ]
        },
        {
          name: '账户管理',
          icon: '',
          children: [
            {
              name: '企业信息',
              path: ''
            }
          ]
        },
        {
          name: '个人平台',
          icon: '',
          children: [
            {
              name: '企业信息',
              path: ''
            }
          ]
        },
        {
          name: '储运管理',
          icon: '',
          children: [
            {
              name: '物流管理',
              path: '/storage-management/logistics-manage/cargoflow'
            },
            {
              name: '入库管理',
              path: ''
            },
            {
              name: '出库管理',
              path: ''
            },
            {
              name: '移库管理',
              path: ''
            },
            {
              name: '退货管理',
              path: ''
            },
            {
              name: '仓库管理',
              path: ''
            },
            {
              name: '物料分析',
              path: ''
            },
            {
              name: '损耗统计',
              path: ''
            },
            {
              name: '叉车管理',
              path: ''
            },
            {
              name: '边角料管理',
              path: ''
            },
            {
              name: '委托物料管理',
              path: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.ivu-menu {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
  border-radius: 4px;
}
</style>
