<template>
  <div class="questionshowcard">
      <p v-for="item in this.list" v-bind:key="item">{{item.attributes.question}}</p>
  </div>
</template>

<script>
export default {
    name:'Queationshow',
    data(){
        return{
            style:this.$route.query.style,
            content:this.$route.query.content,
            list:{}
        }
    },
    methods:{
        
    },
      created:function(){

      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const query=new AV.Query('questions');
      query.lessThan('id',300);
      query.find().then((questions)=>{
        console.log(questions)
        this.list=questions
      })
      console.log(this.list)
    
  }
}
</script>

<style>
.questionshowcard{
    margin-left: 60px;
    margin-top: 50px;
    border-radius: 10px;
    width: 700px;
    height: 700px;
    text-align: center;
    background-color: white;
}
</style>