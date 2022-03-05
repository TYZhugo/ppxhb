<template>
  <div>
      <Header></Header>
      <div class="main">
          <div class="menu">
            <Menu></Menu>
          </div>
          <el-card class="box-card">
              <div class="b-button">
                  <button  class="b-ebutton" @click="dialogVisible = true">1、考试信息</button>
                  <button  class="b-ebutton">2、设计试卷</button>
                  <button class="b-ebutton">3、发布试卷</button>
              </div>
              <div v-if="dialogVisible">
                  <h2>基本信息</h2>
                  <p>考试名称：</p>
                  <el-input v-model="input1" />
                  <p>考生须知：</p>
                  <input>
              </div>
          </el-card>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
    name:'Build',
    data(){
        return{
            dialogVisible:false
        }
    },
    components:{
        Header,
        Menu
    }

}
</script>

<style>
.b-button{
    height:40px;
    display: flex;
    justify-content: center;
    width: 800px;
}
.b-ebutton{
    width: 200px;
    margin: 0 30px;
    border-radius: 20px;
    border: none;
    color: darkgray;
}
.b-ebutton:hover{
    background-color: darkgray;
    color: black;
    cursor: pointer;
}
.main h2{
    font-family: "宋体";
}
template{
    width: 800px;
    height: 450px;
    border: 1px solid gray;
}
</style>