<template>
<div class='qqq'>
  <div class="ppp">
  <img :src="imgUrl1"/>
  
  </div>
  <h2>123</h2>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router='ture'
  >
    <el-menu-item index="/">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>我的班级</template>
    </el-menu-item>
    <el-menu-item index="/Build">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>创建试卷</template>
    </el-menu-item>
    <el-menu-item index="/Grades">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>成绩管理</template>
    </el-menu-item>
    <el-menu-item index="/">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>考试发布</template>
    </el-menu-item>
    <el-menu-item index="/Manage">
      <template #title><div class="tupian"><img :src="imgUrl2"></div>实时监控</template>
    </el-menu-item>
    <el-menu-item index="5">
      <template #title><div class="tupian"><img :src="imgUrl2"></div>判卷</template>
    </el-menu-item>
    <el-menu-item index="/Question">
      <template #title><div class="tupian"><img :src="imgUrl2"></div>我的题库</template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name:'Menu',
  data(){
    return{
      imgUrl1:require("../assets/touxiang.png"),
      imgUrl2:require("../assets/banji.png")
    }
  }
}
</script>

<style>
.qqq{
  width:300px;
  text-align: center;
}
.ppp{
  display: flex;
  height:200px;
  justify-content: center;
  align-items: center;
}
.ppp img{
  width:120px
}
.tupian{
  display: flex;
  background-color: rgb(5, 172, 228);
  height:45px;
  width: 45px;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10px;
}
.tupian img{
  width:40px;
  height: 40px;
}
</style>