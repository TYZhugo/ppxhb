<template>
<div>
  <Header></Header>
<div class='main'>
<div class='menu'>
  <Menu></Menu>
</div>
<div>
<div class="classs">
  <div v-for="item in this.list" v-bind:key="item" @click='123' class="ss"><a href="#"><svg class="icon" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M288 320a224 224 0 10448 0 224 224 0 10-448 0zm544 608H160a32 32 0 01-32-32v-96a160 160 0 01160-160h448a160 160 0 01160 160v96a32 32 0 01-32 32z"></path></svg><br/>{{item.attributes.classname}}</a></div>
</div>
<el-affix position="bottom" :offset="20">
<el-button type="primary" round class="ww"><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"></path></svg>添加班级</el-button>
</el-affix>
</div>
</div>
</div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
  name: 'App',
  data(){
    return{
      imgUrl1:require('../assets/R-C (2).jpg'),
      list:{}
    }
  },
  components: {
    Header,
    Menu
  },
  
  created:function(){

      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const query=new AV.Query('class');
      query.lessThan('id',300);
      query.find().then((classes)=>{
        console.log(classes)
        this.list=classes
      })
      console.log(this.list)
    
  },
  methods:{
    
    
  }
  
}

</script>

<style>
.main{
  display: flex;
}

.menu{
width:300px;
background-color: white;
height:760px;
}
.classs img{
  width:150px
}
.classs{
  display: flex;
  flex-wrap: wrap;
  width:800px;
  height: 670px;
  margin-top: 13px;
  margin-left: 50px;
}
.ss{
  text-align: center;
  background-color: white;
  margin-left: 40px;
  margin-top: 30px;
  height: 150px;
  width: 225px;
  border-radius: 10px;
}
</style>
