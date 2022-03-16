<template>
  <div>
      <div class="main">
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
                  <button class="b-bbutton" @click="change2">保存&去设计试卷</button>
              </div>
              <div v-show="designVisible" class="Bcard2">
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
                  <button class="b-bbutton" @click="change3">保存&去发布试卷</button>
              </div>
              <div v-show="releaseVisible">
                  <h2>发布试卷</h2>
                  <div class="example-basic">
                      <p>考试时间：</p>
                    <el-time-picker v-model="value1" placeholder="开始时间" class="startTime">
                    </el-time-picker>
                    <el-time-picker v-model="value2" placeholder="结束时间" class="endTime">
                    </el-time-picker>
                </div>
                  <p>考试班级：</p>
                  <el-select v-model="value3" multiple placeholder="考试班级" class="ChooseClass">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <br/>
                  <button class="b-bbutton" @click="fabu">发布</button>
              </div>
              </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'Build',
    data(){
        return{
            informationVisible:true,
            designVisible:false,
            releaseVisible:false,
            input1:'',
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
    },
    methods:{
        change1(){
            this.informationVisible=true,
            this.designVisible=false,
            this.releaseVisible=false
        },
        change2(){
             if(this.input1==''){
                alert("考试名称不能为空！！！")
            }else{
            this.informationVisible=false,
            this.designVisible=true,
            this.releaseVisible=false
            }
        },
        change3(){
            this.informationVisible=false,
            this.designVisible=false,
            this.releaseVisible=true
        },
        fabu(){
            if(this.value1==''||this.value2==''){
                alert("未选择考试起止时间！")
            }else{
                if(this.value3==''){
                    alert("未选择考试班级！")
                }else{
                    const AV = require('leancloud-storage');
                    AV.init({
                        appId: "pTtwtgVghMG7r3ReP8EkNEEI-gzGzoHsz",
                        appKey: "vky0hDUeQiaK50ay78CsgMBz",
                        serverURL: "https://pttwtgvg.lc-cn-n1-shared.com"
                    });
                    const exam=AV.Object.extend('exam');
                    const nexam= new exam();
                    nexam.set('examName',this.input1);
                    nexam.set('begintime',this.value1);
                    nexam.set('endtime',this.value2);
                    nexam.save().then(function(){
                        console.log('保存成功')
                    })
                }
            }
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
.Bcard2 select{
    height: 40px;
    width: 300px;
    border: none;
    outline: none;
    border-radius: 5px;
}
select:focus{
    outline: none;
}
.ChooseClass{
    width: 300px;
}
</style>