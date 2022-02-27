<template>
  <div >
      <div class='header'>
      <h1 class='system'>教师端</h1>
     </div>
     <div class="head">
         <img :src="imgUrl" class="picture"/>
      <div class="login">
        <input type="text"  placeholder="用户名(工号)" v-model="username"/>
        <br/>
        <input type="password"  placeholder="密码" v-model="password"/>
        <br/>
      </div>
      <button @click="login">登录</button>
     </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    components:{

    },
    data(){
        return{
            imgUrl:require('../assets/780.jpg')
        }
    },
    methods:{
        login(){
            let user={
                "username":this.username,
                "password":this.password
            }
            if(JSON.stringify(this.$store.state.Users).indexOf(JSON.stringify(user))!=-1){
            this.$store.commit('loginSuccess')
            this.$router.push('/')
            }else{
                alert('用户名或密码错误')
            }
            
        }
    }
    
}
</script>

<style>
.login{
    text-align: center;
    line-height: 230px;
}
.header{
    background-color:deepskyblue;
    width: 100%;
    height:140px;
}
.system{
    color:white;
    font-family: "宋体";
    padding-block-start: 23px;
}
.login input{
    width:320px;
    height: 50px;
}
 button{
    width:100px;
    height: 30px;
    border-radius: 10px;
}
button :focus{
    outline: none;
}
.head{
    text-align: center;
}
.head .picture{
    width:180px;
}
</style>