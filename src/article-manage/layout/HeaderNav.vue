<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#fff"
    text-color="#86909c"
    active-text-color="#1e80ff"
    router
    >
    <header-logo class="logo"/>
    <header-login-button class="btn"/>
  </el-menu>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo'
import HeaderLoginButton from '@/components/Header/HeaderLoginButton'
export default {
  name: 'HeaderNav',
  components: {
    HeaderLogo,
    HeaderLoginButton
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
  position: relative;
  .logo {
    position: absolute;
    left: 300px;
  }
  .btn {
    position: absolute;
    top: 10px;
    right: 350px;
  }
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
}

</style>
