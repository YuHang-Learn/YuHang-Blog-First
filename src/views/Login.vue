<template>
  <el-card class="card">
    <h1>登录</h1>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="form" label-width="80px">
      <el-form-item label="用户名:" class="form-input" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入邮箱/手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码:" class="form-input" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button class="btn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { Login } from '@/api/login'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入邮箱/手机号', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (!(/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value))) {
                callback(new Error('请输入正确的邮箱/手机号格式'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不低于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          Login(this.loginForm).then((res) => {
            this.$store.commit('setInfo', res.data)
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$router.push('/')
          })
        } else {
          this.$message.error('登录失败！')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 400px;
  margin: auto;
  opacity: .8;
  border-radius: 10%;
  h1 {
    margin-bottom: 50px;
  }
  .form {
    width: 400px;
    .el-form-item {
      margin-bottom: 40px;
    }
    .btn {
      margin-left: 85px;
    }
  }
}
.el-card /deep/ .el-card__body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
