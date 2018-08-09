<template>

  <div class="container">
    <div class="row clearfix">
      <h1>用户登录</h1>
      <input type="text" placeholder="用户名" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
      <input type="button" value="提交" v-on:click="doLogin">
    </div>
  </div>
  <!--<div>-->
    <!---->
  <!--</div>-->
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods:{
      doLogin(){
        //向后台发送ajax请求
        let that = this
        this.$axios.request({
          url:'http://127.0.0.1:8000/api/v1/auth/',
          method:'POST',
          data:{
            user:this.username,
            pwd:this.password,
          },
          headers:{
            'Content-Type': 'application/json',
            'xxxxx':123,
          },
          responseType:'json'
        }).then(function (arg) {
          // 成功之后
          console.log("成功")
          // if (arg.data.code === 1000){
          //   console.log(arg.data.data);
          // }else {
          //   alert(arg.data.error);
          // }
        }).catch(function (err) {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>
