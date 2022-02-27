<template>
<div class='qqq'>
  <div class='ppp'>
    <div class='picture'>
      <img :src="imgUrl"/>
    </div>
    <ul class="menu">
      <li><router-link to="/" >我的班级</router-link></li>
      <li><router-link to="">创建试卷</router-link></li>
      <li><router-link to="/Grades">成绩管理</router-link></li>
      <li><router-link to="/Exam">考试发布</router-link></li>
      <li><router-link to="">实时监控</router-link></li>
      <li><router-link to="">判卷</router-link></li>
      <li><router-link to="/Question">我的题库</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name:'Menu',
  data(){
    return{
      imgUrl:require("../assets/head.png")
    }
  }
}
</script>

<style>
.ppp .picture{
  width: 300px;
  height:180px;
  background-color: rgb(211, 209, 209);
  text-align: center;
}
.qqq{
  width:300px;
  display:table;
}
.ppp{
  width:300px;
  display: table-cell;
}
.menu li{
  width:300px;
  line-height: 60px;
}
.menu a{
  text-decoration: none;
  display: block;
  width:300px;
  text-align: center;
}
.ppp ul li a:hover{
  cursor: pointer;
  background-color:aliceblue;
  color:blue;
}
</style>