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
    margin-left: 60px;
    color: white;
    font-family: '宋体';
}
.header{
    width: 680px;
    height:140px;
    border-radius: 15px 15px 0 0;
    display: flex;
    background-color: white;
}
.system{
    color:white;
    font-family: "宋体";
    width: 980px;
    margin-left: 20px;
    color: deepskyblue;
}
.dropdown{
    float:right;

}
.headers{
    display:flex;
    align-items: center;
    justify-content: flex-end;
}

</style>