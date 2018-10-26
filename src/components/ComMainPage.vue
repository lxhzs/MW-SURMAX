<template>
  <div class="mw-pages">
    <Row align="middle">
      <Col span="12" class="page-button">
      <Icon type="md-skip-backward" size="15" @click="skipFirst" />
      <Icon type="md-arrow-dropleft" size="24" @click="skipPrev" />
      <span>|第</span>
      <template>
        <Input v-model="page.pageIndex" @keyup.enter.native="skipPage" />
      </template>
      <span>/{{page.totalPage}}页|</span>
      <Icon type="md-arrow-dropright" size="24" @click="skipNext" />
      <Icon type="md-skip-forward" size="15" @click="skipLast" />
      </Col>
      <Col span="12">
      <div class="page-number">共{{page.totalNumber}}条数据显示</div>
      </Col>
    </Row>

  </div>
</template>

<script>
export default {
  name: 'com-main-page',
  data () {
    return {
      page: this.pages
    }
  },
  methods: {
    // 第一页
    skipFirst: function () {
      let vm = this
      vm.pages.pageIndex = 1
      vm.$emit('on-page-change', vm.pages)
    },
    // 最后一页
    skipLast: function () {
      let vm = this
      vm.pages.pageIndex = vm.pages.totalPage
      vm.$emit('on-page-change', vm.pages)
    },
    // 前一页
    skipPrev: function () {
      let vm = this
      if (vm.pages.pageIndex > 1) {
        vm.pages.pageIndex--
      }
      vm.$emit('on-page-change', vm.pages)
    },
    // 后一页
    skipNext: function () {
      let vm = this
      if (vm.pages.pageIndex < vm.pages.totalPage) {
        vm.pages.pageIndex++
      }
      vm.$emit('on-page-change', vm.pages)
    },
    // 跳转某一页
    skipPage: function () {
      let vm = this
      if (vm.pages.pageIndex < 1) {
        vm.pages.pageIndex = 1
      }
      if (vm.pages.pageIndex > vm.pages.totalPage) {
        vm.pages.pageIndex = vm.pages.totalPage
      }
      vm.$emit('on-page-change', vm.pages)
    }
  },
  props: {
    pages: {
      type: Object,
      default () {
        return {
          pageIndex: 1,
          pageSize: 20,
          totalNumber: 1,
          totalPage: 1
        }
      }
    }
  },
  watch: {
    pages (val) {
      if (val) {
        this.pages = val
      }
    }
  }
}
</script>

<style lang="less">
@import '../assets/css/Base.less';

.mw-pages {
  background: @mw-main-search-bg;
  height: 28px;
  line-height: 28px;
  border: 1px solid @mw-bread-border-color;
  border-top: 0;

  .page-button {
    padding-left: 10px;
  }
  .ivu-icon-md-skip-backward,
  .ivu-icon-md-skip-forward,
  .ivu-icon-md-arrow-dropleft,
  .ivu-icon-md-arrow-dropright {
    cursor: pointer;
    color: @mw-main-menu-color;
  }
  .ivu-input-wrapper,
  .ivu-input {
    width: 21px;
    height: 15px;
  }
  .ivu-input {
    padding: 0;
    border-radius: 0;
    text-align: center;
  }
  span {
    color: @mw-main-menu-color;
  }
  .page-number {
    text-align: right;
    margin-right: 10px;
    color: @mw-main-menu-color;
  }
}
</style>
