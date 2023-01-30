<template>
  <div class="Completion">
    <div class="Completion_Header">
        <div>已完成</div>
        <el-divider direction="vertical" />
        <div>未完成（点击提醒）</div>
    </div>
    <div v-for="(i) in 6" :key="i"><img :src="imgUrl" alt="空空如也"></div>
  </div>
</template>

<script>
export default {
    name:'Completion',
    data(){
      return{
        imgUrl:require('../assets/StudentsHeader.png')
      }
    }
}
</script>

<style>
.Completion_Header{
  font-size: 48px;
  color: rgba(42, 130, 228, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 700px;
  margin-left: 80px;
  border: 1px solid rgba(166, 166, 166, 1);
  height: 100px;
  border-radius: 30px;
}
</style>