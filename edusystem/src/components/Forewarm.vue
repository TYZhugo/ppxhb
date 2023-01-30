<template>
  <div class="Forewarm">
    <p>预警通知</p>
    <div class="Warm_Content">
        <div class="Warm_Header">
        <span>姓名</span>
        <span>位置</span>
        <span>预警词汇</span>
    </div>
    <div style="height:550px ; overflow:auto;">
    <div v-for="(item,index) in list" :key="index" class="studentsList" ><img :src="imgUrl" alt="空空如也" /><p>{{item.attributes.name}}</p></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'/Forewarm',
    data(){
        return{
            imgUrl:require('../assets/StudentsHeader.png'),
            list:{}
        }
    },
    created:function(){
      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const query=new AV.Query('class1');
      query.lessThan('id',300);
      query.find().then((classes)=>{
        console.log(classes)
        this.list=classes
      })
      console.log(this.list)
    
  }

}
</script>

<style>
.Warm_Content{
    border: 1px solid black;
    height: 600px;
    margin-left: 20px;
}
.Warm_Header{
    display: flex;
    justify-content: space-around;
    width: 700px;
    color: rgba(212, 48, 48, 1);
    font-size: 36px;
    margin-left: 70px;
}
.Forewarm{
    color: rgba(212, 48, 48, 1);
    font-size: 36px;
}
.studentsList{
    color: black ;
    font-size: 20px;
    display: flex;
    align-items: center;
}
.studentsList p{
    margin-left: 40px;
}
</style>