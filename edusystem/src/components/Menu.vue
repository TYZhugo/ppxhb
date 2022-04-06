<template>
<div class='qqq' v-if="this.$store.state.islogin">
  <div class="ppp">
  <img :src="imgUrl1"/>
  </div>
  <h2>陈亦可</h2>
  <hr/>
  <el-menu
    default-active="/"
    background-color="rgb(100, 45, 151)"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router='ture'
    text-color="white"
    active-text-color="white"
  >
    <el-menu-item index="/" class="menuCard">
      <template #title ><div class="tupian"><img :src="imgUrl2"></div>我的班级</template>
    </el-menu-item>
    <el-menu-item index="/Grades" class="menuCard">
      <template #title ><div class="tupian"><img :src="imgUrl3"></div>成绩管理</template>
    </el-menu-item>
    <el-menu-item index="/Question" class="menuCard">
      <template #title ><div class="tupian"><img :src="imgUrl4"></div>我的题库</template>
    </el-menu-item>
    <el-menu-item index="/Jiankong" class="menuCard">
      <template #title ><div class="tupian"><img :src="imgUrl5"></div>实时监控</template>
    </el-menu-item>
    <el-menu-item index="/Exam" class="menuCard">
      <template #title><div class="tupian"><img :src="imgUrl6"></div>考试发布</template>
    </el-menu-item>
    <el-menu-item index="/Build" class="menuCard">
      <template #title><div class="tupian"><img :src="imgUrl7"></div>创建试卷</template>
    </el-menu-item>
    <el-menu-item index="/Manage" class="menuCard">
      <template #title><div class="tupian"><img :src="imgUrl8"></div>批改卷子</template>
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
      imgUrl4:require("../assets/question.png"),
      imgUrl5:require("../assets/manager.png"),
      imgUrl6:require("../assets/fabu.png"),
      imgUrl7:require("../assets/chuangjian.png"),
      imgUrl8:require("../assets/pigai.png")
      
    }
  }
}
</script>

<style>
.qqq{
  width:300px;
  height: 760px;
  text-align: center;
  background-color: rgb(100, 45, 151);

}
.ppp{
  display: flex;
  width: 300px;
  height:160px;
  justify-content: center;
  align-items: center;
}
.qqq h2{
    color: white;
}
.ppp img{
  width:90px
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
.el-menu-item.is-active.menuCard{
  background-color: rgb(80, 6, 129) !important;
  border-left: 4px solid sandybrown;
}
</style>