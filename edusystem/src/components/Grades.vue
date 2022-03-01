<template>
  <div>
  <Header></Header>
  
  <div class="main">
  <Menu></Menu>
  <br/>
  <el-card class="box-card">
<div class="grades">
  <div v-for="item in this.list" v-bind:key="item" @click='123' class="ss"><a href="#"><img :src="imgUrl1"/><br/>{{item.attributes.classname}}</a></div>
</div>
</el-card>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
    name:'Grades',
    data(){
        return{
            imgUrl1:require('../assets/R-C (2).jpg'),
            list:{}
        }
    },
    components:{
        Header,
        Menu,
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
}
</script>

<style>
.grades img{
    width:150px;
    transition:width 2s ;
}
.grades{
    display: flex;
}

</style>