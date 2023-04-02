<template>
    <div class="Function" >
      <draggable 
       v-model="list"
       @start="onStart"
       @end="onEnd"
       ghostClass="ghost" 
       chosenClass="chosen"
       force-fallback="true" 
       animation="600"
       class="items"
      >
      <template #item="{element}">
        <div class="item"   :style="itemObject(element)" >
              {{ element.name }}
          </div>
   </template>
          
      </draggable>
    </div>
  </template>
  
  <script >
  import draggable from 'vuedraggable';
  
  export default {
      name:'Function',
      components:{
          draggable
      },
      data(){
          return{
              list:[
              {
                    name:'张三',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00',
                    id:1
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00',
                    id:2
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00',
                    id:3
                },
                {
                    name:'xiaoA',
                    sex:'男',
                    position:'门店经理',
                    time:'10:00-18:00',
                    id:4
                },
                {
                    name:'李四',
                    sex:'男',
                    position:'副经理',
                    time:'10:00-18:00',
                    id:5
                },
                {
                    name:'王五',
                    sex:'女',
                    position:'小组长',
                    time:'10:00-18:00',
                    id:6
                }
              ],
          }
      },
      methods:{
          onStart(){
              console.log(this.list)
              var i = 0;
              for(;i<this.list.length;i++){
                  this.list[i].id = i+1;
              }
          },
          onEnd(){
              var i = 0;
              for(;i<this.list.length;i++){
                  this.list[i].id = i+1;
              }
          },
          handleDown (edown) {
              var tuozhuaiNode = document.getElementById('tuozhuai')
              var xNum = edown.clientX - tuozhuaiNode.offsetWidth
              tuozhuaiNode.onmousemove = function (eMove) {
              tuozhuaiNode.style.width = eMove.clientX - xNum + 'px'
              }
          },
          handleUp () {
              var tuozhuaiNode = document.getElementById('tuozhuai')
              tuozhuaiNode.onmousemove = null
          },
          
      },
      computed: {
          itemObject(){
              return (item)=>({
                  backgroundColor: item.background,
                  gridColumnStart: item.id,
                  gridRowStart: item.id,
              })
          }
      }
  }
  </script>
  
  <style >
  .Function{
  }
  .ghost {
      border: solid 1px rgb(19, 41, 239) !important;
  }
  
  .chosenClass {
      background-color: #eee;
      opacity: 1;
      border: solid 1px red;
  }
  .item {
      border: solid 1px #eee;
      padding: 6px 10px;
      width: 400px;
      height: 30px;
  }
  .item:hover {
      cursor: move;
  }
  
 
  .items{
      display: grid;
      grid-template-columns: repeat(7, 100px);
      grid-template-rows: repeat(7, 50px);
  }
  </style>