<template>
<div>
  <Header></Header>
<div class='main'>
<div class='menu'>
  <Menu></Menu>
</div>
<el-card class="box-card">
<div class="classs">
  <div v-for="item in this.list" v-bind:key="item" @click='123' class="ss"><a href="#"><img :src="imgUrl1"/><br/>{{item.attributes.classname}}</a></div>
</div>
<el-affix position="bottom" :offset="20">
<el-button type="primary" round class="ww"><svg class="icon" width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-042ca774=""><path fill="currentColor" d="M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"></path></svg>添加班级</el-button>
</el-affix>
</el-card>
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
.box-card{
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  height: 730px;
}
.main{
  display: flex;
}

.menu{
width:300px;
background-color: white;
height:595px;
}
.classs img{
  width:150px
}
.classs{
  display: flex;
  flex-wrap: wrap;
  width:800px;
  height: 670px;
}
.ss{
  text-align: center;
  margin-left: 50px;
}
</style>
