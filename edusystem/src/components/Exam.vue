<template>
  <div>
    <div class="main">
    <div>
      <div class="examButton">
      <button @click="onechange">已发布</button>
      <button @click="twochange">待发布</button>
      <button @click="threechange">待批改</button>
      </div>
      <div v-if="oneVisible" class="examFace">
        <div v-for="i in 6" v-bind:key="i" class="box1"><img :src="imgUrl1"><div class="examText"><p>大学物理</p><p>2021.1.30 8: 00--10:00</p></div><div class="examDelt">&times;</div></div>
      </div>
      <div v-if="twoVisible" class="examFace">
        <div v-for="i in 6" v-bind:key="i" class="box1"><img :src="imgUrl1"><div class="examText"><p>大学物理</p><p>2021.1.30 8: 00--10:00</p></div><div class="examDelt">&times;</div></div>
      </div>
      <div v-if="threeVisible" class="examFace">
        <div v-for="i in 6" v-bind:key="i" class="box1"><img :src="imgUrl1"><div class="examText"><p>大学物理</p><p>2021.1.30 8: 00--10:00</p><p class="qwee">未批改</p></div><div class="examDelt">&times;</div></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Exam',
  components:{
  },
  data(){
    return{
      oneVisible:true,
      twoVisible:false,
      threeVisible:false,
      imgUrl1:require("../assets/exampicture.png")
    }
  },
  methods:{
    onechange(){
      this.oneVisible=true,
      this.twoVisible=false,
      this.threeVisible=false
    },
    twochange(){
      this.oneVisible=false,
      this.twoVisible=true,
      this.threeVisible=false
    },
    threechange(){
      this.oneVisible=false,
      this.twoVisible=false,
      this.threeVisible=true
    }
  }
}
</script>

<style>
.examButton{
  display: flex;
  justify-content: center;
  width: 800px;
  margin-left: 50px;
  margin-top: 30px;
}
.examButton button{
  width: 200px;
  height: 40px;
  border-radius: 20px;
  border: none;
  margin-left: 50px;
  color: darkgray;
}
.examButton button:hover{
  background-color: darkgray;
  color: black;
}
.examFace{
  display: flex;
  flex-wrap: wrap;
}
.box1{
  width: 250px;
  height: 150px;
  border-radius: 30px;
  background-color: white;
  margin-right: 60px;
  margin-left: 110px;
  margin-top: 70px;
  display: flex;
}
.box1 img{
  width: 30px;
  height: 30px;
  margin-top: 60px;
  margin-left: 20px;
}
.examText{
  margin-top: 50px;
  margin-left: 10px;
}
.examDelt{
  margin-left: 5px;
  margin-top: 10px;
  width: 10px;
  height: 10px;
}
.examDelt:hover{
  cursor: pointer;
}
.qwee{
  margin-left: 114px;
  color: red;
  font-family: "隶书";
}
</style>