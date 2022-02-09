<template>
  <div>
    <input type="text"  placeholder="用户名" v-model="username"/>
    <br/>
    <input type="text"  placeholder="密码" v-model="password"/>
    <br/>
    <button @click="register">注册</button>
  </div>
</template>

<script>
export default {
    name:'Register',
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
        register(){
          if(this.username.length==0||this.password.length==0){
            alert('用户名或密码不能为空！！！')
          }else{
            let user={
              "username":this.username,
              "password":this.password
            }
            this.$store.commit('newBuiltUser',user)
            console.log(this.$store.state.Users)
            this.$router.push({
              path:'/Login'
            })
          }
        }
    }
}
</script>

<style>

</style>