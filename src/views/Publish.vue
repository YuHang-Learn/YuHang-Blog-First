<template>
  <el-card class="card">
      <editor />
    <el-button type="primary" class="btn">发表</el-button>
  </el-card>
</template>

<script>
import Editor from '@/components/editor/Editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
export default {
  name: 'Publish',
  components: {
    Editor
  }
}
</script>

<style lang="less" scoped>
.card {
  height: 100%!important;
  opacity: .8;
}
.el-card /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    .btn {
    margin-top: 10px;
  }
  }
</style>
