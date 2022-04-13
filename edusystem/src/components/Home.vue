<template>
<div>
<div class='main'>
<div>
<div class="classs" v-if="!dialogVisible">
  <div v-for="item in this.list" v-bind:key="item" @click="classcontent(item.attributes.classid)" class="ss" ><div class="homeImg"><img :src="imgUrl1"></div>{{item.attributes.classname}}</div>
</div>
<el-button round class="ww" @click="dialogVisible=true"><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"></path></svg>添加班级</el-button>
</div>
</div>
<el-dialog
    v-model="dialogVisible"
    title="添加班级"
    width="30%"
    :before-close="handleClose"
    class="addface"
    draggable
  >
    <span>班级名称：</span>
    <input v-model="classname">
    <br/>
    <br/>
    <span>班级人数：</span>
    <input type="number" v-model="classnumber">
    <br/>
    <br/>
    <span>班级编号：</span>
    <input v-model="classid">
    <br/>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button  @click="addclass" color="#626aef" plain>添加</el-button>
      </span>
    </template>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      imgUrl1:require('../assets/classpicture.png'),
      list:{},
      dialogVisible:false,
      classname:'',
      classnumber:'',
      x:'class'
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
    addclass(){
      this.dialogVisible = false
      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
        const newclass=new AV.Object.extend('class')
        const nnclass=new newclass()
        nnclass.set('classname',this.classname)
        nnclass.save().then(function(){
          console.log('保存成功')
          })
        const classlist =new AV.Query('class');
        classlist.lessThan('id',300);
        classlist.find().then((classlists)=>{
        this.list=classlists
        console.log(classlists)
      })
    },
    classcontent(classid){
      this.$router.push({
        path:'/Classshow',
        query:{
          "classid":classid
        }
        })
    }
  }
  
}

</script>

<style>
.main{
  display: flex;
}
.ww{
margin-left: 900px;
}
.menu{
width:300px;
background-color: white;
height:760px;
}
.classs img{
  width:90px

}
.classs{
  display: flex;
  flex-wrap: wrap;
  width:800px;
  height: 670px;
  margin-top: 13px;
  margin-left: 50px;
  align-content: flex-start;
}
.ss{
  text-align: center;
  margin-left: 40px;
  height: 130px;
  margin-top: 50px;
  width: 225px;
  border-radius: 10px;
  border: 0.5px solid gray;
}
.homeImg{
  display: flex;
  background-color: white;
  width: 225px;
  height: 130px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.addface input{
  margin-top: 60px;
  line-height: 20px;
}
</style>
