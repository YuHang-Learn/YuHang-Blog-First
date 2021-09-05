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
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import { getCategoryData } from '@/api/category'
export default {
  name: 'CategoryManage',
  data () {
    return {
      categoryData: []
    }
  },
  created () {
    this.getCategoryData()
  },
  methods: {
    getCategoryData () {
      getCategoryData().then(res => {
        console.log(res)
        this.categoryData = res.data
      })
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
