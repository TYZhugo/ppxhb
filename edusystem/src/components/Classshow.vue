<template>
  <div>
    <el-page-header @back="goBack" />
  <el-descriptions
    title="班级人员名单"
    direction="vertical"
    :column="6"
    class="students"
  >
  <div v-for="item in this.list" v-bind:key="item">
    <el-descriptions-item label="姓名" width="100px">{{item.attributes.name}}</el-descriptions-item>
    <el-descriptions-item label="班级" width="100px">软件2101</el-descriptions-item>
    <el-descriptions-item label="学号" :span="2" width="150px">100001</el-descriptions-item>
    <el-descriptions-item label="目前考试情况" width="100px">
      <el-tag size="large">良好</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="给老师留言" width="300px">无</el-descriptions-item>
  </div>
  </el-descriptions>
  <p>{{classid}}</p>
  </div>
</template>

<script>
export default {
    name:"Classshow",
    data(){
        return{
          list:{},
          classid:this.$route.query.classid
        }
    },
    methods:{
        goBack(){
          this.$router.push('/')
        }
    },
    created:function(){
    var x=this.classid
      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const query=new AV.Query(x);
      query.lessThan('id',300);
      query.find().then((classes)=>{
        console.log(classes)
        this.list=classes
      })
      console.log(this.list)
    
  },
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