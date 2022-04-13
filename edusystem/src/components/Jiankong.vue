<template>
  <div>
      <div class="jkhead">
      <select>
            <option>大一一班</option>
            <option>大一二班</option>
        </select>
        <div class="wranging" @click="jgchange"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></svg>提醒</div>
      </div>
        <el-scrollbar   height="700px">
            <div class="JKface">
        <div v-for="i in 30" v-bind:key="i" class="JKcard"><input type="radio" v-if="jgshow"/></div>
            </div>
        </el-scrollbar>
        <div class="jkwarning" v-if="jgshow1">
            <p><svg viewBox="0 0 1024 1024" width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="white" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"></path></svg><br/>&nbsp;已提醒</p>
        </div>
  </div>
</template>

<script>
export default {
    name:'Jiankong',
    data(){
        return{
            jgshow:false,
            jgshow1:false
        }
    },
    methods:{
        jgchange(){
            this.jgshow=!this.jgshow
            if(!this.jgshow){
                this.jgshow1=!this.jgshow1;
            setTimeout(()=>{this.jgshow1=!this.jgshow1;},2000)
            }
        }
    }
}
</script>

<style>
.JKface{
    display: flex;
    flex-wrap: wrap;
    width: 800px;
}
.JKcard{
    width: 150px;
    height: 150px;
    background-color: dimgray;
    margin-left: 3px;
    margin-top: 3px;
    border-left:1px solid white ;
}
.jkhead{
    display: flex;
    
}
.jkhead select{
    width: 150px;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
}
.wranging{
    margin-left: 650px;
}
.wranging:hover{
    cursor: pointer;
}
.jkwarning{
    width: 400px;
    height: 270px;
    background-color: black;
    position: fixed;
    top: 40%;
    left: 40%;
    opacity: 0.75;
    border-radius: 10px;
    animation: mymove 3s infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    font-family: "宋体";
}
@keyframes mymove{
    from{opacity: 0.75;}
    to{opacity: 0.0;}
}
</style>