<template>
    <Layout>
        <Header>
            <main-header></main-header>
        </Header>
        <Layout class="mw-container">
            <Sider hide-trigger>
                <main-menu></main-menu>
            </Sider>
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
        <Footer class="mw-container">
            <main-footer></main-footer>
        </Footer>
    </Layout>
</template>

<script>
import MainHeader from './MainHeader'
import MainMenu from './MainMenu'
import MainFooter from './MainFooter'

export default {
  name: 'page-main',
  components: {
    'main-header': MainHeader,
    'main-menu': MainMenu,
    'main-footer': MainFooter
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/css/Base.less';

.ivu-layout-header {
  background: inherit;
  padding: 0;
  height: inherit;
  line-height: inherit;
}
.ivu-layout-sider {
  width: 234px !important;
  min-width: 234px !important;
  max-width: 234px !important;
  flex: 0 0 234px !important;
  background: inherit;
}
.ivu-layout-footer {
  font-size: 12px;
  color: @mw-gray-color;
  text-align: center;
}
</style>
