<template>
  <div>
    <Breadcrumb class="com-main-header-bread" separator=">">
      <BreadcrumbItem v-for="(item, index) in breadPath" :key="index">{{item.name}}</BreadcrumbItem>
      <BreadcrumbItem v-if="activeItem.name" :key="activeItem.name">{{activeItem.name}}</BreadcrumbItem>
    </Breadcrumb>
    <div v-if="subMenuList.length>0" class="com-main-header-menu">
      <router-link v-for="(item, index) in subMenuList" :key="index" :to="item.path">{{item.name}}</router-link>
    </div>
    <div v-if="subMenuList.length===0" class="com-main-header-menu-disabled"></div>
  </div>
</template>

<script>
export default {
  name: 'com-main-header',
  data () {
    return {
      // 一级菜单
      subMenuList: this.menuList
    }
  },
  computed: {
    // 面包屑路径
    breadPath: function () {
      let breadcrumbList = this.breadList
      let rootBread = this.rootBread
      if (rootBread) {
        breadcrumbList.unshift(rootBread)
      }
      return breadcrumbList
    },
    // 获取当前选中项
    activeItem: function () {
      let item = {}
      if (this.menuList.length > 0) {
        let checkedItem = this.menuList.find(val => {
          return val.path === this.$route.path
        })
        if (checkedItem) {
          item = checkedItem
        }
      }

      return item
    }
  },
  methods: {},
  props: {
    rootBread: {
      type: Object,
      default () {
        return {
          name: '您当前所在位置',
          path: ''
        }
      }
    },
    breadList: {
      type: Array,
      default () {
        return []
      }
    },
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    rootBread (val) {
      if (val) {
        this.rootBread = val
      }
    },
    breadList (val) {
      this.breadList = val
    },
    menuList (val) {
      this.menuList = val
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/Base.less';

.com-main-header-bread {
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding-left: 20px;
  font-size: 12px;
  color: @mw-bread-color;
  letter-spacing: 0;
  border-bottom: 1px solid @mw-bread-border-color;
}
.ivu-breadcrumb {
  > span:last-child {
    font-weight: normal;
    color: inherit;
  }
}

.com-main-header-menu {
  width: 100%;
  height: 63px;
  line-height: 63px;
  font-size: 12px;
  color: @mw-main-menu-color;
  letter-spacing: 0;
}
.com-main-header-menu {
  a {
    color: @mw-main-menu-color;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 4px;
    margin-left: 16px;
  }
  :first-child {
    margin-left: 20px;
  }
  :hover {
    color: @mw-main-menu-active-color;
    border-bottom: 1px solid @mw-main-menu-active-color;
  }
  .router-link-exact-active {
    color: @mw-main-menu-active-color;
    border-bottom: 1px solid @mw-main-menu-active-color;
  }
}
.com-main-header-menu-disabled {
  height: 19px;
}
</style>
