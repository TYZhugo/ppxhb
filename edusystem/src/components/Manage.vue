<template>
  <div>
  <div class="main">
  <div class="manageCard">
    <div v-for="i in 6" v-bind:key="i" class="box1" @click="correct"><img :src="imgUrl1"><div class="examText"><p>大学物理</p><p>2021.1.30 8: 00--10:00</p></div></div>
  </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Manage',
    components:{
    },
    data(){
      return{
        imgUrl1:require("../assets/exampicture.png")
      }
    },
    methods:{
      correct(){
        this.$router.push('/Correct')
      }
    }
}
</script>

<style>
.manageCard{
  display: flex;
  flex-wrap: wrap;
}
.box1{
  cursor: pointer;
}
</style>