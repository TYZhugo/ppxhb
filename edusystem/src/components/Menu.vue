<template>
<div class='qqq'>
  <div class='ppp'>
    <div class='picture'></div>
    <ul class="menu">
      <li><router-link to="/Exam" >我的班级</router-link></li>
      <li><router-link to="">创建试卷</router-link></li>
      <li><router-link to="">成绩管理</router-link></li>
      <li><router-link to="">考试发布</router-link></li>
      <li><router-link to="">实时监控</router-link></li>
      <li><router-link to="">判卷</router-link></li>
      <li><router-link to="">我的题库</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.picture{
  width: 300px;
  height:180px;
  background-color: white;
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