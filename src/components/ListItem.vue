<template>
  <div class="item">
    <div class="left">
      <div>
        <h2 class="title">{{articleData.article_title}}</h2>
        <div class="abstract"><a href="#">{{articleData.article_abstract}}</a></div>
      </div>
      <div class="left_bottom">
        <div><i class="el-icon-view"></i>&ensp;{{articleData.article_views}}</div>
        <div>发布时间：{{nowDate}}</div>
      </div>
    </div>
    <div class="right">
      <img src="" alt="封面">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    articleData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    nowDate () {
      const time = new Date(this.articleData.article_createTime)
      const month = time.getMonth() + 1
      return time.getFullYear() + '.' + (month < 10 ? '0' + month : month) + '.' + (time.getDate() < 10 ? '0' + time.getDate() : time.getDate()) + ' ' + (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
    }
  },
  methods: {
    change () {
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 15px;
  border-top: 1px solid #eee;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content:center;
    .title:hover {
      color: red;
      cursor: pointer;
    }
    .abstract {
    margin: 15px 0;
    font-size: 20px;
    text-indent: 2em;
   }
   .abstract a {
     text-decoration: none;
     color: #000;
   }
   .abstract a:hover {
     color: #1e80ff;
     cursor: pointer;
     text-decoration: underline;
   }
   .left_bottom {
     display: flex;
     justify-content:space-between;
     font-size: 14px;
   }
  }
}
</style>
