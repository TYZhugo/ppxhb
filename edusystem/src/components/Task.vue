<template>
  <div class="Task">
    <button class="Task-header">新建任务</button>
    <div class="taskNewBulid">
      <p>任务名称：<el-input></el-input></p>
      <p>开始时间：
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="开始日期"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
      <el-time-picker v-model="value1" placeholder="开始时间" />
      </p>
      <p>截止时间：
        <el-date-picker
        v-model="value2"
        type="date"
        placeholder="结束日期"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
        <el-time-picker v-model="value1" placeholder="结束时间" /></p>
      <p>内容：</p>
    </div>
    <button class="Task-header">已发布</button>
    <div class="Publish">
      <span>xxx</span>
      <span>10人已完成</span>
      <button>撤回</button>
      <button>重新编辑</button>
    </div>
    <button class="Task-header">未发布</button>
    <div class="unPublish">
      <span>xxx</span>
      <button>发布</button>
      <button>继续编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'Task',
  data(){
    return{
      value1:''
    }
  }
}
</script>

<style>
.Task{
  font-size: 36px;
  margin-left: 20px;
}
.Task .Task-header{
  width: 220px;
  height: 58;
  border-radius: 29px;
  border: 1px solid rgba(166, 166, 166, 1);
  background-color: white;
  color: rgba(128, 128, 128, 1);
  font-size: 20px;
}
.taskNewBulid{
  border: 1px solid rgba(42, 130, 228, 1);
  width: 110%;
  margin-top: 10px;
  color: rgba(42, 130, 228, 1);
}
.Publish{
  border: 1px solid rgba(42, 130, 228, 1);
  width: 110%;
  margin-top: 15px;
  color: rgba(42, 130, 228, 1);
}
.Publish  button{
  float: right;
  margin-top: 8px;
  font-size: 20px;
}
.unPublish{
  border: 1px solid rgba(42, 130, 228, 1);
  width: 110%;
  margin-top: 15px;
  color: rgba(42, 130, 228, 1);
}
.unPublish button{
  float: right;
  margin-top: 8px;
}
</style>