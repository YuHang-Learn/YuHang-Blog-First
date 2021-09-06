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
          prop="article_title"
          label="文章标题"
        />
        <el-table-column
          prop="user_id"
          label="用户ID"
        />
        <el-table-column
          prop="classify_id"
          label="分类ID"
        />
        <el-table-column
          prop="classify_name"
          label="文章分类"
        />
        <el-table-column
          prop="classify_alias"
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
      :current-page="page"
      @current-change="pageChange"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
</template>

<script>
import { getCategoryData } from '@/api/category'
export default {
  name: 'CategoryManage',
  data () {
    return {
      categoryData: [],
      page: 1,
      perPage: 10,
      count: 0
    }
  },
  created () {
    this.getCategoryData()
  },
  methods: {
    getCategoryData (page = 1, perPage = 10) {
      getCategoryData({ page, perPage }).then(res => {
        this.categoryData = res.data.data
        this.count = res.data.count
      })
    },
    pageChange (page) {
      this.getCategoryData(page)
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
