<template>
  <el-dropdown class="dropdown" trigger="click">
    <el-image style="border-radius: 50%" :src="require('@/assets/image/logo.png')" alt="" fit="contain"></el-image>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item @click.native="outLogin">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'HeaderInfo',
  data () {
    return {
      url: '@/assets/image/logo.png'
    }
  },
  methods: {
    outLogin () {
      sessionStorage.removeItem('userInfo')
      this.$store.commit('deleteInfo')
      this.$router.go(0)
    }
  }
}
</script>

<style lang="less" scoped>
.el-image {
  width: 50px;
  height: 50px;
  overflow: visible;
  margin-left: 5px;
}
.image-radius {
  border-radius: 50%!important;
}
</style>
