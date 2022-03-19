<template>
  <div class="correctface">
    <el-page-header @back="goBack" />
    <el-button type="primary" plain>保存</el-button>
    <el-button type="success" plain>批阅完成</el-button>
      <ul  class="infinite-list" style="overflow: auto">
    <li v-for="i in 20" :key="i" class="infinite-list-item"><div class="studentAnswer">{{ i }}、学生提交的题目答案和学生的姓名学号</div> <div> <span>此题得分：</span><el-input-number  :precision="2" :step="0.1" :max="10" /><el-input v-model="input" placeholder="留言" clearable /></div></li>
  </ul>
  </div>
</template>

<script>
export default {
    name:'Correct',
    methods:{
        goBack(){
            this.$router.push('/Manage')
        }
    }
}
</script>

<style>
.correctface{
    margin-left: 20px;
}
.infinite-list {
  height: 700px;
  width: 800px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.studentAnswer{
    width: 600px;
    height: 200px;
    background-color: darkgrey;
}
</style>