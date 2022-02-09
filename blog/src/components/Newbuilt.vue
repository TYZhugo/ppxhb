<template>
  <div>
    <h2>标题：</h2>
    <input v-model="headline"/>
    <p>{{this.headline}}</p>
    <h2>内容</h2>
    <textarea v-model="content" class="aa"></textarea>
    <br/>
    <button @click="preserve">新建</button>
  </div>
</template>

<script>
export default {
    name:'Newbuilt',
    data(){
      return{
          headline:'',
          content:''
      }
    },
    methods:{
      
      preserve(){
          if(this.headline.length==0){
            alert("标题不能为空!!!")
          }else{
          const AV = require('leancloud-storage');
          AV.init({
            appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
            appKey: "vky0hDUeQiaK50ay78CsgMBz",
            serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
          });
          const blog=AV.Object.extend('blog');
          const bblog= new blog();
          bblog.set('headline',this.headline);
          bblog.set('content',this.content);
          bblog.save().then(function(){
            console.log('保存成功')
          })
          this.$router.push({path:'/'});
        }
      }
    },
}
</script>

<style>
.aa{
    width:800px;
    height:500px;
}
</style>