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
            v-model="filterForm.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="filterSearch">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="card_footer">
      <h4>查询得到{{count}}条数据</h4>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
         <el-table-column
          prop="user_id"
          label="用户ID"
          width="100px"
        />
        <el-table-column
          prop="article_photo"
          label="文章封面"
          width="100px"
        />
        <el-table-column
          prop="article_title"
          label="标题"
        />
        <el-table-column
          prop="classify_name"
          label="分类"
          width="100px"
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
      :current-page="page"
      @current-change="pageChange"
      :page-size="5"
      layout="total, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/category'
import { getArticleList, getFilterArticleList } from '@/api/article'
export default {
  name: 'ArticleManage',
  data () {
    return {
      filterForm: {
        category: '',
        date: ''
      },
      categoryList: [],
      tableData: [],
      page: 1,
      perPage: 5,
      count: 0
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
        this.categoryList.unshift('全部')
      })
    },
    getArticleList (page = this.page, perPage = this.perPage) {
      getArticleList({ page, perPage }).then(res => {
        this.count = res.data.count
        this.tableData = res.data.data
      })
    },
    pageChange (page) {
      this.page = page
      if (this.filterForm.category !== '') {
        this.filterSearch()
      } else {
        this.getArticleList(page)
      }
    },
    filterSearch () {
      const form = {
        classifyName: this.filterForm.category,
        date1: this.filterForm.date[0],
        date2: this.filterForm.date[1],
        page: this.page,
        perPage: this.perPage
      }
      getFilterArticleList(form).then(res => {
        console.log(res)
        this.tableData = res.data.data
        this.count = res.data.count
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
  // .el-table /deep/ .cell {
  //   padding-right: 0!important;
  // }
</style>
