<template>
  <div>
    <el-page-header @back="goBack" />
  <el-descriptions
    title="班级人员名单"
    direction="vertical"
    :column="6"
    class="students"
  >
    <el-descriptions-item label="姓名" width="100px">张三</el-descriptions-item>
    <el-descriptions-item label="班级" width="100px">软件2101</el-descriptions-item>
    <el-descriptions-item label="学号" :span="2" width="150px">100001</el-descriptions-item>
    <el-descriptions-item label="目前考试情况" width="100px">
      <el-tag size="large">良好</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="给老师留言" width="300px">无</el-descriptions-item>
    <el-descriptions-item label="姓名">李四</el-descriptions-item>
    <el-descriptions-item label="班级">软件2101</el-descriptions-item>
    <el-descriptions-item label="学号" :span="2">100002</el-descriptions-item>
    <el-descriptions-item label="目前考试情况">
      <el-tag size="large" type="warning">及格</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="给老师留言">无</el-descriptions-item>
  </el-descriptions>
  
  </div>
</template>

<script>
export default {
    name:"Classshow",
    data(){
        return{
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
.students{
    margin-left: 50px;
    border-radius: 3px;
}
.students table{
    margin-top: 5px;
    border-radius: 3px;
}
</style>