<template>
  <div>
      <Header/>
      <div class="main">
          <div class="menu">
            <Menu/>
          </div>
          <el-card class="box-card">
              <div class="b-button">
                  <el-button type="primary" plain round="ture" class="b-ebutton" @click="dialogVisible = true">1、考试信息</el-button>
                  <el-button type="primary" plain round="ture" class="b-ebutton">2、设计试卷</el-button>
                  <el-button type="primary" plain round="ture" class="b-ebutton">3、发布试卷</el-button>
              </div>
              <h2>基本信息</h2>
              <div>
                  <p>考试名称：</p>
                  <el-input v-model="input1" />
                  <p>考生须知：</p>
              </div>
              <el-dialog
                v-model="dialogVisible"
                title="Tips"
                width="30%"
                :before-close="handleClose"
                >
                    <span>This is a message</span>
                    <template #footer>
                    <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false"
                        >Confirm</el-button
        >
                    </span>
                    </template>
                </el-dialog>
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
    height:80px;
    display: flex;
    justify-content: center;
    width: 800px;
}
.b-ebutton{
    margin: 0 100px;
}
.main h2{
    font-family: "宋体";
}
</style>