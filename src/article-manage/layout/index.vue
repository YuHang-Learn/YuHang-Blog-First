<template>
  <el-container class="container" style="height: 100%;">
    <el-header height="49px">
      <header-nav />
    </el-header>
    <el-main class="main">
      <el-card class="aside-card" :body-style="{ padding: '0px', height: '100%'}">
        <side-nav class="aside-bar" />
      </el-card>
      <el-card class="main-card">
        <router-view />
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import SideNav from './SideNav.vue'
export default {
  name: 'Index',
  components: {
    HeaderNav,
    SideNav
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  background-color: #fff;
  opacity: .8;
}

.container {
  position: relative;
  .main {
    overflow: visible;
    display:flex;
    justify-content: center;
    position: absolute;
    top: 49px;
    left: 350px;
    right: 350px;
    bottom: 0;
    margin-top:10px;
    padding: 0;
    .aside-card {
      flex:1.2;
      height: 100%;
      margin-right: 5px;
      opacity: .8;
      .aside-bar {
        height: 100%;
      }
    }
    .main-card {
      flex:5;
      opacity: .8;
    }
  }
}

</style>
