<template>
  <div class="mw-main-list">
    <com-main-search>

    </com-main-search>
    <Table height="412" :columns="tabledata.columns" :data="tabledata.data"></Table>
    <com-main-page :pages="tabledata.pages" @on-page-change="changePage"></com-main-page>
  </div>
</template>

<script>
import ComMainSearch from '@/components/ComMainSearch'
import ComMainPage from '@/components/ComMainPage'

export default {
  name: 'deliveryaddressmanage',
  components: {
    'com-main-search': ComMainSearch,
    'com-main-page': ComMainPage
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 20,

      tabledata: {
        columns: [
          { title: '发货地址', key: 'addressname' },
          { title: '联系人', key: 'linkername' },
          { title: '联系电话', key: 'linkphone' },
          { title: '操作',
            key: 'modify',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '15px'
                  }
                }, '停用'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },

                  on: {
                    click: () => {
                      console.log(params.row)
                    }
                  }
                }, '修改')
              ])
            }
          }
        ],
        data: [
          {

            linkername: '王朝',
            linkphone: 18530886578,
            addressname: '上海浦东新区'

          }
        ],
        pages: undefined
      }
    }
  },
  created () {
    // this.getInTaxBillNo()
    // this.getInTaxList()
  },
  methods: {

    // 翻页
    changePage (page) {
      console.log(page.totalNumber)
    }

  }
}
</script>

<style lang="less" scoped>
</style>
