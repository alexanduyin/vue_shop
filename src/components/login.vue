<template>
  <div class="login_container">
   <div class="login_box">
     <!-- 标题logo -->
     <div class="logo_box">
       <img src="../assets/logo.png" alt="抱歉">
     </div>
    <el-form ref="loginFormRef" :rules="loginFormRules" :model="loginForm" label-width="0px" class="login_form">
    <!-- 用户名框 -->
    <el-form-item prop="username">
    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
    </el-form-item>
    <!-- 密码框 -->
    <el-form-item prop="password">
    <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-eleme"></el-input>
    </el-form-item>
    <!-- 按钮区域 -->
    <el-form-item class="btns">
    <el-button type="primary" @click="loginHome">登录</el-button>
    <el-button type="info" @click="loginFormReset">重置</el-button>
    </el-form-item>
    </el-form>
   </div>
  </div>
  
</template>

<script>
export default {
    name:'login',
    data(){
      return {
       loginForm :{
          username:'zss',
          password:'123123'
        },
        loginFormRules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 10, message: 'mima长度在 3 到 10 个字符', trigger: 'blur'}
          ],  
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: 'mima长度在 6 到 15 个字符', trigger: 'blur'}
          ]
      }
    }
},
  methods : {
    loginFormReset(){
      this.$refs.loginFormRef.resetFields();
    },
    loginHome () {
      // this.$refs.loginFormRef.validate(async valid=>{
      //   if(!valid) return;
      //   const {data:res}=await this.$http.post('login',this.loginForm);
      //   if(res.meta.status!==200) return this.$message.error('登录失败');
      //   /* 因为登录成功的代码是200，不是200的话说明登录失败 */
      //   this.$message.success('登录成功')
      //   window.sessionStorage.setItem("token",res.data.token)
      //   /* 当登录成功后，服务器返回data的值包含token的身份令牌，存储至window的sessionstorage中 */
       this.$router.push("/home")
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 3px;
  transform: translate(-50%,-50%);

  .logo_box {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid #eeeeee;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 10px;
    background-color:gold;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding:0px 20px;
    box-sizing: border-box;
    margin: 10px auto;
  }
  .login_input {
    margin: 10px !important;
  }
}
</style>