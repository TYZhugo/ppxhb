<template>
  <div>
  
  <div class="main">
<div class="classs">
   <div v-for="item in this.list" v-bind:key="item" @click='showgrades' class="ss"><div class="homeImg"><img :src="imgUrl1"></div>{{item.attributes.classname}}</div>
</div>
  </div>
</div>
</template>

<script>
export default {
    name:'Grades',
    data(){
        return{
            imgUrl1:require('../assets/classpicture.png'),
            list:{}
        }
    },
    methods:{
      showgrades(){
        this.$router.push('/Gradeshow')
      }
    },
    components:{
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