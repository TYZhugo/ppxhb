<template>
  <div>
      <div class="jkhead">
      <select>
            <option>大一一班</option>
            <option>大一二班</option>
        </select>
        <div class="wranging"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></svg>警告</div>
      </div>
        <el-scrollbar   height="700px">
            <div class="JKface">
        <div v-for="i in 30" v-bind:key="i" class="JKcard"><input type="radio"/></div>
            </div>
        </el-scrollbar>
  </div>
</template>

<script>
export default {
    name:'Jiankong'
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
</style>