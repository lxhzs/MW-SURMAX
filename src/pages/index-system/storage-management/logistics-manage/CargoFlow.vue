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
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车在途',
          name: '车在途',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车已到',
          name: '车已到',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '装车中',
          name: '装车中',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '装完车',
          name: '装完车',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '车在途',
          name: '车在途1',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已完成',
          name: '已完成',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已评价',
          name: '已评价',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        },
        {
          label: '已退回',
          name: '已退回',
          columns: [
            { title: '商品信息', key: 'goodsinfo' },
            { title: '数量/重量', key: 'count' },
            { title: '体积', key: 'weight' }

          ],
          data: [
            {
              goodsinfo: '锋泾发泡胶',
              count: '1001',
              weight: 100
            }
          ],
          pages: undefined
        }

      ]
    }
  },
  created () {

  },
  methods: {

    // 提交搜索
    getSearch () { },
    // 切换选项卡
    changeTab (name) {

    },
    // 翻页
    changePage (page) {
      console.log(page.totalNumber)
    }

  }
}
</script>

<style lang="less" scoped>
</style>
