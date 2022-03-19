<template>
  <div class="questionshowcard">
      <p>选择题</p>
      <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    name:'Queationshow',
    data(){
        return{
            style:this.$route.query.style,
            content:this.$route.query.content
        }
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