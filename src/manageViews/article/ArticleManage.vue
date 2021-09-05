<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/article_manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card_center">
      <el-form ref="filterForm" :model="filterForm" label-width="80px">
        <el-form-item label="文章分类">
          <el-select v-model="filterForm.category" placeholder="请选择文章分类">
            <el-option
             v-for="(item, index) in categoryList"
             :key="index"
             :label="item"
             :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="card_footer">
      <h4>查询得到{{tableData.length}}条数据</h4>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
         <el-table-column
          prop="user_id"
          label="用户ID"
        />
        <el-table-column
          prop="article_photo"
          label="文章封面"
        />
        <el-table-column
          prop="article_title"
          label="标题"
        />
        <el-table-column
          prop="classify_name"
          label="分类"
        />
        <el-table-column
          prop="article_createTime"
          label="创建时间"
        />
        <el-table-column
          label="操作"
        >
          <template>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
import { getCategoryList } from '@/api/category'
import { getArticleList } from '@/api/article'
export default {
  name: 'ArticleManage',
  data () {
    return {
      filterForm: {
        category: '',
        date: ''
      },
      categoryList: [],
      tableData: []
    }
  },
  created () {
    this.getCategoryList()
    this.getArticleList()
  },
  methods: {
    getCategoryList () {
      getCategoryList().then(res => {
        this.categoryList = res.data
      })
    },
    getArticleList () {
      getArticleList().then(res => {
        this.tableData = res.data
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
.card_center {
  margin-bottom: 10px;
}
.card_footer {
  height: 500px;
  margin-bottom: 15px;
}
</style>
