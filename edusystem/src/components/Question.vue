<template>
<div>
  <Header></Header>
  <div class="main">
  <Menu></Menu>
  <div class="questionMain">
  <div class="questionCard">
    <div class="questionName">
    <img :src="imgUrl1">
    <p>大学物理</p>
    </div>
    <br/>
    <p class="questionNumber">共计1010道题</p>
  </div>
  <div class="questionBuild">
  <p>添加新题：</p>
  <input placeholder="选择添加新题型">
  </div>
  <textarea placeholder="请输入题目"></textarea>
  <br/>
  <button class="questionButton">添加</button>
  </div>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
    name:'Question',
    components:{
        Header,
        Menu
    },
    data(){
      return{
        imgUrl1:require("../assets/exampicture.png")
      }
    },
    methods:{

    }
}
</script>

<style>
.questionCard{
  background-color: white;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  margin-left: 80px;
  margin-top: 20px;
}
.questionCard img{
  width: 30px;
  height: 30px;
  margin-top: 50px;
  margin-left: 60px;
}
.questionName p{
  font-size: 20px;
  margin-left: 50px;
  margin-top: 50px;
}
.questionName{
    display: flex;
}
.questionNumber{
  margin-left: 100px;
  margin-top: 50px;
}
.questionBuild{
  display: flex;
  margin-top: 100px;
  margin-left: 50px;
}
.questionBuild input{
  outline: none;
  border: none;
  border-radius: 5px;
  width: 300px;
  height: 27px;
  margin-left: 5px;
}
.questionMain textarea{
  border: none;
  outline: none;
  border-radius: 10px;
  width: 450px;
  height: 200px;
  margin-left: 50px;
  margin-top: 20px;
}
.questionButton{
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: aliceblue;
  margin-left: 350px;
  margin-top: 50px;
}
</style>