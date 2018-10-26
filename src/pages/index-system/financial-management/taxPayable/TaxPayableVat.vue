<template>
  <div class="mw-main-list">
    <com-main-search @on-search="getSearch">
      <Row>
        <Col span="12" style="padding-right:10px">
        <Select v-model="taxBillNo" filterable>
          <Option v-for="item in taxBillNoList" :placeholder="taxBillNoText" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="10">
        <DatePicker type="month" placeholder="" style="width: 100px"></DatePicker>
        </Col>
        <Col span="2">
        <div @click="addDerateModal">新增</div>
        </Col>
      </Row>
    </com-main-search>
    <Tabs type="card" :value="checkedTab" @on-click="changeTab">
      <TabPane v-for="(item, index) in tabPaneList" :key="index" :label="item.label" :name="item.name">
        <Table height="412" :columns="item.columns" :data="item.data"></Table>
        <com-main-page :pages="item.pages" @on-page-change="changePage"></com-main-page>
      </TabPane>
    </Tabs>

    <Modal title="新增" ok-text="确定1" v-model="modalSearch" class-name="mw-vertical-center-modal">
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="12">
          <FormItem label="事项">
            <Input v-model="formItem.matter" disabled placeholder=""></Input>
          </FormItem>
          <FormItem label="借">
            <Input v-model="formItem.lend" disabled placeholder=""></Input>
          </FormItem>
          </Col>
          <Col span="12">
          <FormItem label="减免税额">
            <Input v-model="formItem.money" placeholder="" :rules="[
              { required: true, message: '最小分不能为空'},
              { message: '最小分只能是数字', trigger:'change', pattern:/^(([1-9]\d{0,3})|0)(\.\d{0,2})?$/}
            ]">
            <span slot="append">元</span></Input>
          </FormItem>
          <FormItem label="贷">
            <Input v-model="formItem.loan" disabled placeholder=""></Input>
          </FormItem>
          </Col>
        </Row>

      </Form>
      <div slot="footer">
        <Button type="primary" size="large" @click="addDerate">确定</Button>
        <Button type="text" size="large" @click="closeModal">取消</Button>
      </div>
    </Modal>
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
      formItem: {
        matter: '税控设备减免',
        lend: '应交税费-应交增值税-减免税额',
        loan: '管理费',
        money: ''
      },
      modalSearch: false,
      currentPage: 1,
      pageSize: 5,
      checkedTab: '进项税额',
      // 单据号
      taxBillNoText: '单据号',
      taxBillNo: '',
      taxBillNoList: [],
      totalValue: '', // 期初额
      tabPaneList: [
        {
          label: '应交增值税',
          name: '应交增值税',
          columns: [
            { title: '时间', key: 'time' },
            { title: '销项税额(-)', key: 'xxse' },
            { title: '期初留抵(-)' },
            { title: '进项税额(+)' },
            { title: '进项税额转出(-)' },
            { title: '减免税款(+)' },
            { title: '简易税额' },
            { title: '金额' }
          ],
          data: [
            {
              time: '2018-10-19',
              xxse: '100'
            }
          ]
        },
        {
          label: '进项税额',
          name: '进项税额',
          columns: [
            { title: '时间', key: 'date' },
            { title: '单据号', key: 'billNo' },
            { title: '凭证号', key: 'voucherCode' },
            { title: '摘要', key: 'remark' },
            { title: '借方金额', key: 'money' },
            { title: '结余额', key: 'leaveMoney' }
          ],
          data: [],
          pages: undefined
        },
        {
          label: '应退税',
          name: '应退税',
          columns: [
            { title: '时间', key: 'time' },
            { title: '单据号', key: 'docid' },
            { title: '关系来源单号', key: 'pzid' },
            { title: '归属时间', key: 'mark' },
            { title: '金额', key: 'my' }
          ],
          data: []
        },
        {
          label: '减免税款',
          name: '减免税款',
          columns: [
            { title: '时间', key: 'createDate' },
            { title: '事项', key: 'matter' },
            { title: '凭证号', key: 'voucherCode' },
            { title: '减免税额', key: 'derateMoney' },
            { title: '操作' }
          ],
          data: [],
          pages: undefined
        },
        {
          label: '出口抵减内销应纳税额',
          name: '出口抵减内销应纳税额',
          columns: [
            { title: '时间', key: 'date' },
            { title: '单据号', key: 'billNo' },
            { title: '关系来源单号', key: 'orignNo' },
            { title: '凭证号', key: 'voucherCode' },
            { title: '金额', key: 'taxMoney' }
          ],
          data: [],
          pages: undefined
        },
        {
          label: '销项税额',
          name: '销项税额',
          columns: [
            { title: '时间', key: 'date' },
            { title: '单据号', key: 'billNo' },
            { title: '凭证号', key: 'voucherCode' },
            { title: '摘要', key: 'remark' },
            { title: '金额', key: 'money' },
            { title: '结余额', key: 'leaveMoney' }
          ],
          data: [],
          pages: undefined
        },
        {
          label: '出口退税',
          name: '出口退税',
          columns: [
            { title: '归属时间', key: 'time' },
            { title: '应交增值税税额', key: 'docid' },
            { title: '出口额 X 退税率', key: 'pzid' },
            { title: '出口退税额', key: 'mark' },
            { title: '|应交增值税税额|', key: 'my' },
            { title: '应退税额' }
          ],
          data: []
        },
        {
          label: '进项税额转出',
          name: '进项税额转出',
          columns: [
            { title: '时间', key: 'time' },
            { title: '单据号', key: 'docid' },
            { title: '原凭证号', key: 'pzid' },
            { title: '凭证号', key: 'mark' },
            { title: '金额', key: 'my' },
            { title: '结余额' }
          ],
          data: []
        },
        {
          label: '转出未交增值税',
          name: '转出未交增值税',
          columns: [],
          data: []
        },
        {
          label: '销项税额抵减',
          name: '销项税额抵减',
          columns: [],
          data: []
        },
        {
          label: '转出多交增值税',
          name: '转出多交增值税',
          columns: [],
          data: []
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
    getSearch () {

    },
    closeModal () {
      this.modalSearch = false
    },
    addDerateModal () {
      this.modalSearch = true
    },
    addDerate () {
      this.modalSearch = false
      console.log(this.formItem)
    },
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

<style>
</style>
