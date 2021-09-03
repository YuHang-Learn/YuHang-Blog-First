<template>
  <div class="item">
    <div class="left">
      <div>时间</div>
      <div>标题</div>
      <div>摘要</div>
      <div>浏览量</div>
    </div>
    <div class="right">
      <img src="" alt="封面">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  padding-right: 10px;
  border-top: 1px solid #eee;
}
</style>
