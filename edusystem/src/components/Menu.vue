<template>
<div class='qqq' v-if="this.$store.state.islogin">
  <el-menu
    default-active="/"
    background-color="white"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router='ture'
    text-color="rgba(10, 120, 8, 1)"
  >
    <el-menu-item index="/" class="menuCard">
      <template #title >班级管理<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Grades" class="menuCard">
      <template #title >班级空间<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Task" class="menuCard">
      <template #title >班级任务<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Completion" class="menuCard">
      <template #title >问卷完成情况<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Prevent" class="menuCard">
      <template #title >心理预防<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Forewarm" class="menuCard">
      <template #title>心理预警<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
    <el-menu-item index="/Information" class="menuCard">
      <template #title>教师信息<div class="tupian"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></div></template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name:'Menu',
  data(){
    return{
      
    }
  }
}
</script>

<style>
.qqq{
  width:350px;
  height: 700px;
  text-align: center;
  background-color:white;
  margin-top: 40px;
}
.qqq h2{
    color: rgba(10, 120, 8, 1);
}
.qqq li{
  display: flex;
  justify-content: space-between;
}
.tupian{
  display: flex;
  height:35px;
  width: 35px;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
  color: white;
  background-color: rgba(22, 196, 175, 1);
}
.tupian img{
  width:40px;
  height: 40px;
}
.MenuDivier{
  width: 250px;
}
.el-menu-item.menuCard{
  font-size: 40px;
  border-bottom: 1px solid rgba(166, 166, 166, 1);
}
.el-menu-item.menuCard .tupian{
  transform: rotate(0deg);
  transition: all 0.2s ease-out;
}
.el-menu-item.is-active.menuCard{
  color: rgba(10, 120, 8, 1);
}
.el-menu-item.is-active.menuCard .tupian{
  transform: rotate(-90deg);
  transition: all 0.2s ease-in;
  font-family: '演示秋鸿楷';
}
</style>