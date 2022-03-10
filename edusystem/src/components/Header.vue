<template>
    <div class="heads" v-if="this.$store.state.islogin">
      <h1 class='system'>教师端</h1>
      <div class="headers">
          <div id="picture">
          <img :src="imgUrl" class="img1"/>
          <h2 >客服</h2>
          </div>
        <Dropdown  class="dropdown"/>
      </div>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    components:{
        Dropdown
    },
    data(){
        return {
            imgUrl:require("../assets/kefu.png")
        }
    }
}
</script>

<style>
.heads{
    display: flex;
    width: 100%;
    height: 140px;
    background-color: white;

}
.headers{
    display: flex;
    font-family: "宋体";
    width:80%;
    justify-content: flex-end;
    margin-left: 100px;
}
.system{
    color:rgb(98, 0, 128) ;
    font-family: "宋体";
}
#picture{
    margin-right: 40px;
    border-right: 1px solid gray;
    height: 90px;
    margin-top: 40px;
}
.dropdown{
    margin-top: 50px;
}
.img1{
    margin-right: 30px;
}
</style>