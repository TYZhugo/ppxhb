<template>
  <div class='eee'>
    <h2>标题：</h2>
    <span>{{headline}}</span>
    <h2>内容</h2>
    <span>{{content}}</span>
    <br/>
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
    name:'Show',
    data(){
        return{
            headline:this.$route.query.headline,
            content:this.$route.query.content
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/'})
        }
    }
}
</script>

<style>
.eee{
    width:100%;
    height:700px;
    text-align: center;
}
</style>