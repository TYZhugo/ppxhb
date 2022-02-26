<template>
  <div >
      <div class='header'>
      <h1 class='system'>教师端</h1>
     </div>
      <div class="login">
        <input type="text"  placeholder="用户名" v-model="username"/>
        <br/>
        <input type="password"  placeholder="密码" v-model="password"/>
        <br/>
        <button @click="login">登录</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    components:{

    },
    methods:{
        login(){
            this.$store.commit('loginSuccess')
            this.$router.push('/')
        }
    }
    
}
</script>

<style>
.login{
    text-align: center;
    line-height: 70px;
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

</style>