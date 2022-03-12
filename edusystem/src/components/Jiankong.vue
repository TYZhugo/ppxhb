<template>
  <div>
      <select>
            <option>大一一班</option>
            <option>大一二班</option>
        </select>
        <div  class="JKface">
        <div v-for="i in 20" v-bind:key="i" class="JKcard"></div>
        </div>
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
}
.JKcard{
    width: 150px;
    height: 150px;
    background-color: dimgray;
    margin-left: 3px;
    margin-top: 3px;
    border-left:1px solid white ;
}
</style>