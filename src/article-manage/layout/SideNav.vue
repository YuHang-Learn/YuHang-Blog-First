<template>
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#4e5969"
      active-text-color="#1d7dfa"
      router
      >
      <el-menu-item index="/article_manage">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-document"></i>
        <span slot="title">写文章</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/article_manage/article">文章管理</el-menu-item>
          <el-menu-item index="/article_manage/category">分类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/article_manage/article_data">文章数据</el-menu-item>
          <el-menu-item index="/article_manage/visitor_data">访客数据</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/article_manage/personal">
        <i class="el-icon-setting"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  .el-menu-item, .el-submenu__title * {
    font-size: 16px;
  }
}

</style>
