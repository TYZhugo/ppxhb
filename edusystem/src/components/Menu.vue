<template>
<div class='qqq'>
  <div class='ppp'>
    <div class='picture'></div>
    <ul class="menu">
      <li><router-link to="/Exam" >我的班级</router-link></li>
      <li>我的考试</li>
      <li>我的成绩</li>
      <li>自主检测</li>
      <li>错题重选</li>
      <li>我的日程</li>
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