<template>
  <div class="Login">
    <div class="Login-square"></div>
    <div class="Login-r"></div>
    <div class="Login-w">
      <el-input v-model="username" placeholder="用户名" />
      <br/>
      <el-input v-model="passward" placeholder="密码" />
      <br/>
      <el-button type="info" plain @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import request from '../request'
export default {
    name:'Login',
    data(){
      return{
        username:'',
        passward:''
      }
    },
    methods:{
      login(){
        /* 
        let user={
          username:this.username,
          passward:this.passward
        }
        */
        request({
          url:'',//这个地方你可以空着,下面的params是get的传参
          params:{
            location:'北京',
            key:"d728fc13d1034790be79e8098737ef3a"
          }
        }).then(res=>{   //数据接受成功就能跳转，到时候我再改吧
          console.log(res)
          this.$store.commit('LoginSuccess')
          this.$router.push('/')
        })
      }
    }
}
</script>

<style>
.Login{
    display: flex;
    justify-content: center;
    align-self: center;
    margin-left: 230px;
    margin-top: 10%;
}
.Login-square{
    width: 500px;
    height: 500px;
    background-color: rgb(9, 156, 152);
    border-radius: 20px;
    z-index: 1;
}
.Login-r{
  background-color: rgb(9, 156, 152);
  width: 300px;
  height: 500px;
  border-radius: 50%;
  position: relative;
  left: -160px;
  z-index: 1;
}
.Login-w{
  border: 2px solid rgb(187 187 187);
  height: 400px;
  width: 600px;
  position: relative;
  left: -300px;
  top: 50px;
  border-radius: 40px;
  z-index: 0;
  background-color: white;
}
.el-input{
  width:300px ;
  margin-top: 50px;
  position: relative;
  right: -250px;
}
.Login-w button{
  margin-top:50px ;
  position: relative;
  right: -250px;
}
</style>