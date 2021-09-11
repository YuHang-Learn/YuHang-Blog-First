<template>
  <div class="container">
    <div class="left">
      <div class="left_title">
        <h2>欢迎来到我的个人博客!</h2>
        <div class="before_content">以下是我个人的精选内容</div>
      </div>
      <div class="left_content">
        <list-item
          v-for="(item, index) in articleList"
          :key="index"
          :articleData="item"
        ></list-item>
      </div>
    </div>
    <div class="right">
      <h2>&emsp;&emsp;今天是{{ nowDate }}日，又是充满希望的一天！</h2>
      <el-calendar ref="rdate" class="right_date"/>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import { getArticleList } from '@/api/article.js'
export default {
  name: 'Index',
  components: {
    ListItem
  },
  created () {
    this.getArticleList()
  },
  data () {
    return {
      articleList: []
    }
  },
  computed: {
    nowDate () {
      const date = new Date()
      const month = date.getMonth() + 1
      return date.getFullYear() + '-' + month + '-' + date.getDate()
    }
  },
  methods: {
    getArticleList () {
      getArticleList({}).then(res => {
        this.articleList = res.data.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  .left {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid #eee;
    .left_title {
      display: flex;
      flex-direction: column;
      align-items: center;
      .before_content {
        margin-bottom: 20px;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .right_date {
    margin-top: 50px;
  }
}
.right /deep/ .el-calendar-table .el-calendar-day {
  height: 40px;
}

.el-calendar /deep/ .el-calendar__header,.el-calendar /deep/.el-calendar__body {
  padding: 0;
}
</style>
