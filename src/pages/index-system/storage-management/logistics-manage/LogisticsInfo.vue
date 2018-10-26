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
  name: 'vat_vat',
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
          { title: '时间', key: 'date' },
          { title: '司机姓名', key: 'drivername' },
          { title: '身份证号码', key: 'codenumber' },
          { title: '联系电话', key: 'linkphone' },
          { title: '家庭住址', key: 'addressname' },
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
                }, '修改'),
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
                }, '删除')
              ])
            }
          }
        ],
        data: [
          {
            date: '2018/10/1',
            drivername: '王朝',
            codenumber: '410183196652145',
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
