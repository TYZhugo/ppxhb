<template>
  <div v-show="!$store.state.islogin">
      <div v-show="islogin" class="loginChoose">
          <h2>请选择您的身份：</h2>
          <button class="logbutton1" @click="teacher"><h2>我是教师</h2></button>
          <br/>
          <button class="logbutton2" @click="student"><h2>我是学生</h2></button>
      </div>
      <div class="login" v-show="isteacher">
            <div class="LoginContent">
            <h2>教师登录</h2>
            <input type="text"  placeholder="用户名(工号)" v-model="username"/>
            <br/>
            <input type="password"  placeholder="密码" v-model="password"/>
            <br/>
            <button class="LoginButton" @click="login">登录</button>
           </div>
           <div class="erweima">
            二维码区
           </div>
      </div>
        <div class="login" v-show="isstudent">
            <div class="LoginContent">
            <h2>学生登录</h2>
            <input type="text"  placeholder="用户名(学号)" v-model="username"/>
            <br/>
            <input type="password"  placeholder="密码" v-model="password"/>
            <br/>
            <button class="LoginButton" @click="login">登录</button>
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
            isstudent:false,
            isteacher:false,
            islogin:true,
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
        teacher(){
            this.isteacher=true
            this.islogin=false
        },
        student(){
            this.isstudent=true
            this.islogin=false
        }
    }
    
}
</script>

<style>
.login{
    width: 950px;
    line-height: 130px;
    margin: 150px 100px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 2px 1.5px 2px 1px gray;
    display: flex;
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
button:focus{
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
.loginChoose{
    text-align: center;
    width: 700px;
    margin: 35% 35%;
    background-color: white;
    border-radius: 5px;
}
.loginChoose button{
    width: 300px;
    height: 150px;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
    border: none;
}
.loginChoose h2{
    position: relative;
    left: -30%;
    top: 10px;
}
.erweima{
    width: 350px;
    height: 350px;
    background-color: gray;
    margin-top: 100px;
    margin-left: 120px;
    text-align: center;
    border-radius: 3px;
}
.logbutton1{
    background-color: rgb(241, 228, 253);
}
.logbutton2{
    background-color: rgb(196, 205, 255);
}
</style>