<template>
  <el-container class="container">
    <el-header height="49px">
      <header-nav />
    </el-header>
    <el-container>
      <el-aside width="450px"></el-aside>
        <el-main>
          <el-card class="card">
          <router-view/>
          </el-card>
        </el-main>
      <el-aside width="450px"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
import HeaderNav from '@/components/Header/HeaderNav.vue'
export default {
  name: 'Index',
  components: {
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
.el-header {
  position: fixed;
  top: 0;
  width: 100%;
  color: #333;
  text-align: center;
  line-height: 49px;
  padding:0;
  opacity: .8;
  z-index: 2;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}
.el-main {
  overflow:visible;
  padding: 0;
  .card {
    position: relative;
    height:100%;
    width:100%;
    margin-top:60px;
    opacity: .8;
    .el-main {
      height: 100%;
      background-color: #f4f5f5;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }
}

.el-card /deep/ .el-card__body {
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}

.container {
  height: 100%;
  .nav-height {
    height: 49px;
  }
}
</style>
