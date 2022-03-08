<template>
  <div>
  <Header></Header>
  <div class="main">
  <Menu></Menu>
  <div class="manageCard">
    <div v-for="i in 6" v-bind:key="i" class="box1"><img :src="imgUrl1"><div class="examText"><p>大学物理</p><p>2021.1.30 8: 00--10:00</p></div></div>
  </div>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
export default {
    name:'Manage',
    components:{
        Header,
        Menu
    },
    data(){
      return{
        imgUrl1:require("../assets/exampicture.png")
      }
    }
}
</script>

<style>
.manageCard{
  display: flex;
  flex-wrap: wrap;
}
</style>