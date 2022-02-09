<template>
<div>
    <input type="text"  placeholder="用户名" v-model="username"/>
    <br/>
    <input type="password"  placeholder="密码" v-model="password"/>
    <br/>
    <button @click="login">登录</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:''
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
        },
        register(){
            this.$router.push({path:'/Register'})
        }
    }
}
</script>

<style>

</style>