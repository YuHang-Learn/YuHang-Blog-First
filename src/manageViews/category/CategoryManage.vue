<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/category' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card">
      <el-table
        :data="categoryData"
        stripe
        style="width: 100%">
         <el-table-column
          prop="articleId"
          label="文章ID"
        />
        <el-table-column
          prop="userId"
          label="用户ID"
        />
        <el-table-column
          prop="classifyId"
          label="分类ID"
        />
        <el-table-column
          prop="classifyName"
          label="文章分类"
        />
        <el-table-column
          prop="classifyAlias"
          label="分类别名"
        />
        <el-table-column
          label="修改分类"
        >
          <template>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'CategoryManage',
  data () {
    return {
      categoryData: [{
        articleId: '1',
        userId: '2',
        classifyId: '3',
        classifyName: '4',
        classifyAlias: '5'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.bread {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.card {
  height: 700px;
  margin-bottom: 20px;
}
</style>
