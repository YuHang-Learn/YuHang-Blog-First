<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/visitor_data' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>
    访客的Echart
  </div>
</template>

<script>
export default {
  name: 'VisitorEchart'
}
</script>

<style lang="less" scoped>
.bread {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
</style>
