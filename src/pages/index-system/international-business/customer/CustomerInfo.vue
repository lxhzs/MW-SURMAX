<template>
  <div class="mw-main-list">
    <com-main-search @on-search="getCustomerList">
      <div>
        <Input v-model="searchCustomerName" placeholder="客户名称" />
      </div>
    </com-main-search>
    <Table height="412" :columns="columns" :data="data"></Table>
    <com-main-page :pages="pages" @on-page-change="changePage"></com-main-page>
  </div>
</template>

<script>
import ComMainSearch from '@/components/ComMainSearch'
import ComMainPage from '@/components/ComMainPage'

export default {
  name: 'international-customer-baseInfo',
  components: {
    'com-main-search': ComMainSearch,
    'com-main-page': ComMainPage
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 20,
      searchDepartmentId: 1, // 部门id 查询用
      searchCustomerName: '', // 客户名称 模糊查询
      columns: [
        { title: '时间', key: 'createDate' },
        { title: '客户名称', key: 'customerName' },
        { title: '国家/地区', key: 'areaValue' },
        { title: '联系人', key: 'contact' },
        { title: '地址', key: 'address' },
        { title: '电话', key: 'tel' },
        { title: '邮箱', key: 'email' },
        {
          title: '操作',
          type: 'action',
          render: (h, params) => {
            let btns = []
            btns.push(h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              on: {
                click: () => {
                  // 修改

                }
              }
            }, '修改'))
            if (params.row.status == 'ENABLE') {
              btns.push(h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                on: {
                  click: () => {
                    // 启用

                  }
                }
              }, '启用'))
            } else {
              btns.push(h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    // 停用

                  }
                }
              }, '停用'))
            }
            return h('div', btns)
          }

        }
      ],
      data: [],
      pages: undefined

    }
  },
  created () {
    this.getCustomerList()
  },
  methods: {
    // 翻页
    changePage (page) {
      console.log(page.totalNumber)
    },
    // 获取客户信息列表
    getCustomerList () {
      let vm = this
      vm.api.international
        .getCustomerList({
          departmentId: vm.searchDepartmentId,
          customerName: vm.searchCustomerName,
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(res => {
          vm.data = res.list
          vm.pages = {
            pageIndex: res.pageNum,
            pageSize: res.pageSize,
            totalNumber: res.total,
            totalPage: res.pages
          }
        },
        err => {
          console.log(err)
        }
        )
    }

  }
}
</script>

<style>
</style>
