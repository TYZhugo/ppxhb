<template>
<div>
<div class='main'>
<div class="main-information" v-if="!dialogVisible"> 
    <div>学校： {{classInformation.school}} <button @click="changeclass">编辑班级信息</button></div>
    <div>班级： {{classInformation.class}}</div>
    <div>专业： {{classInformation.profession}}</div>
    <div>班级人数： {{classInformation.number}}</div>
    <div >班级成员：   <button>管理班级成员</button></div>

      <div class="Member">
    <div class="classMembers" v-for="(item,index) in list" :key="index">{{item.attributes.name}}</div>
  </div>

</div>
<div class="class-information" v-if="dialogVisible">
  <p>学校：<el-input v-model="classInformation.school" placeholder="Please input" /></p>
  <p>班级：<el-input v-model="classInformation.class" placeholder="Please input" /></p>
  <p>专业：<el-input v-model="classInformation.number" placeholder="Please input" /></p>
  <button @click="finishclass">保存</button>
</div>
</div>
</div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'App',
  data(){
    return{
      list:{},
      dialogVisible:false,
      x:'class1',
      classInformation:{
        school:'天津工业大学',
        class:'2102班',
        profession:'XX',
        number:'30'
      }
    }
  },
  components: {
  },
  
  created:function(){
    var x=this.x
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
  methods:{
    changeclass(){
      this.dialogVisible = !this.dialogVisible
    },
    finishclass(){
      this.dialogVisible = !this.dialogVisible
      ElMessage({
        message:'保存成功',
        type:'success'
      })
    }
  }
  
}

</script>

<style>
.main{
  display: flex;
}
.Member{
  height: 300px;
  width: 700px;
  overflow: auto;
}
.main-information{
  background-color: white ;
  font-size: 40px;
  font-weight: 400;
  margin-left:48px ;
  margin-top: 20px;
}
.main-information button{
  float: right;
  border: 1px solid gray;
  border-radius: 15px;
  width: 180px;
  height: 30px;
  background-color: white;
}
.classMembers{
  border-top: 1px solid gray;
}
</style>
