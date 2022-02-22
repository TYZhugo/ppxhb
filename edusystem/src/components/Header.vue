<template>
  <div class='header'>
      <h1 class='system'>学生端</h1>
      <div>

        <Dropdown title="个人中心" :items="serves" class="dropdown"/>
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
            imgUrl:require("../assets/image.png"),
            serves:[
                {
                    title:'切换账号',
                    link:'#'
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
.header{
    background-color:deepskyblue;
    width: 100%;
    height:140px;
}
.system{
    color:white;
    font-family: "宋体";
}
.dropdown{
    float:right;
}
.CSD{
    width:4%;
    float: right;
}

</style>