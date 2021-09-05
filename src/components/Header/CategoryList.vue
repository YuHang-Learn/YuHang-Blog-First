<template>
  <el-dropdown @command="categoryItemChange" trigger="click">
    <span class="el-dropdown-link text">
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in categoryList"
        :key="index"
        :command="item"
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
        this.categoryList.unshift('全部')
      })
    },
    categoryItemChange (val) {
      this.$store.commit('changeCategory', val)
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
