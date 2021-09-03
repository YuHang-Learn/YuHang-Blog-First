<template>
  <el-dropdown>
    <span class="el-dropdown-link text">
      文章分类<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item>双皮奶</el-dropdown-item>
      <el-dropdown-item>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'CategoryList'
}
</script>

<style lang="less" scoped>
.el-dropdown {
  line-height:1px;
  .text {
    font-size: 16px!important;
    padding-bottom: 5px;
  }
}
</style>
