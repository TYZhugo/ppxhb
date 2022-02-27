<template>
<div class='wee'>
  <button @click="newbuilt">新建博客</button>
  <div class="ep">
  <h2 v-for="item in this.list" v-bind:key="item"><a @click="shower(item)">{{item.attributes.headline}}</a><br/><br/><button @click="delt(item.id)">删除</button><button @click="revi(item)">修改</button></h2>
  <button @click="show">123</button>
  </div>

</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      list:{}
    }
  },
  components: {
  },
  mounted:function(){
    this.show();
  },
  methods:{
    show(){
      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const query=new AV.Query('blog');
      query.lessThan('id',300);
      query.find().then((blogs)=>{
        console.log(blogs)
        this.list=blogs
      })
      console.log(this.list)
    },
    newbuilt(){
      
      this.$router.push({path:'/Newbuilt'});
    },
    delt(id){
      const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
      const todo = AV.Object.createWithoutData('blog', id);
       todo.destroy();
    },
    revi(item){
      this.$router.push({
        path:'/Revise',
        query:{
          "id":item.id,
          "headline":item.attributes.headline,
          "content":item.attributes.content
        }
        })
    },
    shower(item){
      this.$router.push({
        path:'/Show',
        query:{
          "id":item.id,
          "headline":item.attributes.headline,
          "content":item.attributes.content
        }
        })
    },
  },
}
</script>

<style>
.ep{
  width: 61.8%;
  height:700px;
}
.wee{
  display: flex;
  justify-content: center;
  width:100%;
}

</style>
