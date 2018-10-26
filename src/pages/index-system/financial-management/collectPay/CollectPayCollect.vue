<template>
  <div class="mw-main-list">
    <com-main-search @on-search="getSearch">
      <div>search bar</div>
      <DatePicker type="daterange" split-panels placeholder="Select date" style="width:200px"></DatePicker>
      <Button @click="modal = true" type="primary">收款</Button>
      <Modal title="Title" v-model="modal" :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </com-main-search>
    <Tabs type="card" :value="checkedTab" @on-click="changeTab">
      <TabPane v-for="(item, index) in tabPaneList" :key="index" :label="item.label" :name="item.name">
        <Table height="412" :columns="item.columns" :data="item.data"></Table>
        <com-main-page :pages="item.pages" @on-page-change="changePage"></com-main-page>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import ComMainSearch from '@/components/ComMainSearch'
import ComMainPage from '@/components/ComMainPage'

export default {
  name: 'collect_pay_collect',
  components: {
    'com-main-search': ComMainSearch,
    'com-main-page': ComMainPage
  },
  data () {
    return {
      modal: false,
      currentPage: 1,
      pageSize: 20,
      checkedTab: '应收款',
      // 单据号
      taxBillNo: '',
      taxBillNoList: [],
      totalValue: '', // 期初额
      tabPaneList: [
        {
          label: '应收款',
          name: '应收款',
          columns: [
            { type: 'selection', width: 50, align: 'center' },
            { title: '单据时间', key: 'create_date' },
            { title: '单据号', key: 'sourceNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '合约收款时间', key: 'recDateEnd' },
            { title: '金额', key: 'balance' }
          ],
          data: []
        },
        {
          label: '待收款',
          name: '待收款',
          columns: [
            { type: 'selection', width: 50, align: 'center' },
            { title: '单据时间', key: 'create_date' },
            { title: '单据号', key: 'sourceNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '合约收款时间', key: 'recDateEnd' },
            { title: '金额', key: 'balance' }
          ],
          data: []
        },
        {
          label: '收款待审',
          name: '收款待审',
          columns: [
            { type: 'selection', width: 50, align: 'center' },
            { title: '单据时间', key: 'date' },
            { title: '单据号', key: 'recCheckoutId' },
            { title: '来源单号', key: 'sourceNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '来款账户', key: 'bnsAccount' },
            { title: '收款账户', key: 'recAccount' },
            { title: '收款方式', key: 'recType' },
            { title: '金额', key: 'money' },
            { title: '操作',
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, '修改')
                ])
              }
            }
          ],
          data: []
        },
        {
          label: '已收款',
          name: '已收款',
          columns: [
            { type: 'selection', width: 50, align: 'center' },
            { title: '单据时间', key: 'date' },
            { title: '单据号', key: 'recCheckoutId' },
            { title: '来源单号', key: 'sourceNo' },
            { title: '凭证号', key: 'voucherNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '来款账户', key: 'bnsAccount' },
            { title: '收款账户', key: 'recAccount' },
            { title: '收款方式', key: 'recType' },
            { title: '金额', key: 'money' }
          ],
          data: []
        },
        {
          label: '待退款',
          name: '待退款',
          columns: [
            { type: 'selection', width: 50, align: 'center' },
            { title: '单据时间', key: 'date' },
            { title: '单据号', key: 'recCheckoutId' },
            { title: '客户名称', key: 'businessName' },
            { title: '退款账户', key: 'recAccount' },
            { title: '金额', key: 'returnMoney' },
            { title: '状态', key: 'kindState' },
            { title: '操作',
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.cancel(params.index)
                      }
                    }
                  }, '取消')
                ])
              }
            }
          ],
          data: []
        },
        {
          label: '已退款',
          name: '已退款',
          columns: [
            { title: '单据时间', key: 'date' },
            { title: '单据号', key: 'recCheckoutId' },
            { title: '来源单号', key: 'sourceNo' },
            { title: '凭证号', key: 'voucherNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '退款账户', key: 'recAccount' },
            { title: '金额', key: 'returnMoney' }
          ],
          data: []
        },
        {
          label: '已失效',
          name: '已失效',
          columns: [
            { title: '单据时间', key: 'date' },
            { title: '来源单号', key: 'sourceNo' },
            { title: '客户名称', key: 'businessName' },
            { title: '金额', key: 'returnMoney' },
            { title: '操作',
              align: 'center',
              width: 120,
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.del(params.index)
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ],
          data: []
        }
      ]
    }
  },
  created () {
    this.getShouldCollectList(0)
  },
  methods: {
    // 提交搜索
    getSearch () { },
    // 切换选项卡
    changeTab (name) {
      let vm = this
      switch (name) {
        case '应收款':
          vm.getShouldCollectList(0)
          break
        case '待收款':
          vm.getShouldCollectList(1)
          break
        case '收款待审':
          vm.getShouldCollectList(2)
          break
        case '已收款':
          vm.getShouldCollectList(3)
          break
        case '待退款':
          vm.getShouldCollectList(4)
          break
        case '已退款':
          vm.getShouldCollectList(5)
          break
        case '已失效':
          vm.getShouldCollectList(6)
          break
      }
    },
    // 翻页
    changePage (page) {
      console.log(page.totalNumber)
    },
    // 列表查询
    getShouldCollectList (states) {
      let vm = this
      vm.api.financial
        .getShouldCollectList({
          state: states,
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(
          res => {
            vm.tabPaneList.forEach(v => {
              console.log(res)
              v.data = res.itemList
              v.pages = {
                pageIndex: res.currentPage,
                pageSize: res.pageSize,
                totalNumber: res.totalNum,
                totalPage: res.totalPage
              }
            })
          },
          err => {
            console.log(err)
          }
        )
    },
    // 操作按钮
    show (index) {
      this.$Modal.info({
        title: '修改',
        content: ``
      })
    },
    cancel (index) {
      this.$Modal.info({
        title: '取消',
        content: ``
      })
    },
    del (index) {
      this.$Modal.info({
        title: '删除',
        content: ``
      })
    }
  }
}
</script>

<style>
</style>
