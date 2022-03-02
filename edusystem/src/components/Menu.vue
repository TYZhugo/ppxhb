<template>
<div class='qqq'>
  <div class="ppp">
  <img :src="imgUrl1"/>
  </div>
  <h2>123</h2>
  <hr/>
  <el-menu
    default-active="2"
    background-color="#909399"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router='ture'
    text-color="white"
    active-text-color="#303133"
  >
    <el-menu-item index="/">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>我的班级</template>
    </el-menu-item>
    <el-menu-item index="/Grades">
      <template #title ><div class="tupian"><img :src="imgUrl3"></div>成绩管理</template>
    </el-menu-item>
    <el-menu-item index="/Question">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>我的题库</template>
    </el-menu-item>
    <el-menu-item index="/">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>实时监控</template>
    </el-menu-item>
    <el-menu-item index="/Manage">
      <template #title><div class="tupian"><img :src="imgUrl6"></div>考试发布</template>
    </el-menu-item>
    <el-menu-item index="Build">
      <template #title><div class="tupian"><img :src="imgUrl7"></div>创建试卷</template>
    </el-menu-item>
    <el-menu-item index="/">
      <template #title><div class="tupian"><img :src="imgUrl2"></div>批改卷子</template>
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
      imgUrl2:require("../assets/banji.png"),
      imgUrl3:require("../assets/guanli.png"),
      imgUrl6:require("../assets/fabu.png"),
      imgUrl7:require("../assets/chuangjian.png")
      
    }
  }
}
</script>

<style>
.qqq{
  width:300px;
  height: 760px;
  text-align: center;
  background-color: #909399;

}
.ppp{
  display: flex;
  width: 300px;
  height:160px;
  justify-content: center;
  align-items: center;
}
.ppp img{
  width:120px
}
.tupian{
  display: flex;
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
.MenuDivier{
  width: 250px;
}
.qqq hr{
  align-content: center;
  width: 250px;
  color: white;
}
</style>