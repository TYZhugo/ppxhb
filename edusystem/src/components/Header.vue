<template>
    <div class="heads" v-if="this.$store.state.islogin">
      <h1 class='system'>HELLO!</h1>
      <div class="headers">
        <Dropdown  class="dropdown" v-on:click="$emit('click')"/>
      </div>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    components:{
        Dropdown
    },
    emits:['click'],
    data(){
        return {

        }
    },
    methods:{
        returnLogin(){
        this.$router.push('/Login')
      }
    }
}
</script>

<style>
.heads{
    display: flex;
    width: 100%;
    height: 140px;
    background-color: rgba(37, 173, 71, 1);

}
.headers{
    display: flex;
    font-family: "宋体";
    width:80%;
    justify-content: flex-end;
    align-items: center;
    margin-left: 100px;
}
.system{
    color:rgba(10, 120, 8, 1);
    font-family: "江西拙楷";
    font-size: 48px;
    margin-left: 51px;
    margin-top: 23px;
}
#picture{
    margin-right: 40px;
    border-right: 1px solid gray;
    height: 90px;
    margin-top: 40px;
}
.img1{
    margin-right: 30px;
}
</style>