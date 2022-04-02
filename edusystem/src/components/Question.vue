<template>
<div>
  <div class="main">
  <div class="questionMain">
  <div class="questionCard" @click="showquestion">
    <div class="questionName" >
    <img :src="imgUrl1">
    <p>大学物理</p>
    </div>
    <br/>
    <p class="questionNumber">共计{{questionnumber}}道题</p>
  </div>
  <div class="questionBuild">
  <p>添加新题：</p>
  <el-select v-model="value" multiple placeholder="选择题型" class="ChooseClass">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      </el-option>
  </el-select>
  </div>
  <textarea placeholder="请输入题目" v-model="questionvalue"></textarea>
  <br/>
  <button class="questionButton" @click="addquestion">添加</button>
  </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Question',
    components:{
    },
    data(){
      return{
        imgUrl1:require("../assets/exampicture.png"),
        options : [
                        {
                            value: '选择题',
                            label: '选择题',
                        },
                        {
                            value: '填空题',
                            label: '填空题',
                        },
                        {
                            value: '判断题',
                            label: '判断题',
                        },
                        {
                            value: '简答题',
                            label: '简答题',
                        },
                    ],
        questionnumber:0,
        questionvalue:'',
        value:[]
      }
    },
    methods:{
      addquestion(){
        if(this.questionvalue!==''){
        this.questionnumber++
         const AV = require('leancloud-storage');
      AV.init({
          appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
          appKey: "vky0hDUeQiaK50ay78CsgMBz",
          serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
        });
        const newquestion=new AV.Object.extend('questions')
        const nnewquestion=new newquestion()
        nnewquestion.set('question',this.questionvalue)
        nnewquestion.save().then(function(){
          console.log('保存成功')
          })
        }else{
          alert('题干不能为空！！！')
        }
      },
      showquestion(){
        this.$router.push({
          path:'/Questionshow',
          query:{
            "style":this.value,
            "content":this.questionvalue
          }
        })
      }
      
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
  cursor: pointer;
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