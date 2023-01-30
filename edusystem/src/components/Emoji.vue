<template>
    <div class="chatIcon">
         <el-popover popper-class="biaoqing" placement="top" :width="400" trigger="click">
             <template #reference>
                 <button class="emotionSelect"><img :src="imgUrl1"/></button>
             </template>
             <div class="emotionList">
                 <a href="javascript:void(0);" @click="getEmo(index)" v-for="(item,index) in faceList" :key="index"
                     class="emotionItem">{{item}}</a>
             </div>
         </el-popover>
  
     </div>
 </template>
 
 <script>
 
 import appData from "./emoji"
 export default {
   name:'HelloWard',
     mounted() {
         for (let i in appData) {
             this.faceList.push(appData[i].char);
         }
     },
     data() {
         return {
             faceList: [],
             emojiItem: null,
             imgUrl1:require('../assets/emoji.png')
         };
     },
     methods: {
         getEmo(index) {
             this.emojiItem = index;
             this.$emit("changeText")
         }
     }
 }
 </script>
 
 <style>
 
 .emotionSelect {
     width: 40px;
     height: 40px;
     border: none;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: white;
 }
 .emotionSelect img {
     width: 35px;
     height: 35px;
 }
 .chatIcon {
     padding: 0 10px;
     font-size: 25px;
 }
 .emotionList {
     display: flex;
     flex-wrap: wrap;
     padding: 5px;
 }
 .emotionItem {
     width: 10%;
     font-size: 20px;
     text-align: center;
 }
 /*包含以下四种的链接*/
 .emotionItem {
     text-decoration: none;
 }
 /*正常的未被访问过的链接*/
 .emotionItem:link {
     text-decoration: none;
 }
 /*已经访问过的链接*/
 .emotionItem:visited {
     text-decoration: none;
 }
 /*鼠标划过(停留)的链接*/
 .emotionItem:hover {
     text-decoration: none;
 }
 /* 正在点击的链接*/
 .emotionItem:active {
     text-decoration: none;
 }
 
 </style>