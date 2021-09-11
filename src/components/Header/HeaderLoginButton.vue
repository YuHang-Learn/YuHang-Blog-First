<template>
  <el-button type="primary" plain size="small" @click="Login">登录</el-button>
</template>

<script>
export default {
  name: 'HeaderLoginButton',
  methods: {
    Login () {
      this.$router.push('/login')
    }
  }
}
</script>
