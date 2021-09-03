<template>
  <div>
    <div>
      <span>该栏为转载个人认为较好的文章</span>
      <span>最新</span>
      <span class="bor"></span>
      <span>热门</span>
    </div>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'Index',
  components: {
    ListItem
  }
}
</script>

<style lang="less" scoped>
.bor {
  display: inline-block;
  width: 1px;
  height: 15px;
  margin: 0 10px;
  background-color: #eee;
}
</style>
