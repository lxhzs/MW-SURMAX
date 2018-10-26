<template>
    <div>
        <p>{{copyright}}</p>
        <p>{{beian}}</p>
    </div>
</template>

<script>
export default {
  name: 'page-main-footer',
  data () {
    return {
      copyright: 'Copyright@2016-2028 MW.top.com 美武版权所有',
      beian: '沪ICP证070359 上海市公安局闵行分局备案编号110105014669'
    }
  }
}
</script>

<style>
</style>
