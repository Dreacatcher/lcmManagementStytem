<template>
  <section class="loginWp">
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">管理员登录</h3>
        <el-form-item prop="userName">
          <el-input type="text" v-model="account.userName" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="passwd">
          <el-input type="password" v-model="account.passwd" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
        </el-form-item>
    </el-form>
  </section>
</template>

<script>
import { userlogin } from '../../api/user'
export default {
  data() {
    return {
      loading: false,
      account: {
        userName: 'lcm',
        passwd: '123456'
      },
      rules: {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  methods: {
    handleLogin() {
      let _self = this
      _self.$refs.AccountFrom.validate(valid => {
        if (valid) {
          _self.loading = true
          let para = {
            userName: _self.account.userName,
            passwd: _self.account.passwd
          }
          userlogin(para, res => {
            let cod = res.status
            _self.loading = false
            if (cod !== 200) {
              if (res.data && res.data.message) {
                _self.$message.error(res.data.message)
                return false
              }
            } else {
              sessionStorage.setItem('access-user', JSON.stringify(res.data))
              _self.$router.push({ path: '/' })
            }
          })
        }
      })
    }
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all.scss';
/*body*/
.loginWp {
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: $white;
    border: 1px solid $btnClear;
    box-shadow: 0 0 25px $btnHover;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: $color555;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
