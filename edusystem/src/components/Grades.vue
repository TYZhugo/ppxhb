<template>
  <div>
  <div class="mains">
    <div class="inforArea">
      <div class="Infor-content" v-for="(item,index) in informationList" :key="index">
        <div class="isTeacher" v-if="item.user=='teacher'">
          <div class="My-informations-content">{{item.content}}</div>
          <img :src="imgUrl3"/>
        </div>
        <div class="isStudent" v-if="item.user=='students'">
          <img :src="imgUrl4"/><div class="My-informations-content">{{item.content}}</div>
        </div>
      </div>
    </div>
    
    <div class="text-area">
      <div class="text-function">
      <Emoji ref="getEmoji" @changeText="changeText"></Emoji>
      <button class="emotionSelect"><img :src="imgUrl2"/></button>
      <CirclePlus/>
    </div>
      <textarea id="textarea" class="chatInput" placeholder="请输入内容" v-model="message" />
      <br/>
      <button @click="InformationPush">发送</button>
    </div>
  </div>
</div>
</template>

<script>
  import Emoji from './Emoji.vue'
  import CirclePlus from './CirclePlus.vue'
export default {
    name:'Grades',
    components:{
      Emoji,
      CirclePlus
    },
    data(){
        return{
            imgUrl1:require('../assets/emoji.png'),
            imgUrl2:require('../assets/Microphone.png'),
            imgUrl3:require('../assets/Header.png'),
            imgUrl4:require('../assets/StudentsHeader.png'),
            imgUrl5:require('../assets/qipao.png'),
            My_informationList:[
              {
                user:'teacher',
                content:'任务通知'
              }
              
            ],
            Other_informationList:[
              {
                content:'收到，已完成'
              }
            ],
            message:'',
            informationList:[
              {
                user:'teacher',
                content:'任务通知'
              },
              {
                user:'students',
                content:'收到，已完成'
              }
            ]
        }
    },
    methods:{
      showgrades(classid){
        this.$router.push({
          path:'/Gradeshow',
         query:{
           "classid":classid
         }
        })
      },
      changeText() {
            var textArea = document.getElementById('textarea');
            function changeSelectedText(obj, str) {
              if (window.getSelection) {
                    textArea.setRangeText(str);
                    textArea.selectionStart += str.length;
                    textArea.focus()
                } else if (document.selection) {
                    obj.focus();
                    var sel = document.selection.createRange();
                    sel.text = str;
                }
            }
            changeSelectedText(textArea, this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
            this.message = textArea.value;
            console.log(this.$refs.getEmoji.faceList[this.$refs.getEmoji.emojiItem]);
        },
        InformationPush(){
          var messages = {
            user:'teacher',
            content:this.message
          }
          this.informationList=[...this.informationList,messages]
          this.message = ''
        }
    },
}
</script>

<style>
.mains{
  display: flex;
  position: relative;
  height: 700px;
}
.text-area{
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 800px;
  height: 300px;
  border: 1px solid black;
}
.inforArea{
  background-color: white;
  width: 800px;
  height: 450px;
}
.chatInput{
  border: none;
  outline: none;
  width: 700px;
  height: 200px;
  font-size: 16px;
}
.text-function{
  display: flex;
}
.el-icon{
  margin-top: 4px;
  cursor: pointer;
  margin-right: 15px;
}
.el-icon :hover{
  color: gray;
}
.isTeacher{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.isStudent{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.My-informations-content{
  font-size: 24px;
  border: 1px solid gray;
  margin-right: 20px;
}
.chatInput :focus{
  outline: none;
}
</style>