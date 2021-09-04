<template>
  <el-dropdown>
    <span class="el-dropdown-link text">
      文章分类<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>全部</el-dropdown-item>
      <el-dropdown-item
        v-for="(item, index) in categoryList"
        :key="index"
      >
      {{item}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { getCategoryList } from '@/api/category'
export default {
  name: 'CategoryList',
  created () {
    this.getCategoryList()
  },
  data () {
    return {
      categoryList: []
    }
  },
  methods: {
    getCategoryList () {
      getCategoryList().then(res => {
        this.categoryList = res.data
      })
    }
  }
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
