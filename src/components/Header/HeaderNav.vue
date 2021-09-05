<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#fff"
    text-color="#86909c"
    active-text-color="#1e80ff"
    router
    >
    <header-logo />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/recommend">推荐</el-menu-item>
    <el-menu-item index="/category">
      文章分类
      <category-list></category-list>
    </el-menu-item>
    <el-menu-item index="/personal" @click="pushWrite">写作中心</el-menu-item>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable
      size="small"
      class="input-size"
      suffix-icon="el-icon-search"
      >
    </el-input>
    <el-button type="primary" size="small">写文章</el-button>
    <header-login-button />
  </el-menu>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo'
import HeaderLoginButton from '@/components/Header/HeaderLoginButton'
import CategoryList from '@/components/Header/CategoryList'
export default {
  name: 'HeaderNav',
  components: {
    HeaderLogo,
    HeaderLoginButton,
    CategoryList
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    pushWrite () {
      this.$router.push('/article_manage')
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  padding-left: 300px;
  .el-menu-item:hover{
    background: #fff!important;
    color: #1e80ff!important;
  }
  .el-submenu__title:hover {
    background: #fff!important;
    color: #1e80ff!important;
  }
  .el-menu-item.is-active {
    background: #fff!important;
    color: #1e80ff!important;
  }
  .el-menu-item {
    height:100%!important;
    font-size: 16px;
    line-height:49px!important;
    padding:0 50px;
    border:0!important;
  }
  .input-size {
    width:200px;
    margin-left:-250px;
    margin-right:10px;
  }
}

</style>
