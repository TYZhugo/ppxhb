<template>
  <div >
     <div class="head">
      <div class="login">
            <div class="LoginContent">
            <h2>教师登录</h2>
            <input type="text"  placeholder="用户名(工号)" v-model="username"/>
            <br/>
            <input type="password"  placeholder="密码" v-model="password"/>
            <br/>
            <button class="LoginButton" @click="login">登录</button>
            </div>
      </div>
      
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
    line-height: 130px;
    margin: 150px 100px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 2px 1.5px 2px 1px gray;
}
.login input{
    width:320px;
    height: 40px;
    border-radius: 25px;
    outline: none;
    border: 1px solid gray;
}
.login h2{
    font-family: "宋体";
}
button :focus{
    outline: none;
}
button:hover{
    cursor: pointer;
}
.LoginButton{
    width: 320px;
    height: 40px;
    background-color: rgb(98, 0, 128);
    color: white;
    border-radius: 20px;
    border: none;
}
.LoginContent{
    margin-left: 50px;
}
</style>