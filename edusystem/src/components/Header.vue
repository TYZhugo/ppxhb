<template>
  <div class='header'>
      <h1 class='system'>教师端</h1>
      <div class="headers">
          <div id="picture">
          <img :src="imgUrl" />
          <h2 >客服</h2>
          </div>
        <Dropdown  class="dropdown"/>
      </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    components:{
        Dropdown
    },
    data(){
        return {
            imgUrl:require("../assets/kefu.png"),
            serves:[
                {
                    title:'切换账号',
                    link:'./Login.vue',
                },
                {
                    title:'版本更新',
                    link:'#'
                },
                {
                    title:'个人设置',
                    link:'#'
                },
                {
                    title:'退出登录',
                    link:'#'
                }
            ]
        }
    }
}
</script>

<style>
#picture{
    float: right;
    width:50px;
    margin-right: 60px;
    margin-top: 80px;
    color: white;
    font-family: '宋体';
}
.header{
    background-color:deepskyblue;
    width: 680px;
    height:140px;
    border-radius: 15px 15px 0 0;
    display: flex;
}
.system{
    color:white;
    font-family: "宋体";
    padding-block-start: 23px;
    width: 980px;
}
.dropdown{
    float:right;
    margin-top: 50px;
}
.headers{
    display:flex;
    align-items: center;
    justify-content: flex-end;
}
</style>