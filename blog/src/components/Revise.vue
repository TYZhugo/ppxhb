<template>
  <div>
    <h2>标题：</h2>
    <input v-model="headline"/>
    <h2>内容</h2>
    <textarea v-model="content" class="aa"></textarea>
    <br/>
    <button @click="revise">保存</button>
  </div>
</template>

<script>
export default {
    name:'Revise',
    data(){
      return{
        headline:this.$route.query.headline,
        content:this.$route.query.content
      }
    },
    methods:{
        revise(){
          if(this.headline.length==0){
            alert("标题不能为空!!!")
          }else{
            let revision={
              "id":this.$route.query.id,
              "headline":this.headline,
              "content":this.content
            }
            const AV = require('leancloud-storage');
            AV.init({
            appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
            appKey: "vky0hDUeQiaK50ay78CsgMBz",
            serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
          });

            this.$store.commit('change3',revision)
            this.$router.push({path:'/'})
            console.log(revision)
            console.log(this.$route.query)
            console.log(this.$store.state.List)
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