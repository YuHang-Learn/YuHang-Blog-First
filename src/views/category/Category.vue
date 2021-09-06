<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item>文章分类</el-breadcrumb-item>
      <el-breadcrumb-item>{{category}}</el-breadcrumb-item>
    </el-breadcrumb>
    <list-item
    v-for="(item, index) in articleData"
    :key="index"
    :articleData="item"
    ></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
import { getArticleList } from '@/api/article'
export default {
  name: 'Index',
  components: {
    ListItem
  },
  created () {
    this.getArticleCategoryData('全部')
  },
  data () {
    return {
      articleData: []
    }
  },
  computed: {
    category () {
      return this.$store.state.categoryItem
    }
  },
  methods: {
    getArticleCategoryData (val) {
      getArticleList({ val }).then(res => {
        this.articleData = res.data.data
      })
    }
  },
  watch: {
    category (val, oldVal) {
      this.getArticleCategoryData(val)
    }
  }
}
</script>

<style lang="less" scoped>
.bread {
  padding-bottom: 15px;
}
</style>
