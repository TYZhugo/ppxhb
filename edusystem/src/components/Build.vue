<template>
  <div>
      <Header></Header>
      <div class="main">
          <div class="menu">
            <Menu></Menu>
          </div>
          <div class="buildFace">
              <div class="b-button">
                  <button  class="b-ebutton" @click="change1">1、考试信息</button>
                  <button  class="b-ebutton" @click="change2">2、设计试卷</button>
                  <button class="b-ebutton" @click="change3">3、发布试卷</button>
              </div>
              <div v-show="informationVisible">
                  <h2>基本信息</h2>
                  <p>考试名称：</p>
                  <el-input v-model="input1" />
                  <p>考生须知：</p>
                  <textarea class="instructions"></textarea>
                  <br/>
                  <button class="b-bbutton">保存&去设计试卷</button>
              </div>
              <div v-show="designVisible">
                  <h2>设计试卷</h2>
                  <p>考试模板：</p>
                  <select>
                      <option>模板一 单选+填空+解答题</option>
                      <option>模板二 单选+填空+判断+解答题</option>
                      <option>模板三 单选+填空+解答题</option>
                      <option>模板四 单选+填空+判断+解答题</option>
                  </select>
                  <p>组件方式：</p>
                  <select>
                      <option>系统组卷</option>
                      <option>手动组卷</option>
                  </select>
                  <br/>
                  <button class="b-bbutton">保存&去发布试卷</button>
              </div>
              <div v-show="releaseVisible">
                  <h2>发布试卷</h2>
                  <div class="example-basic">
                      <p>考试时间：</p>
                    <el-time-picker v-model="value1" placeholder="开始时间" class="startTime">
                    </el-time-picker>
                    <el-time-picker v-model="value2" arrow-control placeholder="结束时间" class="endTime">
                    </el-time-picker>
                </div>
                  <p>考试班级：</p>
                  <el-select v-model="value3" multiple placeholder="考试班级">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <br/>
                  <button class="b-bbutton">发布</button>
              </div>
              </div>
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
            informationVisible:true,
            designVisible:false,
            releaseVisible:false,
            value1:'',
            value2:'',
            value3:[],
            options : [
                        {
                            value: '软件2101',
                            label: '软件2101',
                        },
                        {
                            value: '软件2102',
                            label: '软件2102',
                        },
                        {
                            value: '软件2103',
                            label: '软件2103',
                        },
                        {
                            value: '软件2104',
                            label: '软件2104',
                        },
                    ],
        }
    },
    components:{
        Header,
        Menu
    },
    methods:{
        change1(){
            this.informationVisible=true,
            this.designVisible=false,
            this.releaseVisible=false
        },
        change2(){
            this.informationVisible=false,
            this.designVisible=true,
            this.releaseVisible=false
        },
        change3(){
            this.informationVisible=false,
            this.designVisible=false,
            this.releaseVisible=true
        }
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
.buildFace{
    margin-left: 60px;
    margin-top: 40px;
}
.b-bbutton{
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin-left: 300px;
    border: none;
}
.b-bbutton:hover{
    background-color: darkgray;
    cursor: pointer;
}
.instructions{
    width: 80%;
    height: 400px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-indent: 30px;
    font-size: 20px;
}
.instructions :active{
    border: 1px solid deepskyblue;
}
.endTime{
    margin-left: 30px;
}
</style>