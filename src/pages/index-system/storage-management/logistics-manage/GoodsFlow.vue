<template>
  <div class="mw-main-list">
    <com-main-search @on-search="getSearch">
      <Row>
        <Col span="12" style="padding-right:10px">
        <Select v-model="taxBillNo" filterable>
          <Option v-for="item in taxBillNoList" :placeholder="单据号" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
      </Row>
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
  name: 'vat_vat',
  components: {
    'com-main-search': ComMainSearch,
    'com-main-page': ComMainPage
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 20,
      checkedTab: '车未定',
      // 单据号
      taxBillNo: '',
      taxBillNoList: [],
      totalValue: '', // 期初额
      tabPaneList: [
        {
          label: '车未定',
          name: '车未定',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车在途',
          name: '车在途',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车已到',
          name: '车已到',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '装车中',
          name: '装车中',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '装完车',
          name: '装完车',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车在途',
          name: '车在途1',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已完成',
          name: '已完成',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已评价',
          name: '已评价',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已退回',
          name: '已退回',
          columns: [
            { title: '车辆信息', key: 'carsinfo' },
            { title: '商品信息', key: 'goodsinfo' },
            { title: '物流公司信息', key: 'logisticsinfo' },
            { title: '收货信息', key: 'receiveinfo' }

          ],
          data: [
            {
              carsinfo: '111',
              goodsinfo: '锋泾发泡胶',
              logisticsinfo: '1001',
              receiveinfo: 100
            }
          ],
          pages: undefined
        }

      ]
    }
  },
  created () {
    // this.getInTaxBillNo()
    // this.getInTaxList()
  },
  methods: {
    // 搜索 - 进项税额 - 单据号
    getInTaxBillNo () {
      let vm = this

      vm.api.financial.getInTaxBillNo().then(
        res => {
          vm.taxBillNoList = res
        },
        err => {
          console.log(err)
        }
      )
    },
    // 提交搜索
    getSearch () { },
    // 切换选项卡
    changeTab (name) {
      let vm = this
      switch (name) {
        case '进项税额':
          vm.getInTaxBillNo()
          vm.getInTaxList()
          break
        case '销项税额':
          vm.getSaleTaxBillNo()
          vm.getSaleTaxList()
          break
        case '减免税款':
          vm.getDerateTaxList()
          break
        case '出口抵减内销应纳税额':
          vm.getOutTaxDeductMoneyList()
          break
      }
    },
    // 翻页
    changePage (page) {
      console.log(page.totalNumber)
    },
    // 进项税额 - 列表
    getInTaxList () {
      let vm = this
      vm.api.financial
        .getInTaxList({
          billNo: null,
          year: '2018',
          month: '8',
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(
          res => {
            vm.totalValue = res.totalValue
            vm.tabPaneList.forEach(v => {
              if (v.name === '进项税额') {
                v.data = res.itemList
                v.pages = {
                  pageIndex: res.currentPage,
                  pageSize: res.pageSize,
                  totalNumber: res.totalNum,
                  totalPage: res.totalPage
                }
              }
            })
          },
          err => {
            console.log(err)
          }
        )
    },
    // 搜索 - 销项税额 - 单据号
    getSaleTaxBillNo () {
      let vm = this
      vm.api.financial.getSaleTaxBillNo().then(
        res => {
          vm.taxBillNoList = res
        },
        err => {
          console.log(err)
        }
      )
    },
    // 销项税额 - 列表
    getSaleTaxList () {
      let vm = this
      vm.api.financial
        .getSaleTaxList({
          billNo: null,
          year: '2018',
          month: '10',
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(
          res => {
            vm.totalValue = res.totalValue
            vm.tabPaneList.forEach(v => {
              if (v.name === '销项税额') {
                v.data = res.itemList
                v.pages = {
                  pageIndex: res.currentPage,
                  pageSize: res.pageSize,
                  totalNumber: res.totalNum,
                  totalPage: res.totalPage
                }
              }
            })
          },
          err => {
            console.log(err)
          }
        )
    },
    // 减免税款 - 列表
    getDerateTaxList () {
      let vm = this
      vm.api.financial
        .getDerateTaxList({
          year: '2018',
          month: '10',
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(
          res => {
            vm.tabPaneList.forEach(v => {
              if (v.name === '减免税款') {
                v.data = res.itemList
                v.pages = {
                  pageIndex: res.currentPage,
                  pageSize: res.pageSize,
                  totalNumber: res.totalNum,
                  totalPage: res.totalPage
                }
              }
            })
          },
          err => {
            console.log(err)
          }
        )
    },
    // 出口抵减内销应纳税额 - 列表
    getOutTaxDeductMoneyList () {
      let vm = this
      vm.api.financial
        .getOutTaxDeductMoneyList({
          year: '2018',
          month: '10',
          currentPage: vm.currentPage,
          pageSize: vm.pageSize
        })
        .then(
          res => {
            vm.tabPaneList.forEach(v => {
              if (v.name === '出口抵减内销应纳税额') {
                v.data = res.itemList
                v.pages = {
                  pageIndex: res.currentPage,
                  pageSize: res.pageSize,
                  totalNumber: res.totalNum,
                  totalPage: res.totalPage
                }
              }
            })
          },
          err => {
            console.log(err)
          }
        )
    }
  }
}
</script>

<style lang="less" scoped>
</style>
